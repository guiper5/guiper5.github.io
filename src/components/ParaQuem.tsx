import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const ParaQuem = () => {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const tx = t.paraquem;
  const seg = tx.segments[active];

  return (
    <section id="audiencia" className="py-24" style={{ backgroundColor: 'var(--s-1)' }}>
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <span className="eyebrow">{tx.eyebrow}</span>
          <h2 className="text-section" style={{ color: 'var(--t-h)' }}>{tx.title}</h2>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-0 mb-10 max-w-3xl mx-auto rounded-sm overflow-hidden"
          style={{ border: '1px solid var(--bd)' }}
        >
          {tx.segments.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex-1 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-200"
              style={{
                fontFamily: 'Instrument Sans, sans-serif',
                background: active === i ? 'var(--amber)' : 'var(--s-card)',
                color: active === i ? 'var(--terra)' : 'var(--t-m)',
                borderRight: i < tx.segments.length - 1 ? '1px solid var(--bd)' : 'none',
              }}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 max-w-4xl mx-auto"
          key={`${active}-${t === t}`}
          style={{ animation: 'fadeIn 0.35s ease' }}
        >
          {/* Copy */}
          <div className="rounded-sm p-8 md:p-10" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
            <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.segLabel} {String(active + 1).padStart(2, '0')}
            </div>
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}>
              {seg.title}
            </h3>
            <p
              className="italic text-base mb-5 pl-4"
              style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--amber-d)', borderLeft: '3px solid var(--amber)' }}
            >
              "{seg.pitch}"
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {seg.body}
            </p>
            <button onClick={() => go('orcamento')} className="btn-amber group">
              {seg.cta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual — big number */}
          <div
            className="hidden lg:flex flex-col items-center justify-center rounded-sm p-8 text-center"
            style={{ background: 'var(--s-dark)' }}
          >
            <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.segLabel}
            </div>
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '96px',
                fontWeight: 700,
                color: 'var(--amber)',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              {String(active + 1).padStart(2, '0')}
            </div>
            <div className="text-xs font-medium tracking-widest uppercase mt-4" style={{ color: 'rgba(244,237,230,0.4)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {seg.tab}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ParaQuem;
