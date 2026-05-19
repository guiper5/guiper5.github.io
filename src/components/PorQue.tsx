import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const PorQue = () => {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>;
  const { t } = useLanguage();
  const tx = t.porque;

  return (
    <section
      id="por-que"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="overflow-hidden py-24"
      style={{ backgroundColor: 'var(--s-dark)' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">

          {/* Left — copy */}
          <div className="anim-fade-left">
            <span className="eyebrow-light">{tx.eyebrow}</span>
            <h2
              className="text-section mb-6"
              style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
            >
              {tx.title}
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--fumo)', fontSize: '16px', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.body1}
            </p>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--fumo)', fontSize: '16px', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.body2}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {tx.stats.map(({ val, label, amber }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-sm"
                  style={{
                    background: amber ? 'var(--amber)' : 'rgba(244,237,230,0.05)',
                    border: amber ? 'none' : '1px solid rgba(244,237,230,0.08)',
                  }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', color: amber ? 'var(--terra)' : 'var(--amber)', textTransform: 'uppercase' }}
                  >
                    {val}
                  </div>
                  <p className="text-xs leading-tight" style={{ color: amber ? 'rgba(26,19,16,0.7)' : 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — checklist */}
          <div>
            <h3
              className="text-lg mb-6 pb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--areia)', textTransform: 'uppercase', borderBottom: '1px solid rgba(244,237,230,0.1)' }}
            >
              {tx.diferenciaisTitle}
            </h3>
            <ul className="space-y-4">
              {tx.diferenciais.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 anim-fade-right delay-${i + 1}`}>
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 font-bold text-sm" style={{ color: 'var(--amber)' }}>✓</span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQue;
