import { useCounters } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsBar = () => {
  const { t } = useLanguage();
  useCounters();

  return (
    <div style={{ backgroundColor: 'var(--amber)' }}>
      <div className="container mx-auto px-4">
        <div
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
          style={{ borderColor: 'rgba(26,19,16,0.15)' }}
        >
          {t.stats.items.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-5 px-4 text-center">
              <div
                className="font-display text-4xl font-bold leading-none mb-1"
                style={{ color: 'var(--terra)', fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                <span data-counter={s.value} data-suffix={s.suffix}>
                  {s.value}{s.suffix}
                </span>
              </div>
              <div className="label" style={{ color: 'rgba(26,19,16,0.70)', fontSize: '10px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
