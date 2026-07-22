import { ArrowRight, Layers, ShieldAlert, FileSearch, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useSectionNav } from '@/hooks/useSectionNav';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { regionalSeoData, type RegionalSeoData, type RegionalTopic } from '@/data/regionalSeo';

const whatsappHref = 'https://wa.me/5519991508664';
const SITE_URL = 'https://per5.com.br';

interface TopicSectionProps {
  icon: typeof Layers;
  topic: RegionalTopic;
  dark: boolean;
  reverse?: boolean;
}

const TopicSection = ({ icon: Icon, topic, dark, reverse }: TopicSectionProps) => {
  const ref = useScrollReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section
      ref={ref}
      className="py-20 overflow-hidden"
      style={{ backgroundColor: dark ? 'var(--s-dark)' : 'var(--s-page)' }}
    >
      <div className="container mx-auto px-4">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl mx-auto"
        >
          <div className={reverse ? 'lg:order-2 anim-fade-right' : 'anim-fade-left'}>
            <div
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm"
              style={{ background: dark ? 'rgba(192,132,89,0.14)' : 'var(--amber-pale)' }}
            >
              <Icon aria-hidden="true" className="h-5 w-5" style={{ color: dark ? 'var(--amber-l)' : 'var(--amber-d)' }} />
            </div>
            <h2
              className="text-section mb-5"
              style={{ color: dark ? 'var(--areia)' : 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
            >
              {topic.title}
            </h2>
            {topic.paragraphs.map((p, i) => (
              <p
                key={i}
                className="leading-relaxed mb-4 text-base"
                style={{ color: dark ? 'var(--fumo)' : 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {p}
              </p>
            ))}
          </div>

          <div className={reverse ? 'lg:order-1 anim-fade-left' : 'anim-fade-right'}>
            <div
              className="rounded-sm p-6 md:p-7"
              style={{
                background: dark ? 'var(--s-dark-card)' : 'var(--s-card)',
                border: `1px solid ${dark ? 'rgba(244,237,230,0.1)' : 'var(--bd)'}`,
              }}
            >
              <ul className="space-y-3.5">
                {topic.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: dark ? 'var(--fumo)' : 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface RegionalLandingPageProps {
  data: RegionalSeoData;
}

const RegionalLandingPage = ({ data }: RegionalLandingPageProps) => {
  const sectionNav = useSectionNav();
  const heroRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const coverageRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const faqRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  const otherRegions = regionalSeoData.filter((r) => r.slug !== data.slug);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'PER5 Projetos e Consultoria',
      description: data.metaDescription,
      url: `${SITE_URL}${data.path}`,
      telephone: '+55-19-99150-8664',
      email: 'guilherme@per5.com.br',
      address: { '@type': 'PostalAddress', addressLocality: 'Campinas', addressRegion: 'SP', addressCountry: 'BR' },
      areaServed: { '@type': data.areaServed.type, name: data.areaServed.name },
      hasCredential: 'CREA-SP',
      serviceType: ['Engenharia Civil', 'Patologia das Obras', 'Consultoria Técnica de Engenharia'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PER5', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: data.navLabel, item: `${SITE_URL}${data.path}` },
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
            id="hero-regional"
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
                  <li style={{ color: 'var(--amber-l)' }}>{data.navLabel}</li>
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

          {/* Coverage */}
          <section ref={coverageRef} className="py-16" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-8 anim-fade-up">
                <div className="mb-4 flex items-center gap-3">
                  <MapPin aria-hidden="true" className="h-5 w-5" style={{ color: 'var(--amber-d)' }} />
                  <span className="eyebrow mb-0">{data.coverageTitle}</span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {data.coverageNote}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 anim-fade-up delay-1">
                {data.coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-sm px-3 py-1.5 text-xs"
                    style={{ color: 'var(--amber-d)', background: 'rgba(192,132,89,0.12)', fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <TopicSection icon={Layers} topic={data.engenharia} dark={false} />
          <TopicSection icon={ShieldAlert} topic={data.patologia} dark reverse />
          <TopicSection icon={FileSearch} topic={data.consultoria} dark={false} />

          {/* FAQ */}
          <section ref={faqRef} id="perguntas" className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--s-dark)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="mb-10 anim-fade-up">
                  <span className="eyebrow-light">Dúvidas frequentes</span>
                  <h2 className="text-section" style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>
                    Perguntas sobre {data.navLabel.toLowerCase()}
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
                  Pronto para começar seu projeto?
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

              {otherRegions.length > 0 && (
                <div className="max-w-4xl mx-auto mt-8 text-center">
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif', letterSpacing: '0.12em' }}>
                    A PER5 também atende{' '}
                    {otherRegions.map((r, i) => (
                      <span key={r.slug}>
                        <Link to={r.path} className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                          {r.navLabel}
                        </Link>
                        {i < otherRegions.length - 1 ? ' e ' : ''}
                      </span>
                    ))}
                    .
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default RegionalLandingPage;
