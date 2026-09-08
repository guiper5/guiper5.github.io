import { useEffect } from 'react';

interface SEOMeta {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  ogImage?: string;
  /** Padrão: 'index, follow'. Use 'noindex, follow' em páginas que não devem ser indexadas. */
  robots?: string;
  jsonLd?: object | object[];
}

const SITE_URL = 'https://per5.com.br';

const DEFAULT_KEYWORDS =
  'engenharia civil, projeto de infraestrutura, terraplenagem, drenagem pluvial, pavimentação, projeto urbanístico, PER5';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Atualiza title/meta/canonical/JSON-LD do <head> a cada troca de rota.
 * Necessário porque o site é uma SPA client-rendered sem SSR/prerender:
 * o index.html só traz as tags estáticas da home.
 */
export function useSEO(meta: SEOMeta) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${meta.canonicalPath}`;
    const ogImage = meta.ogImage || `${SITE_URL}/og-image.png`;

    // Todos os campos gerenciados são reescritos em toda rota (com fallback),
    // senão a meta da página anterior sobrevive ao unmount e vaza para a próxima.
    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'keywords', meta.keywords || DEFAULT_KEYWORDS);
    upsertMeta('name', 'robots', meta.robots || 'index, follow');
    upsertLink('canonical', canonicalUrl);

    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', ogImage);

    const scriptId = 'seo-jsonld-route';
    document.getElementById(scriptId)?.remove();
    if (meta.jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.textContent = JSON.stringify(meta.jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
    // jsonLd é reconstruído a cada render nos templates; comparar pelo conteúdo
    // evita remover e reinjetar o <script> sem necessidade.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    meta.title,
    meta.description,
    meta.keywords,
    meta.canonicalPath,
    meta.ogImage,
    meta.robots,
    JSON.stringify(meta.jsonLd),
  ]);
}
