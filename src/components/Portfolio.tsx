import type { CSSProperties } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const webpSrc = (src: string) => src.replace(/\.png$/i, '.webp');

const Portfolio = () => {
  const { t } = useLanguage();
  const tx = t.portfolio;
  const projects = tx.projects;

  return (
    <section id="portfolio" className="py-24" style={{ backgroundColor: 'var(--s-dark)' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <div>
            <span className="eyebrow-light">{tx.eyebrow}</span>
            <h2
              className="text-section"
              style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
            >
              {tx.title}
            </h2>
          </div>
        </div>

        <div
          className="mb-10 max-w-3xl rounded-sm px-6 py-5"
          style={{ background: 'rgba(244,237,230,0.05)', border: '1px solid rgba(192,132,89,0.22)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
            {tx.message}
          </p>
        </div>

        {/* Carousel */}
        <div className="portfolio-carousel overflow-hidden">
          <div
            className="portfolio-track flex w-max"
            style={{ '--portfolio-duration': `${Math.max(projects.length, 1) * 5}s` } as CSSProperties}
          >
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 gap-5 pr-5">
                {projects.map((p) => (
                  <article
                    key={`${group}-${p.name}`}
                    className="w-[82vw] max-w-[360px] flex-shrink-0 overflow-hidden rounded-sm transition-all duration-300 sm:w-[360px]"
                    style={{ background: 'var(--s-dark-card)', border: '1px solid rgba(244,237,230,0.06)' }}
                    aria-hidden={group === 1}
                  >
                    <div
                      className="relative flex aspect-square items-center justify-center overflow-hidden"
                      style={{
                        background: p.image ? 'var(--areia)' : 'rgba(244,237,230,0.03)',
                        borderBottom: '1px solid rgba(244,237,230,0.06)',
                      }}
                    >
                      {p.image ? (
                        <picture className="h-full w-full">
                          <source srcSet={webpSrc(p.image)} type="image/webp" />
                          <img
                            src={p.image}
                            alt={p.alt}
                            loading="lazy"
                            className="h-full w-full object-contain p-4"
                          />
                        </picture>
                      ) : (
                        <div className="text-center">
                          <div style={{ color: 'var(--amber)', fontSize: '28px', marginBottom: '8px' }}>◉</div>
                          <div className="text-xs" style={{ color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}>
                            {tx.photoPlaceholder}
                          </div>
                        </div>
                      )}
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300"
                        style={{ background: 'rgba(192,132,89,0.08)' }}
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 px-5 py-4"
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                      >
                        <div className="label mb-1" style={{ color: 'var(--amber-l)', fontSize: '10px' }}>
                          {p.tag}
                        </div>
                        <h3 className="text-lg leading-tight" style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>
                          {p.name}
                        </h3>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
