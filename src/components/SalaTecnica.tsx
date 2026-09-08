import { ArrowRight, ClipboardCheck, Compass, Layers, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const whatsappHref = `https://wa.me/5519991508664?text=${encodeURIComponent(
  'Olá! Quero falar sobre a Sala Técnica da PER5.'
)}`;

const roleIcons = [Compass, ClipboardCheck, Layers];

const SalaTecnica = () => {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>;
  const { t } = useLanguage();
  const tx = t.salatecnica;

  return (
    <section id="sala-tecnica" ref={ref} className="py-24" style={{ backgroundColor: 'var(--s-2)' }}>
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mb-12 anim-fade-up">
          <span className="eyebrow">{tx.eyebrow}</span>
          <h2 className="text-section mb-5" style={{ color: 'var(--t-h)' }}>{tx.title}</h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}
          >
            {tx.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl">
          {tx.roles.map((role, i) => {
            const Icon = roleIcons[i % roleIcons.length];
            return (
              <article key={role.title} className={`card-per5 flex h-full flex-col anim-fade-up delay-${i + 1}`}>
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm"
                  style={{ background: 'var(--amber-pale)' }}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" style={{ color: 'var(--amber-d)' }} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--t-h)', textTransform: 'uppercase' }}
                >
                  {role.title}
                </h3>
                <p
                  className="mb-5 text-sm leading-relaxed"
                  style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  {role.desc}
                </p>
                <p
                  className="mt-auto pl-3 text-sm italic"
                  style={{
                    color: 'var(--amber-d)',
                    borderLeft: '3px solid var(--amber)',
                    fontFamily: 'Instrument Sans, sans-serif',
                  }}
                >
                  {role.trigger}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 anim-fade-up delay-4">
          {tx.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-sm px-3 py-1.5 text-xs"
              style={{
                color: 'var(--amber-d)',
                background: 'rgba(192,132,89,0.12)',
                fontFamily: 'Instrument Sans, sans-serif',
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 anim-fade-up delay-5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber group focus-ring"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            {tx.ctaPrimary}
          </a>
          <Link to="/engenharia-civil/sala-tecnica" className="btn-outline-amber group focus-ring">
            {tx.ctaSecondary}
            <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p
          className="mt-8 text-sm"
          style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif' }}
        >
          {tx.note}
        </p>

      </div>
    </section>
  );
};

export default SalaTecnica;
