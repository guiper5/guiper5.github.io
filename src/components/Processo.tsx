import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Processo = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const tx = t.processo;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) lineRef.current?.classList.add('active'); },
      { threshold: 0.3 }
    );
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--s-page)' }}>
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <span className="eyebrow">{tx.eyebrow}</span>
          <h2 className="text-section" style={{ color: 'var(--t-h)' }}>{tx.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress line */}
          <div className="relative h-px mb-12 hidden md:block" style={{ background: 'var(--bd)' }}>
            <div ref={lineRef} id="processLine" className="absolute left-0 top-0 h-full" style={{ background: 'var(--amber)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {tx.steps.map((s, i) => (
              <div key={s.num} className={`anim-fade-up delay-${i + 1}`}>
                <div
                  className="text-5xl font-bold mb-3 leading-none"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', color: i === 2 ? 'var(--amber)' : 'var(--bd)', textTransform: 'uppercase' }}
                >
                  {s.num}
                </div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule banner */}
        <div
          className="mt-14 max-w-4xl mx-auto rounded-sm px-8 py-5 flex items-center gap-4"
          style={{ background: 'var(--s-2)', border: '1px solid var(--bd)' }}
        >
          <span style={{ color: 'var(--amber)', fontSize: '20px', flexShrink: 0 }}>◈</span>
          <p
            className="text-sm"
            style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--t-b)' }}
            dangerouslySetInnerHTML={{ __html: tx.banner }}
          />
        </div>
      </div>
    </section>
  );
};

export default Processo;
