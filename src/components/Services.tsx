import { ArrowRight, Layers, FileCheck, ShieldAlert, Cpu } from 'lucide-react';
import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const icons = [Layers, FileCheck, ShieldAlert, Cpu];

const Services = () => {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>;
  const { t } = useLanguage();
  const tx = t.services;

  return (
    <section
      id="servicos"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24"
      style={{ backgroundColor: 'var(--s-page)' }}
    >
      <div className="container mx-auto px-4">

        <div className="text-center mb-14 anim-fade-up">
          <span className="eyebrow">{tx.eyebrow}</span>
          <h2 className="text-section mb-4" style={{ color: 'var(--t-h)' }}>{tx.title}</h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
            {tx.subtitle}
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-4xl mx-auto mb-10 anim-fade-up delay-1">
          <div className="card-per5 card-featured-amber">
            <div className="flex flex-wrap items-start gap-4 mb-5">
              <div>
                <span
                  className="label mb-2 inline-block"
                  style={{ color: 'var(--amber-d)', background: 'var(--amber-pale)', padding: '3px 10px', borderRadius: '2px' }}
                >
                  {tx.mainBadge}
                </span>
                <h3 className="text-2xl mt-2" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}>
                  {tx.mainTitle}
                </h3>
              </div>
            </div>

            <p className="mb-7 leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.mainDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-8">
              {tx.mainItems.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: '#4A6741' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <button onClick={() => go('orcamento')} className="btn-amber group">
              {tx.ctaMain}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 2×2 secondary grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tx.secondary.map((svc, i) => {
            const Icon = icons[i];
            return (
              <div key={svc.title} className={`card-per5 flex flex-col anim-scale delay-${i + 2}`}>
                <div className="w-9 h-9 rounded-sm flex items-center justify-center mb-4" style={{ background: 'var(--amber-pale)' }}>
                  <Icon className="h-4 w-4" style={{ color: 'var(--amber-d)' }} />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {svc.desc}
                </p>
                <button
                  onClick={() => go('orcamento')}
                  className="inline-flex items-center gap-1 text-sm font-medium group transition-colors"
                  style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--amber-d)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--amber)')}
                >
                  {tx.ctaCard}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
