import { ArrowRight, ClipboardCheck, Compass, Layers, MessageCircle, ShieldCheck, XCircle } from 'lucide-react';
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
import DataTable from '@/components/seo/DataTable';
import { salaTecnicaData } from '@/data/salaTecnica';

const SITE_URL = 'https://per5.com.br';
const whatsappHref = `https://wa.me/5519991508664?text=${encodeURIComponent(
  'Olá! Quero falar sobre a Sala Técnica da PER5.'
)}`;

const roleIcons = [Compass, ClipboardCheck, Layers];

const SalaTecnicaPage = () => {
  const sectionNav = useSectionNav();
  const heroRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const defRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const rolesRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const compRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const stepsRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const modelsRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const wlRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const notRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const segRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const faqRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  const d = salaTecnicaData;
  const pageUrl = `${SITE_URL}${d.path}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Sala Técnica PER5',
      serviceType: 'Backoffice de engenharia civil sob demanda',
      description: d.metaDescription,
      url: pageUrl,
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
      areaServed: { '@type': 'Country', name: 'Brasil' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Formatos de contratação da Sala Técnica',
        itemListElement: d.models.rows.map((row) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: row[0], description: row[1] },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PER5', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: d.navLabel, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: d.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  useSEO({
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    canonicalPath: d.path,
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
                  <li style={{ color: 'var(--amber-l)' }}>{d.navLabel}</li>
                </ol>
              </nav>

              <div className="max-w-3xl anim-fade-up delay-1">
                <span className="eyebrow-light">{d.eyebrow}</span>
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
                  {d.h1}
                </h1>
                {d.heroParagraphs.map((p, i) => (
                  <p key={i} className="mb-4 max-w-2xl leading-relaxed text-base" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {p}
                  </p>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber group focus-ring">
                    Falar sobre a Sala Técnica
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

          {/* Definição */}
          <section ref={defRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
                <div className="anim-fade-left">
                  <h2
                    className="text-section mb-5"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    {d.definition.title}
                  </h2>
                  {d.definition.paragraphs.map((p, i) => (
                    <p key={i} className="mb-4 text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {p}
                    </p>
                  ))}
                </div>
                <div className="anim-fade-right">
                  <div className="rounded-sm p-6 md:p-7" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
                    <ul className="space-y-3.5">
                      {d.definition.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
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

          {/* Três papéis */}
          <section ref={rolesRef} className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--s-dark)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10 anim-fade-up">
                <h2
                  className="text-section mb-4"
                  style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                >
                  {d.rolesTitle}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {d.rolesIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl">
                {d.roles.map((role, i) => {
                  const Icon = roleIcons[i % roleIcons.length];
                  return (
                    <article
                      key={role.title}
                      className={`flex h-full flex-col rounded-sm p-6 md:p-7 anim-fade-up delay-${i + 1}`}
                      style={{ background: 'var(--s-dark-card)', border: '1px solid rgba(244,237,230,0.1)' }}
                    >
                      <div
                        className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm"
                        style={{ background: 'rgba(192,132,89,0.14)' }}
                      >
                        <Icon aria-hidden="true" className="h-5 w-5" style={{ color: 'var(--amber-l)' }} />
                      </div>
                      <h3
                        className="text-xl mb-3"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--areia)', textTransform: 'uppercase' }}
                      >
                        {role.title}
                      </h3>
                      <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        {role.summary}
                      </p>
                      <ul className="space-y-2.5 mb-5">
                        {role.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                            <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <p
                        className="mt-auto pl-3 text-sm italic"
                        style={{ color: 'var(--amber-l)', borderLeft: '3px solid var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}
                      >
                        {role.trigger}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Comparação */}
          <section ref={compRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="mb-8 anim-fade-up">
                  <span className="eyebrow">Quando faz sentido</span>
                  <h2
                    className="text-section mb-4"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    Equipe interna, freelancer ou Sala Técnica
                  </h2>
                  <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    Não existe resposta única: o que decide é a frequência da demanda e o nível de responsabilidade técnica exigido. A tabela abaixo compara os três caminhos nos critérios que costumam pesar na escolha.
                  </p>
                </div>
                <div className="anim-fade-up delay-1">
                  <DataTable table={d.comparison} dark={false} />
                </div>
              </div>
            </div>
          </section>

          {/* Como funciona */}
          <section ref={stepsRef} className="py-20" style={{ backgroundColor: 'var(--s-2)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10 anim-fade-up">
                <h2
                  className="text-section mb-4"
                  style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                >
                  {d.howItWorksTitle}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {d.howItWorksIntro}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                {d.steps.map((s, i) => (
                  <article key={s.num} className={`card-per5 flex h-full flex-col anim-fade-up delay-${i + 1}`}>
                    <div
                      className="mb-4 text-4xl font-bold leading-none"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'rgba(192,132,89,0.35)' }}
                    >
                      {s.num}
                    </div>
                    <h3
                      className="text-lg mb-3"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {s.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Modelos de contratação */}
          <section ref={modelsRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="mb-8 anim-fade-up">
                  <span className="eyebrow">Contratação</span>
                  <h2
                    className="text-section mb-4"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    Modelos de contratação da Sala Técnica
                  </h2>
                  <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    São três formatos, escolhidos pela previsibilidade da sua demanda. O orçamento é montado por escopo, então não publicamos valores: cada projeto tem terreno, disciplina e prazo diferentes.
                  </p>
                </div>
                <div className="anim-fade-up delay-1">
                  <DataTable table={d.models} dark={false} />
                </div>
              </div>
            </div>
          </section>

          {/* White label */}
          <section ref={wlRef} className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--s-dark)' }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
                <div className="anim-fade-left">
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm"
                    style={{ background: 'rgba(192,132,89,0.14)' }}
                  >
                    <ShieldCheck aria-hidden="true" className="h-5 w-5" style={{ color: 'var(--amber-l)' }} />
                  </div>
                  <h2
                    className="text-section mb-5"
                    style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    {d.whiteLabel.title}
                  </h2>
                  {d.whiteLabel.paragraphs.map((p, i) => (
                    <p key={i} className="mb-4 text-base leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {p}
                    </p>
                  ))}
                </div>
                <div className="anim-fade-right">
                  <div className="rounded-sm p-6 md:p-7" style={{ background: 'var(--s-dark-card)', border: '1px solid rgba(244,237,230,0.1)' }}>
                    <ul className="space-y-3.5">
                      {d.whiteLabel.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
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

          {/* O que não faz */}
          <section ref={notRef} className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 anim-fade-up">
                  <h2
                    className="text-section mb-4"
                    style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                  >
                    {d.notDoingTitle}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {d.notDoingIntro}
                  </p>
                </div>
                <ul className="space-y-3 anim-fade-up delay-1">
                  {d.notDoing.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-sm p-4 text-sm leading-relaxed"
                      style={{ background: 'var(--s-card)', border: '1px solid var(--bd)', color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      <XCircle aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--amber-d)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Para quem */}
          <section ref={segRef} className="py-20" style={{ backgroundColor: 'var(--s-2)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10 anim-fade-up">
                <h2
                  className="text-section"
                  style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                >
                  {d.segmentsTitle}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
                {d.segments.map((seg, i) => (
                  <Link
                    key={seg.to}
                    to={seg.to}
                    className={`card-per5 block anim-fade-up delay-${i + 1} focus-ring`}
                  >
                    <h3
                      className="text-lg mb-2 flex items-center gap-2"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                    >
                      {seg.title}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {seg.desc}
                    </p>
                  </Link>
                ))}
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
                    Perguntas sobre a Sala Técnica
                  </h2>
                </div>
                <Accordion type="single" collapsible className="anim-fade-up delay-1">
                  {d.faq.map((item, i) => (
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
                  Precisa de engenharia sem montar equipe?
                </h2>
                <p className="mb-8 max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  Conte o estágio do seu projeto e em qual dos três papéis a PER5 entraria. O retorno vem direto do engenheiro responsável, sem intermediários.
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
                <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif', letterSpacing: '0.12em' }}>
                  Veja também:{' '}
                  <Link to="/engenharia-civil/servicos/terraplenagem" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Terraplenagem
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/servicos/drenagem-pluvial" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Drenagem pluvial
                  </Link>
                  {' · '}
                  <Link to="/engenharia-civil/cidades" className="underline-offset-2 hover:underline" style={{ color: 'var(--amber-d)' }}>
                    Cidades atendidas
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

export default SalaTecnicaPage;
