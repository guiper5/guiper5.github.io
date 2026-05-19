import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Processo = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const ref = useScrollReveal() as React.RefObject<HTMLElement>;
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
    <section ref={ref} className="py-24" style={{ backgroundColor: 'var(--s-page)' }}>
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <span className="eyebrow">{tx.eyebrow}</span>
          <h2 className="text-section" style={{ color: 'var(--t-h)' }}>{tx.title}</h2>
          <p
            className="mt-4 mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}
          >
            {tx.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress line */}
          <div className="relative h-px mb-12 hidden md:block" style={{ background: 'var(--bd)' }}>
            <div ref={lineRef} id="processLine" className="absolute left-0 top-0 h-full" style={{ background: 'var(--amber)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
            {tx.steps.map((s, i) => (
              <article key={s.num} className={`card-per5 flex h-full flex-col anim-fade-up delay-${i + 1}`}>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div
                    className="text-5xl font-bold leading-none"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', color: i === 3 ? 'var(--amber)' : 'rgba(192,132,89,0.28)', textTransform: 'uppercase' }}
                  >
                    {s.num}
                  </div>
                  <span className="h-2 w-2 rounded-full" style={{ background: 'var(--amber)' }} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                >
                  {s.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {s.desc}
                </p>
                <ul className="mt-auto space-y-2">
                  {s.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Schedule banner */}
        <div
          className="mt-14 max-w-4xl mx-auto rounded-sm px-8 py-5 flex items-center gap-4"
          style={{ background: 'var(--s-2)', border: '1px solid var(--bd)' }}
        >
          <span aria-hidden="true" style={{ color: 'var(--amber)', fontSize: '20px', flexShrink: 0 }}>◈</span>
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
