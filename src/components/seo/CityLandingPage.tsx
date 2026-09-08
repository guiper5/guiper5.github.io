import { ArrowRight, Landmark, MapPin, MessageCircle, Route, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useSectionNav } from '@/hooks/useSectionNav';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DataTable from '@/components/seo/DataTable';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cityLandings, type CityLandingData } from '@/data/cityLandings';

const SITE_URL = 'https://per5.com.br';
const whatsappHref = 'https://wa.me/5519991508664';

interface CityLandingPageProps {
  data: CityLandingData;
}

const CityLandingPage = ({ data }: CityLandingPageProps) => {
  const sectionNav = useSectionNav();
  const heroRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const remoteRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const compRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const demandRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const contextRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const faqRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  const pageUrl = `${SITE_URL}${data.path}`;
  const nearby = data.nearbySlugs
    .map((slug) => cityLandings.find((c) => c.slug === slug))
    .filter((c): c is CityLandingData => Boolean(c));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: `Projetos de engenharia civil em ${data.city}`,
      description: data.metaDescription,
      url: pageUrl,
      serviceType: [
        'Projeto de Terraplenagem',
        'Projeto de Drenagem Pluvial',
        'Projeto de Pavimentação',
        'Projeto Urbanístico',
      ],
      provider: {
        '@type': 'ProfessionalService',
        name: 'PER5 Projetos e Consultoria',
        telephone: '+55-19-99150-8664',
        email: 'guilherme@per5.com.br',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Campinas',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        hasCredential: 'CREA-SP',
      },
      areaServed: {
        '@type': 'City',
        name: data.city,
        containedInPlace: { '@type': 'State', name: 'São Paulo' },
        geo: { '@type': 'GeoCoordinates', latitude: data.geo.lat, longitude: data.geo.lng },
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: pageUrl,
        servicePhone: '+55-19-99150-8664',
        serviceLocation: { '@type': 'Place', name: `${data.city}/${data.uf}` },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PER5', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Cidades atendidas', item: `${SITE_URL}/engenharia-civil/cidades` },
        { '@type': 'ListItem', position: 3, name: data.city, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  useSEO({
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    canonicalPath: data.path,
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
                <ol className="flex flex-wrap items-center gap-2 text-xs" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  <li>
                    <Link to="/" className="transition-colors hover:opacity-100" style={{ opacity: 0.8 }}>PER5</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link to="/engenharia-civil/cidades" className="transition-colors hover:opacity-100" style={{ opacity: 0.8 }}>
                      Cidades atendidas
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li style={{ color: 'var(--amber-l)' }}>{data.city}</li>
                </ol>
              </nav>

              <div className="max-w-3xl anim-fade-up delay-1">
                <span className="eyebrow-light">{data.eyebrow}</span>
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
                  {data.h1}
                </h1>
                {data.heroParagraphs.map((p, i) => (
                  <p key={i} className="mb-4 max-w-2xl leading-relaxed text-base" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {p}
                  </p>
                ))}

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

          {/* Como trabalhamos à distância */}
          <section ref={remoteRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mb-10 anim-fade-up">
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm"
                    style={{ background: 'var(--amber-pale)' }}
                  >
                    <Wifi aria-hidden="true" className="h-5 w-5" style={{ color: 'var(--amber-d)' }} />
                  </div>
                  <h2
                    className="text-section mb-4"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    Como conduzimos um projeto em {data.city}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    A PER5 é sediada em Campinas e atende obras em todo o Brasil. O projeto sai com ART, válida em todo o território nacional, e o roteiro abaixo mostra como o trabalho anda do briefing ao protocolo.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
                  {data.remoteDelivery.steps.map((step, i) => (
                    <article key={step.title} className={`card-per5 flex h-full flex-col anim-fade-up delay-${i + 1}`}>
                      <div
                        className="mb-4 text-3xl font-bold leading-none"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'rgba(192,132,89,0.35)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3
                        className="text-lg mb-3"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        {step.desc}
                      </p>
                    </article>
                  ))}
                </div>

                <div
                  className="rounded-sm p-6 md:p-8 anim-fade-up delay-5"
                  style={{ background: 'var(--s-2)', border: '1px solid var(--bd)' }}
                >
                  <h3
                    className="text-lg mb-4"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                  >
                    O que é levantado em campo
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {data.remoteDelivery.needsLocalPresence.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="pl-4 text-sm leading-relaxed"
                    style={{ color: 'var(--t-b)', borderLeft: '3px solid var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    {data.remoteDelivery.howWeHandleThat}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparação */}
          <section ref={compRef} className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--s-dark)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="mb-8 anim-fade-up">
                  <span className="eyebrow-light">Comparação</span>
                  <h2
                    className="text-section mb-4"
                    style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    PER5 × escritório local em {data.city}
                  </h2>
                  <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    Nem todo projeto pede a mesma coisa. Onde o escritório local leva vantagem, a tabela diz isso. A escolha só é boa quando é feita com a informação certa.
                  </p>
                </div>
                <div className="anim-fade-up delay-1">
                  <DataTable table={data.comparison} dark />
                </div>
              </div>
            </div>
          </section>

          {/* Demandas locais */}
          <section ref={demandRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mb-10 anim-fade-up">
                  <span className="eyebrow">Demanda local</span>
                  <h2
                    className="text-section"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    Demandas de engenharia civil mais comuns em {data.city}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {data.demandProfile.map((item, i) => (
                    <article key={item.demand} className={`card-per5 anim-fade-up delay-${i + 1}`}>
                      <h3
                        className="text-lg mb-3"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                      >
                        {item.demand}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        {item.whyHere}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contexto local */}
          <section ref={contextRef} className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--s-2)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="max-w-3xl mb-10 anim-fade-up">
                  <span className="eyebrow">Contexto</span>
                  <h2
                    className="text-section"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    Contexto local: economia, relevo e aprovação em {data.city}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="anim-fade-left">
                    <h3
                      className="text-lg mb-3 flex items-center gap-2"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                    >
                      <Landmark aria-hidden="true" className="h-4 w-4" style={{ color: 'var(--amber)' }} />
                      O que move a obra na cidade
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {data.localContext.economy}
                    </p>
                    <h3
                      className="text-lg mb-3 flex items-center gap-2"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                    >
                      <MapPin aria-hidden="true" className="h-4 w-4" style={{ color: 'var(--amber)' }} />
                      Relevo, solo e bacia
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {data.localContext.terrain}
                    </p>
                  </div>

                  <div className="anim-fade-right space-y-5">
                    <div className="rounded-sm p-6" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
                      <h3
                        className="text-base mb-4 flex items-center gap-2"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                      >
                        <Route aria-hidden="true" className="h-4 w-4" style={{ color: 'var(--amber)' }} />
                        Eixos logísticos
                      </h3>
                      <ul className="space-y-2.5">
                        {data.localContext.corridors.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                            <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-sm p-6" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
                      <h3
                        className="text-base mb-4"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                      >
                        O que pesa na aprovação
                      </h3>
                      <ul className="space-y-2.5">
                        {data.localContext.regulatory.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                            <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section ref={faqRef} id="perguntas" className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--s-dark)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="mb-10 anim-fade-up">
                  <span className="eyebrow-light">Dúvidas frequentes</span>
                  <h2 className="text-section" style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>
                    Perguntas sobre engenharia civil em {data.city}
                  </h2>
                </div>
                <Accordion type="single" collapsible className="anim-fade-up delay-1">
                  {data.faq.map((item, i) => (
                    <AccordionItem key={item.q} value={`item-${i}`} style={{ borderColor: 'rgba(244,237,230,0.1)' }}>
                      <AccordionTrigger
                        className="text-left text-base hover:no-underline"
                        style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'none', fontWeight: 600 }}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
                  Tem um projeto em {data.city}?
                </h2>
                <p className="mb-8 max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  Conte o que você precisa e receba um retorno técnico direto do engenheiro responsável, sem intermediários.
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
                  {nearby.map((c) => (
                    <span key={c.slug}>
                      <Link to={c.path} className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                        {c.city}
                      </Link>
                      {' · '}
                    </span>
                  ))}
                  <Link to="/engenharia-civil/cidades" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Todas as cidades
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/sao-paulo" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Estado de São Paulo
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/sala-tecnica" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Sala Técnica
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/glossario" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Glossário técnico
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

export default CityLandingPage;
