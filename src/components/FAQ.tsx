import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-sm overflow-hidden transition-all duration-200" style={{ border: '1px solid var(--bd)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200"
        style={{
          background: 'var(--s-card)',
          borderBottom: open ? '1px solid var(--bd)' : 'none',
        }}
      >
        <span className="text-sm font-medium pr-4" style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--t-h)' }}>
          {q}
        </span>
        <span className="flex-shrink-0" style={{ color: 'var(--amber)' }}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div
          className="px-6 pb-5 pt-4 text-sm leading-relaxed"
          style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif', background: 'var(--s-card)' }}
        >
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const { t } = useLanguage();
  const tx = t.faq;

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--s-2)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="eyebrow">{tx.eyebrow}</span>
            <h2 className="text-section" style={{ color: 'var(--t-h)' }}>{tx.title}</h2>
          </div>
          <div className="space-y-3">
            {tx.items.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
