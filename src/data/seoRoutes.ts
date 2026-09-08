import { regionalSeoData } from './regionalSeo';
import { seoLandingData } from './seoLanding';
import { cityLandings } from './cityLandings';
import { salaTecnicaData } from './salaTecnica';

export const SITE_URL = 'https://per5.com.br';

export type SeoRouteKind =
  | 'home'
  | 'sala-tecnica'
  | 'regional'
  | 'hub'
  | 'cidade'
  | 'servico'
  | 'segmento'
  | 'documentacao'
  | 'glossario';

export interface SeoRoute {
  path: string;
  /** Rótulo curto, usado em listas de links e no llms.txt. */
  label: string;
  kind: SeoRouteKind;
  title: string;
  description: string;
  keywords?: string;
  /** Data ISO da última revisão de conteúdo. Vira <lastmod> no sitemap. */
  updated: string;
  priority: number;
}

const HOME: SeoRoute = {
  path: '/',
  label: 'PER5 · Engenharia que facilita',
  kind: 'home',
  title: 'PER5 · Projetos de Infraestrutura Civil | Campinas, SP',
  description:
    'Projetos de infraestrutura civil em Campinas e todo o Brasil: terraplenagem, drenagem, pavimentação e urbanismo com ART e atendimento direto.',
  keywords:
    'projeto de terraplenagem, projeto de drenagem pluvial, projeto de pavimentação, projeto urbanístico, engenharia civil Campinas, topografia Campinas, regularização de obras',
  updated: '2026-09-08',
  priority: 1.0,
};

const SALA_TECNICA: SeoRoute = {
  path: salaTecnicaData.path,
  label: salaTecnicaData.navLabel,
  kind: 'sala-tecnica',
  title: salaTecnicaData.metaTitle,
  description: salaTecnicaData.metaDescription,
  keywords: salaTecnicaData.keywords,
  updated: salaTecnicaData.updated,
  priority: 0.9,
};

const CIDADES_HUB: SeoRoute = {
  path: '/engenharia-civil/cidades',
  label: 'Cidades atendidas',
  kind: 'hub',
  title: 'Cidades Atendidas pela PER5 | Engenharia Civil em SP',
  description:
    'A PER5 é sediada em Campinas e atende obras de engenharia civil em todo o Brasil. Cidades com página própria: Sorocaba, São José dos Campos, Ribeirão Preto e Bauru.',
  keywords:
    'cidades atendidas engenharia civil, engenharia civil interior de São Paulo, projeto de infraestrutura remoto',
  updated: '2026-09-08',
  priority: 0.8,
};

const GLOSSARIO: SeoRoute = {
  path: '/engenharia-civil/glossario',
  label: 'Glossário técnico',
  kind: 'glossario',
  title: 'Glossário Técnico de Engenharia Civil | PER5',
  description:
    'Glossário com definições claras de termos de engenharia civil: ART, corte e aterro, drenagem pluvial, EIV, RIT, patologia das obras, pavimento rígido e flexível, entre outros.',
  keywords:
    'glossário de engenharia civil, o que é ART, o que é EIV, o que é RIT, o que é patologia das obras, dicionário de termos de engenharia',
  updated: '2026-07-22',
  priority: 0.6,
};

const PRIORITY_BY_CATEGORY = {
  servico: 0.7,
  segmento: 0.7,
  documentacao: 0.6,
} as const;

/**
 * Fonte única de verdade das rotas indexáveis.
 *
 * Consumida por `scripts/build-seo.mts` para gerar sitemap.xml, llms.txt e a
 * injeção de <head> estático por URL. O sitemap era mantido à mão, e como as
 * páginas ocultas dependem dele para serem descobertas, esquecer uma entrada
 * significava publicar uma página invisível.
 */
export const seoRoutes: SeoRoute[] = [
  HOME,
  SALA_TECNICA,

  ...regionalSeoData.map<SeoRoute>((r) => ({
    path: r.path,
    label: r.navLabel,
    kind: 'regional',
    title: r.metaTitle,
    description: r.metaDescription,
    keywords: r.keywords,
    updated: '2026-07-22',
    priority: 0.8,
  })),

  CIDADES_HUB,

  ...cityLandings.map<SeoRoute>((c) => ({
    path: c.path,
    label: `Engenharia civil em ${c.city}`,
    kind: 'cidade',
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    updated: c.updated,
    priority: 0.7,
  })),

  ...seoLandingData.map<SeoRoute>((s) => ({
    path: s.path,
    label: s.navLabel,
    kind: s.category,
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    updated: '2026-07-22',
    priority: PRIORITY_BY_CATEGORY[s.category],
  })),

  GLOSSARIO,
];

export const SECTION_TITLES: Record<SeoRouteKind, string> = {
  home: 'Página principal',
  'sala-tecnica': 'Sala Técnica (backoffice de engenharia)',
  servico: 'Serviços de projeto',
  segmento: 'Por segmento de cliente',
  documentacao: 'Documentação e estudos técnicos',
  regional: 'Regiões atendidas',
  hub: 'Cidades atendidas',
  cidade: 'Páginas por cidade',
  glossario: 'Glossário',
};
