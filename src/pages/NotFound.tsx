import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const whatsappHref = 'https://wa.me/5519991508664';

const shortcuts = [
  { to: '/', label: 'Página inicial', desc: 'Serviços, portfólio e contato da PER5.' },
  { to: '/engenharia-civil/sala-tecnica', label: 'Sala Técnica', desc: 'O backoffice de engenharia civil da PER5.' },
  { to: '/engenharia-civil/cidades', label: 'Cidades atendidas', desc: 'Onde e como a PER5 atende.' },
  { to: '/engenharia-civil/glossario', label: 'Glossário técnico', desc: 'Termos de engenharia civil explicados.' },
];

const NotFound = () => {
  const location = useLocation();

  useSEO({
    title: 'Página não encontrada (404) | PER5',
    description: 'A página que você procura não existe ou foi movida. Veja os atalhos para as principais seções do site da PER5.',
    canonicalPath: location.pathname,
    robots: 'noindex, follow',
  });

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section
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
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] z-10" style={{ background: 'var(--amber)' }} />

            <div className="relative z-10 container mx-auto px-4">
              <div className="max-w-3xl">
                <span className="eyebrow-light">Erro 404</span>
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
                  Esta página não existe
                </h1>
                <p className="mb-4 max-w-2xl leading-relaxed text-base" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  O endereço acessado não corresponde a nenhuma página do site. Pode ser um link antigo, um erro de digitação ou uma página que mudou de lugar.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber group focus-ring">
                    <MessageCircle aria-hidden="true" className="h-4 w-4" />
                    Falar com um engenheiro
                  </a>
                  <Link to="/" className="btn-ghost group focus-ring">
                    Voltar para a home
                    <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2
                  className="text-section mb-8"
                  style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                >
                  Talvez você procure por
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {shortcuts.map((item) => (
                    <Link key={item.to} to={item.to} className="card-per5 block focus-ring">
                      <h3
                        className="text-lg mb-2 flex items-center gap-2"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                      >
                        {item.label}
                        <ArrowRight aria-hidden="true" className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        {item.desc}
                      </p>
                    </Link>
                  ))}
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

export default NotFound;
