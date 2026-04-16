import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-blueprints.png';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const tx = t.hero;
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--s-dark)' }}
    >
      {/* Photo with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Civil infrastructure works — PER5"
          className="w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(192,132,89,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(192,132,89,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute right-0 top-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(192,132,89,0.12) 0%, transparent 70%)' }}
        />
      </div>

      {/* Amber accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] z-10" style={{ background: 'var(--amber)' }} />

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none"
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: 'clamp(100px, 22vw, 280px)',
          fontWeight: 700,
          color: 'rgba(192,132,89,0.04)',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
        }}
      >
        PER5
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center w-full">

          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--amber)' }} />
              <span className="label" style={{ color: 'var(--fumo)' }}>{tx.tag}</span>
            </div>

            <h1
              className="mb-6 overflow-hidden"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(44px, 5.5vw, 72px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                color: 'var(--areia)',
                lineHeight: 1.05,
              }}
            >
              {tx.h1.map((line, i) => (
                <span
                  key={i}
                  className="block"
                  style={{
                    animation: `slideUp 0.8s ${0.4 + i * 0.15}s both`,
                    color: i === 1 ? 'var(--amber)' : 'var(--areia)',
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p
              className="mb-10 max-w-xl leading-relaxed"
              style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '17px',
                color: 'var(--fumo)',
                animation: 'slideUp 0.8s 1s both',
              }}
            >
              {tx.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'slideUp 0.8s 1.1s both' }}>
              <button onClick={() => go('orcamento')} className="btn-amber group">
                {tx.cta1}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => go('servicos')} className="btn-ghost group">
                {tx.cta2}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right — badges */}
          <div className="hidden lg:flex flex-col gap-3" style={{ animation: 'slideUp 0.8s 1.2s both' }}>
            {tx.badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-sm"
                style={{
                  background: 'rgba(244,237,230,0.04)',
                  border: '1px solid rgba(192,132,89,0.18)',
                  minWidth: '280px',
                }}
              >
                <span style={{ color: 'var(--amber)', fontSize: '14px', fontWeight: 700 }}>✓</span>
                <span className="text-xs" style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--fumo)' }}>
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 animate-bounce" style={{ background: 'linear-gradient(to bottom, var(--amber), transparent)' }} />
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
