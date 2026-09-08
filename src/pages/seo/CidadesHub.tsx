import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useSectionNav } from '@/hooks/useSectionNav';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DataTable from '@/components/seo/DataTable';
import { cityLandings, SERVICE_MODE_LABEL } from '@/data/cityLandings';
import { regionalSeoData } from '@/data/regionalSeo';

const SITE_URL = 'https://per5.com.br';
const PATH = '/engenharia-civil/cidades';
const whatsappHref = 'https://wa.me/5519991508664';

const CidadesHub = () => {
  const sectionNav = useSectionNav();
  const heroRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const tableRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const listRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  const regiao19 = regionalSeoData.find((r) => r.slug === 'regiao-19');
  const pageUrl = `${SITE_URL}${PATH}`;

  const coverageTable = {
    caption: 'Cidades com página própria na PER5, com região, DDD, formato de trabalho e distância da sede em Campinas.',
    columns: ['Cidade', 'Região', 'DDD', 'Formato de trabalho', 'Distância da sede'],
    rows: [
      ['Campinas e região', 'Região Metropolitana de Campinas', '19', 'Sede da empresa', 'Sede'],
      ...cityLandings.map((c) => [
        c.city,
        c.region,
        c.ddd,
        SERVICE_MODE_LABEL[c.serviceMode],
        `${c.distanceFromCampinasKm} km`,
      ]),
    ],
  };

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Cidades atendidas pela PER5',
      description:
        'Relação de cidades com página própria da PER5 em projetos de engenharia civil. A empresa é sediada em Campinas e atende obras em todo o Brasil.',
      url: pageUrl,
      inLanguage: 'pt-BR',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: cityLandings.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `Engenharia civil em ${c.city}`,
          url: `${SITE_URL}${c.path}`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PER5', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Cidades atendidas', item: pageUrl },
      ],
    },
  ];

  useSEO({
    title: 'Cidades Atendidas pela PER5 | Engenharia Civil em SP',
    description:
      'A PER5 é sediada em Campinas e atende obras de engenharia civil em todo o Brasil. Veja as cidades com página própria: Sorocaba, São José dos Campos, Ribeirão Preto e Bauru.',
    keywords:
      'cidades atendidas engenharia civil, engenharia civil interior de São Paulo, projeto de infraestrutura remoto, engenheiro civil Campinas região, atendimento remoto engenharia',
    canonicalPath: PATH,
    jsonLd,
  });

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />

        <main>
          {/* Hero */}
          <section
            ref={heroRef}
            className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden"
            style={{ backgroundColor: 'var(--s-dark)' }}
          >
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(192,132,89,0.055) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(192,132,89,0.045) 1px, transparent 1px)`,
                  backgroundSize: '60px 60px',
                }}
              />
              <div
                className="absolute right-[-140px] bottom-[-160px] w-[520px] h-[520px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(192,132,89,0.14) 0%, transparent 70%)' }}
              />
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] z-10" style={{ background: 'var(--amber)' }} />

            <div className="relative z-10 container mx-auto px-4">
              <nav aria-label="Breadcrumb" className="mb-6 anim-fade-up">
                <ol className="flex items-center gap-2 text-xs" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  <li>
                    <Link to="/" className="transition-colors hover:opacity-100" style={{ opacity: 0.8 }}>PER5</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li style={{ color: 'var(--amber-l)' }}>Cidades atendidas</li>
                </ol>
              </nav>

              <div className="max-w-3xl anim-fade-up delay-1">
                <span className="eyebrow-light">Cobertura nacional</span>
                <h1
                  className="mb-6"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 'clamp(34px, 4.6vw, 56px)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.01em',
                    color: 'var(--areia)',
                    lineHeight: 1.08,
                  }}
                >
                  Cidades Atendidas pela PER5
                </h1>
                <p className="mb-4 max-w-2xl leading-relaxed text-base" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  A PER5 é sediada em Campinas e atende obras de engenharia civil em todo o Brasil. O projeto é desenvolvido pela nossa equipe, com reuniões técnicas por videoconferência, e a visita ao terreno é agendada quando o trabalho exige leitura presencial. A ART é emitida pelo engenheiro responsável e vale em todo o território nacional.
                </p>
                <p className="mb-4 max-w-2xl leading-relaxed text-base" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  As cidades abaixo têm página própria, com o contexto local que muda o projeto. Obras em outros municípios seguem exatamente o mesmo formato de trabalho.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber group focus-ring">
                    Fale com um engenheiro
                    <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button onClick={() => sectionNav('orcamento')} className="btn-ghost group focus-ring">
                    Solicitar proposta
                    <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Tabela de cobertura */}
          <section ref={tableRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="mb-8 anim-fade-up">
                  <span className="eyebrow">Cobertura</span>
                  <h2
                    className="text-section"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    Cidades com página própria
                  </h2>
                </div>
                <div className="anim-fade-up delay-1">
                  <DataTable table={coverageTable} />
                </div>
              </div>
            </div>
          </section>

          {/* Listas agrupadas */}
          <section ref={listRef} className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--s-2)' }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                <div className="anim-fade-left">
                  <div className="rounded-sm p-6 md:p-8 h-full" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
                    <h2
                      className="text-xl mb-3 flex items-center gap-2"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                    >
                      <MapPin aria-hidden="true" className="h-4 w-4" style={{ color: 'var(--amber)' }} />
                      Campinas e região, onde fica a sede
                    </h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      Região da sede, com deslocamento curto para visita técnica. É também onde oferecemos topografia com equipe própria.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {(regiao19?.coverageAreas ?? []).map((city) => (
                        <span
                          key={city}
                          className="rounded-sm px-3 py-1.5 text-xs"
                          style={{ color: 'var(--amber-d)', background: 'rgba(192,132,89,0.12)', fontFamily: 'Instrument Sans, sans-serif' }}
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/engenharia-civil/regiao-19"
                      className="inline-flex items-center gap-2 text-sm focus-ring group"
                      style={{ color: 'var(--amber-d)', fontFamily: 'Instrument Sans, sans-serif', fontWeight: 600 }}
                    >
                      Ver página da região de Campinas
                      <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="anim-fade-right">
                  <div className="rounded-sm p-6 md:p-8 h-full" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
                    <h2
                      className="text-xl mb-3"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                    >
                      Outras cidades atendidas
                    </h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      Cada uma tem página própria, com o contexto local de relevo, solo e aprovação que muda o projeto.
                    </p>
                    <ul className="space-y-3">
                      {cityLandings.map((c) => (
                        <li key={c.slug}>
                          <Link
                            to={c.path}
                            className="flex items-start justify-between gap-3 rounded-sm p-3 transition-colors focus-ring group"
                            style={{ background: 'var(--s-2)', border: '1px solid var(--bd)' }}
                          >
                            <span>
                              <span
                                className="block text-base"
                                style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                              >
                                {c.city}
                              </span>
                              <span className="block text-xs" style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif' }}>
                                {c.region} · DDD {c.ddd}
                              </span>
                            </span>
                            <ArrowRight
                              aria-hidden="true"
                              className="mt-1 h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                              style={{ color: 'var(--amber)' }}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA final */}
          <section ref={ctaRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div
                className="max-w-4xl mx-auto rounded-sm p-8 md:p-12 text-center anim-scale"
                style={{ background: 'var(--s-2)', border: '1px solid var(--bd)' }}
              >
                <h2 className="text-section mb-4" style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>
                  Sua cidade não está na lista?
                </h2>
                <p className="mb-8 max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  A PER5 atende obras em todo o Brasil, no mesmo formato de trabalho. Conte onde fica a obra e o que ela precisa. O retorno vem direto do engenheiro responsável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber justify-center group focus-ring">
                    <MessageCircle aria-hidden="true" className="h-4 w-4" />
                    Falar pelo WhatsApp
                  </a>
                  <button onClick={() => sectionNav('orcamento')} className="btn-outline-amber justify-center group focus-ring">
                    Solicitar proposta
                    <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="max-w-4xl mx-auto mt-8 text-center">
                <p className="text-xs uppercase" style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif', letterSpacing: '0.12em' }}>
                  Veja também:{' '}
                  <Link to="/engenharia-civil/regiao-19" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Região de Campinas
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/sao-paulo" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Estado de São Paulo
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/brasil" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Todo o Brasil
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/sala-tecnica" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Sala Técnica
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default CidadesHub;
