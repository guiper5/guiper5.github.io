/**
 * Pós-build de SEO/AEO.
 *
 * O site é uma SPA sem SSR: sem este passo, todas as URLs servem o <head> da
 * home no HTML inicial, e só o React (depois de executar) corrige title,
 * canonical e Open Graph. Crawler que não executa JS, e a maior parte dos
 * bots de IA não executa, nunca vê a meta correta da página.
 *
 * O que este script faz sobre `dist/`:
 *   1. escreve um index.html por rota, com o <head> daquela página;
 *   2. gera sitemap.xml a partir do registro de rotas;
 *   3. gera llms.txt para mecanismos de resposta.
 *
 * O que ele NÃO faz: renderizar o corpo da página. O <div id="root"> segue
 * vazio no HTML estático. Isso exigiria prerender completo com navegador
 * headless, decisão adiada conscientemente (ver SITE_REVIEW.md).
 *
 * Escape: SKIP_SEO_BUILD=1 pula tudo, para que uma falha aqui nunca trave o deploy.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SECTION_TITLES, SITE_URL, seoRoutes, type SeoRoute, type SeoRouteKind } from '../src/data/seoRoutes.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const OG_IMAGE = `${SITE_URL}/og-image.png`;

if (process.env.SKIP_SEO_BUILD === '1') {
  console.log('[build-seo] SKIP_SEO_BUILD=1, passo ignorado.');
  process.exit(0);
}

if (!existsSync(DIST)) {
  console.error('[build-seo] dist/ não existe. Rode `vite build` antes.');
  process.exit(1);
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Substitui a tag se ela existir no shell; se não existir, insere antes de </head>. */
function setTag(html: string, pattern: RegExp, tag: string): string {
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function buildJsonLd(route: SeoRoute) {
  const url = `${SITE_URL}${route.path}`;

  const organization = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'PER5 Projetos e Consultoria',
    url: SITE_URL,
    telephone: '+55-19-99150-8664',
    email: 'guilherme@per5.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Campinas',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    hasCredential: 'CREA-SP',
    areaServed: 'BR',
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  };

  const crumbs =
    route.path === '/'
      ? [{ '@type': 'ListItem', position: 1, name: 'PER5', item: SITE_URL }]
      : [
          { '@type': 'ListItem', position: 1, name: 'PER5', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: route.label, item: url },
        ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: 'PER5', inLanguage: 'pt-BR' },
      webPage,
      { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs },
    ],
  };
}

function renderHead(shell: string, route: SeoRoute): string {
  const url = `${SITE_URL}${route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  let html = shell;

  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = setTag(
    html,
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${description}" />`
  );
  html = setTag(
    html,
    /<meta\s+name="keywords"[^>]*>/,
    `<meta name="keywords" content="${escapeHtml(route.keywords ?? '')}" />`
  );
  html = setTag(html, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta\s+property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`);
  html = setTag(
    html,
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = setTag(html, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`);
  html = setTag(
    html,
    /<meta\s+name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${description}" />`
  );
  html = setTag(html, /<meta\s+name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${OG_IMAGE}" />`);

  const jsonLd = `<script type="application/ld+json" id="seo-jsonld-static">${JSON.stringify(
    buildJsonLd(route)
  )}</script>`;
  html = html.replace('</head>', `    ${jsonLd}\n  </head>`);

  return html;
}

function renderSitemap(routes: SeoRoute[]): string {
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${r.updated}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderLlmsTxt(routes: SeoRoute[]): string {
  const order: SeoRouteKind[] = [
    'home',
    'sala-tecnica',
    'servico',
    'segmento',
    'documentacao',
    'regional',
    'hub',
    'cidade',
    'glossario',
  ];

  const sections = order
    .map((kind) => {
      const items = routes.filter((r) => r.kind === kind);
      if (!items.length) return '';
      const lines = items
        .map((r) => `- [${r.label}](${SITE_URL}${r.path}): ${r.description}`)
        .join('\n');
      return `## ${SECTION_TITLES[kind]}\n\n${lines}\n`;
    })
    .filter(Boolean)
    .join('\n');

  return `# PER5 Projetos e Consultoria

> Facilitadora de engenharia civil sediada em Campinas (SP), com atendimento em todo o Brasil. Desenvolve projetos de infraestrutura (terraplenagem, drenagem pluvial, pavimentação e urbanismo) com memorial de cálculo e ART. Não executa obras.

Contato: guilherme@per5.com.br · WhatsApp +55 19 99150-8664 · CREA-SP
Idioma do conteúdo: português do Brasil.

${sections}
## Observações

- A PER5 é facilitadora de engenharia: entrega projeto técnico, laudo e consultoria. Não atua como construtora nem empreiteira.
- Sede em Campinas (SP), com atendimento a obras em todo o território nacional.
- Valores não são publicados: o orçamento é montado por escopo de projeto.
`;
}

async function main() {
  const shellPath = join(DIST, 'index.html');
  const shell = await readFile(shellPath, 'utf8');

  let written = 0;
  for (const route of seoRoutes) {
    // A home é o próprio shell. Reescrevê-la quebraria o 404.html do GitHub Pages,
    // que é uma cópia deste arquivo.
    if (route.path === '/') continue;

    const outDir = join(DIST, route.path.replace(/^\//, ''));
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), renderHead(shell, route), 'utf8');
    written++;
  }

  await writeFile(join(DIST, 'sitemap.xml'), renderSitemap(seoRoutes), 'utf8');
  await writeFile(join(DIST, 'llms.txt'), renderLlmsTxt(seoRoutes), 'utf8');

  console.log(`[build-seo] ${written} páginas com <head> próprio`);
  console.log(`[build-seo] sitemap.xml com ${seoRoutes.length} URLs`);
  console.log('[build-seo] llms.txt gerado');
}

main().catch((err) => {
  console.error('[build-seo] falhou:', err);
  process.exit(1);
});
