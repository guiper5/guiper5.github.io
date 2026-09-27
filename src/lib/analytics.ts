/**
 * Google Analytics 4 com Consent Mode v2.
 *
 * - O ID vem de VITE_GA_ID (.env.production). Sem ID, nada é carregado.
 * - Só carrega em build de produção fora de localhost.
 * - Todo consentimento começa negado; a escolha salva é aplicada antes do
 *   gtag.js, então nenhuma coleta com cookie acontece sem o "Aceitar".
 * - page_view é enviado manualmente a cada troca de rota (ver AnalyticsRouteTracker).
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConsentChoice = 'granted' | 'denied';

export const GA_ID: string = import.meta.env.VITE_GA_ID ?? '';

const CONSENT_KEY = 'per5-cookie-consent';
/** Disparado para reabrir o banner (link "Preferências de cookies" no rodapé). */
export const OPEN_CONSENT_EVENT = 'per5:open-cookie-consent';

const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]', '0.0.0.0'];

export const analyticsEnabled = (): boolean =>
  Boolean(GA_ID) &&
  import.meta.env.PROD &&
  typeof window !== 'undefined' &&
  !LOCAL_HOSTS.includes(window.location.hostname);

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function storeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* navegação privada ou storage bloqueado: a escolha vale só nesta visita */
  }
}

/** Remove cookies _ga* do domínio atual e do domínio raiz. */
function clearGaCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host.replace(/^www\./, '')}`];
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
    });
  });
}

export function setConsent(choice: ConsentChoice) {
  storeConsent(choice);
  window.gtag?.('consent', 'update', { analytics_storage: choice });
  if (choice === 'denied') clearGaCookies();
}

/** Envia um evento ao GA4. Sem gtag (dev, localhost, sem ID), não faz nada. */
export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

const WHATSAPP_RE = /^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i;
const CTA_SELECTOR = '[data-cta], .btn-amber, .btn-ghost, .btn-outline-amber';

const labelOf = (el: Element) =>
  (el.getAttribute('data-cta') || el.getAttribute('aria-label') || el.textContent || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100);

/**
 * Um único listener cobre todos os links de WhatsApp, tel:, mailto: e CTAs do
 * site, sem precisar instrumentar cada componente.
 */
function handleClick(event: MouseEvent) {
  const target = event.target as Element | null;
  if (!target?.closest) return;

  const page_path = window.location.pathname;
  const link = target.closest<HTMLAnchorElement>('a[href]');
  const href = link?.getAttribute('href') ?? '';
  const linkLabel = link ? labelOf(link) : '';

  if (WHATSAPP_RE.test(href)) track('whatsapp_click', { link_url: href, label: linkLabel, page_path });
  else if (href.startsWith('tel:')) track('phone_click', { link_url: href, label: linkLabel, page_path });
  else if (href.startsWith('mailto:')) track('email_click', { link_url: href, label: linkLabel, page_path });

  const cta = target.closest(CTA_SELECTOR);
  // O envio do formulário é medido por generate_lead, não como clique.
  // Os botões do banner de cookies também não contam como CTA.
  if (cta && !cta.hasAttribute('data-consent') && !(cta instanceof HTMLButtonElement && cta.type === 'submit')) {
    track('cta_click', { label: labelOf(cta), link_url: href || undefined, page_path });
  }
}

let initialized = false;

/** Chamado uma vez em main.tsx, antes do primeiro render. */
export function initAnalytics() {
  if (initialized || !analyticsEnabled()) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js exige o objeto arguments, não um array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  // 1. Padrão: tudo negado. Precisa rodar antes do gtag.js.
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });

  // 2. Escolha de uma visita anterior, antes de qualquer coleta.
  if (getStoredConsent() === 'granted') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);

  document.addEventListener('click', handleClick, { capture: true });
}
