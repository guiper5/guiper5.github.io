import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const [active, setActive] = useState('todos');
  const { t } = useLanguage();
  const tx = t.portfolio;

  const visible = tx.projects.filter(
    (p) => active === 'todos' || p.category.includes(active)
  );

  return (
    <section id="portfolio" className="py-24" style={{ backgroundColor: 'var(--s-dark)' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow-light">{tx.eyebrow}</span>
            <h2
              className="text-section"
              style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
            >
              {tx.title}
            </h2>
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-medium"
            style={{ border: '1px solid rgba(192,132,89,0.3)', color: 'var(--amber-l)', fontFamily: 'Instrument Sans, sans-serif', letterSpacing: '0.08em' }}
          >
            {tx.badge}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tx.filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-sm transition-all duration-200"
              style={{
                fontFamily: 'Instrument Sans, sans-serif',
                background: active === f.value ? 'var(--amber)' : 'rgba(244,237,230,0.06)',
                color:      active === f.value ? 'var(--terra)' : 'var(--fumo)',
                border:     active === f.value ? 'none' : '1px solid rgba(244,237,230,0.12)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => (
            <div
              key={p.name}
              className={`rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 ${p.large ? 'sm:col-span-2' : ''}`}
              style={{ background: 'var(--s-dark-card)', border: '1px solid rgba(244,237,230,0.06)' }}
            >
              {/* Image placeholder */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  aspectRatio: p.large ? '16/9' : '4/3',
                  background: 'rgba(244,237,230,0.03)',
                  borderBottom: '1px solid rgba(244,237,230,0.06)',
                }}
              >
                <div className="text-center">
                  <div style={{ color: 'var(--fumo)', fontSize: '28px', marginBottom: '8px' }}>◉</div>
                  <div className="text-xs" style={{ color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.photoPlaceholder}
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(192,132,89,0.08)' }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="label mb-2" style={{ color: 'var(--amber)', fontSize: '10px' }}>
                  {p.tag}
                </div>
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--areia)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {p.name}
                </div>
                <div className="text-xs" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {p.area !== '—' && `${tx.area}: ${p.area} · `}{tx.delivered}: {p.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
