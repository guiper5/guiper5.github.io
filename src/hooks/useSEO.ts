import { useEffect } from 'react';

interface SEOMeta {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const SITE_URL = 'https://per5.com.br';

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

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    if (meta.keywords) upsertMeta('name', 'keywords', meta.keywords);
    upsertLink('canonical', canonicalUrl);

    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImage);

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
  }, [meta.title, meta.description, meta.keywords, meta.canonicalPath, meta.ogImage, meta.jsonLd]);
}
