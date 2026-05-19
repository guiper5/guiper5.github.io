import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Droplets,
  FileSearch,
  Layers,
  Map,
  Route,
  ShieldAlert,
  Truck,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
const whatsappHref = 'https://wa.me/5519991508664';

const priorityIcons = [Layers, Droplets, Building2, Route];
const complementaryIcons = [Map, FileSearch, ClipboardCheck, ShieldAlert];
const extraIcons = [Layers, Truck];

const Services = () => {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>;
  const { t } = useLanguage();
  const tx = t.services;

  return (
    <section
      id="servicos"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--s-page)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14 anim-fade-up">
          <span className="eyebrow">{tx.eyebrow}</span>
          <h2 className="text-section mb-4" style={{ color: 'var(--t-h)' }}>
            {tx.title}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
            {tx.subtitle}
          </p>
        </div>

        <div className="mb-6 flex items-center gap-3 anim-fade-up delay-1">
          <span className="h-px w-8" style={{ background: 'var(--amber)' }} />
          <span className="label" style={{ color: 'var(--amber)' }}>
            {tx.priorityLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {tx.priority.map((service, i) => {
            const Icon = priorityIcons[i];

            return (
              <article key={service.title} className={`card-per5 service-card flex h-full flex-col anim-fade-up delay-${i + 2}`}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-sm" style={{ background: 'var(--amber-pale)' }}>
                      <Icon aria-hidden="true" className="h-5 w-5" style={{ color: 'var(--amber-d)' }} />
                    </div>
                    <div>
                      <span
                        className="label inline-block"
                        style={{ color: 'var(--amber-d)', background: 'var(--amber-pale)', padding: '3px 9px', borderRadius: '2px' }}
                      >
                        {service.badge}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-display text-4xl font-bold leading-none"
                    style={{ color: 'rgba(192,132,89,0.22)', fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl" style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {service.desc}
                </p>

                <div className="mb-5">
                  <div className="label mb-3" style={{ color: 'var(--t-m)' }}>
                    {tx.deliverablesLabel}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="label mb-3" style={{ color: 'var(--t-m)' }}>
                    {tx.applicationsLabel}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm px-3 py-1 text-xs"
                        style={{ color: 'var(--amber-d)', background: 'rgba(192,132,89,0.12)', fontFamily: 'Instrument Sans, sans-serif' }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => go('orcamento')}
                    className="mt-5 inline-flex min-h-11 items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium group transition-colors focus-ring"
                    style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif', minHeight: '44px' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--amber-d)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--amber)')}
                  >
                    {tx.ctaCard}
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="mb-20 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5 rounded-sm p-5 anim-fade-up delay-6"
          style={{ background: 'var(--s-2)', border: '1px solid var(--bd)' }}
        >
          <div>
            <span className="eyebrow mb-0">{tx.infraExtrasTitle}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tx.infraExtras.map((extra, i) => {
              const Icon = extraIcons[i];

              return (
                <div key={extra.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm" style={{ background: 'var(--amber)' }}>
                    <Icon aria-hidden="true" className="h-4 w-4" style={{ color: 'var(--areia)' }} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg" style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {extra.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                      {extra.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="servicos-complementares" className="relative rounded-sm px-0 py-0">
          <div
            className="absolute -right-28 -top-20 hidden h-72 w-72 rounded-full lg:block"
            style={{ background: 'radial-gradient(circle, rgba(192,132,89,0.12) 0%, transparent 68%)' }}
          />

          <div className="relative mb-10 max-w-3xl anim-fade-up">
            <span className="eyebrow">{tx.complementaryLabel}</span>
            <h2 className="text-section mb-4" style={{ color: 'var(--t-h)' }}>
              {tx.complementaryTitle}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.complementarySubtitle}
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {tx.complementary.map((service, i) => {
              const Icon = complementaryIcons[i];

              return (
                <article key={service.title} className={`card-per5 flex h-full flex-col anim-fade-up delay-${i + 1}`}>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm" style={{ background: 'var(--amber-pale)' }}>
                      <Icon aria-hidden="true" className="h-4 w-4" style={{ color: 'var(--amber-d)' }} />
                    </div>
                    <span
                      className="label rounded-sm px-2 py-1"
                      style={{ color: 'var(--amber-d)', background: 'rgba(192,132,89,0.12)', fontSize: '10px' }}
                    >
                      {service.note}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl" style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {service.desc}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ background: 'var(--amber)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="relative mt-10 flex justify-start anim-fade-up delay-5">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber group focus-ring">
              {tx.ctaMain}
              <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
