import { ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useSectionNav } from '@/hooks/useSectionNav';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { glossaryTerms } from '@/data/glossario';

const whatsappHref = 'https://wa.me/5519991508664';
const SITE_URL = 'https://per5.com.br';
const PATH = '/engenharia-civil/glossario';

const Glossario = () => {
  const sectionNav = useSectionNav();
  const heroRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const listRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'Glossário técnico de engenharia civil PER5',
      description: 'Definições de termos técnicos usados em projetos de terraplenagem, drenagem, pavimentação, urbanismo e patologia das obras.',
      url: `${SITE_URL}${PATH}`,
      hasDefinedTerm: glossaryTerms.map((t) => ({
        '@type': 'DefinedTerm',
        name: t.term,
        description: t.definition,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PER5', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Glossário técnico', item: `${SITE_URL}${PATH}` },
      ],
    },
  ];

  useSEO({
    title: 'Glossário Técnico de Engenharia Civil | PER5',
    description: 'Glossário com definições claras de termos de engenharia civil: ART, corte e aterro, drenagem pluvial, EIV, RIT, patologia das obras, pavimento rígido e flexível, entre outros.',
    keywords: 'glossário de engenharia civil, o que é ART, o que é EIV, o que é RIT, o que é patologia das obras, o que é recalque de fundação, dicionário de termos de engenharia',
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
            className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden"
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
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] z-10" style={{ background: 'var(--amber)' }} />

            <div className="relative z-10 container mx-auto px-4">
              <nav aria-label="Breadcrumb" className="mb-6 anim-fade-up">
                <ol className="flex items-center gap-2 text-xs" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  <li>
                    <Link to="/" className="transition-colors hover:opacity-100" style={{ opacity: 0.8 }}>PER5</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li style={{ color: 'var(--amber-l)' }}>Glossário técnico</li>
                </ol>
              </nav>

              <div className="max-w-3xl anim-fade-up delay-1">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm" style={{ background: 'rgba(192,132,89,0.14)' }}>
                  <BookOpen aria-hidden="true" className="h-5 w-5" style={{ color: 'var(--amber-l)' }} />
                </div>
                <span className="eyebrow-light">Referência técnica</span>
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
                  Glossário Técnico de Engenharia Civil
                </h1>
                <p className="mb-4 max-w-2xl leading-relaxed text-base" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  Termos que aparecem com frequência em projetos de terraplenagem, drenagem, pavimentação, urbanismo e patologia das obras, explicados em linguagem direta. Serve tanto para quem está lendo um relatório técnico quanto para quem só quer entender melhor o próprio projeto.
                </p>
              </div>
            </div>
          </section>

          {/* Term list */}
          <section ref={listRef} className="py-16" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto anim-fade-up">
                {glossaryTerms.map((item) => (
                  <div
                    key={item.term}
                    className="rounded-sm p-6"
                    style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}
                  >
                    <dt
                      className="mb-2 text-lg"
                      style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                    >
                      {item.term}
                    </dt>
                    <dd className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </dl>
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
                  Tem um termo técnico que faltou aqui?
                </h2>
                <p className="mb-8 max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  Fale com o engenheiro responsável e tire a dúvida direto, sem intermediário.
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
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Glossario;
