import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const el = ref.current;
    if (!el) return;

    el.querySelectorAll<HTMLElement>(
      '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale, .reveal'
    ).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useCounters(refreshKey?: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-counter]');
    const frameIds = new Set<number>();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    els.forEach((el) => {
      el.textContent = `0${el.dataset.suffix || ''}`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.counter || '0', 10);
          const suffix = el.dataset.suffix || '';

          if (reducedMotion) {
            el.textContent = `${target}${suffix}`;
            observer.unobserve(el);
            return;
          }

          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${Math.round(eased * target)}${suffix}`;
            if (progress < 1) {
              const frameId = requestAnimationFrame(tick);
              frameIds.add(frameId);
            }
          };
          const frameId = requestAnimationFrame(tick);
          frameIds.add(frameId);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      frameIds.forEach((frameId) => cancelAnimationFrame(frameId));
    };
  }, [refreshKey]);
}
