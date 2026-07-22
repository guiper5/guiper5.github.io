import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '@/assets/logo.png';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSectionNav } from '@/hooks/useSectionNav';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const { t, toggle: toggleLang } = useLanguage();
  const sectionNav = useSectionNav();
  const whatsappHref = 'https://wa.me/5519991508664';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    sectionNav(id);
    setMobile(false);
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(26,19,16,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        height: scrolled ? 'calc(60px + env(safe-area-inset-top))' : 'calc(72px + env(safe-area-inset-top))',
        paddingTop: 'env(safe-area-inset-top)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go('home')} aria-label="Voltar ao topo" className="flex min-h-11 min-w-11 items-center gap-3 focus-ring">
          <img src={Logo} alt="PER5" className="h-8 w-auto" />
          {scrolled && (
            <span
              className="hidden sm:block text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--fumo)' }}
            >
              Projetos e Consultoria
            </span>
          )}
        </button>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
          {t.header.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="flex min-h-11 items-center text-xs font-medium tracking-widest uppercase transition-colors duration-200 focus-ring"
              style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fumo)')}
            >
              {item.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="flex h-11 w-11 items-center justify-center transition-colors focus-ring"
            style={{ color: 'var(--fumo)', minWidth: '44px' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fumo)')}
          >
            {theme === 'dark' ? <Sun aria-hidden="true" className="h-3.5 w-3.5" /> : <Moon aria-hidden="true" className="h-3.5 w-3.5" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Alternar idioma"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-sm px-3 text-xs font-medium tracking-widest uppercase transition-all duration-200 focus-ring"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              color: 'var(--amber)',
              border: '1px solid rgba(192,132,89,0.35)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(192,132,89,0.12)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--amber-l)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--amber)';
            }}
          >
            {t.header.langBtn}
          </button>

          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber focus-ring">
            {t.header.cta}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Alternar idioma"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-sm px-3 text-xs font-medium tracking-widest uppercase focus-ring"
            style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--amber)', border: '1px solid rgba(192,132,89,0.35)' }}
          >
            {t.header.langBtn}
          </button>
          <button onClick={toggleTheme} aria-label="Alternar tema" className="flex h-11 w-11 items-center justify-center focus-ring" style={{ color: 'var(--fumo)', minWidth: '44px' }}>
            {theme === 'dark' ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
          </button>
          <button onClick={() => setMobile(!mobileOpen)} aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileOpen} className="flex h-11 w-11 items-center justify-center focus-ring" style={{ color: 'var(--areia)' }}>
            {mobileOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-4 space-y-1 border-t"
          style={{ backgroundColor: 'var(--s-dark)', borderColor: 'rgba(244,237,230,0.08)' }}
        >
          {t.header.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="block min-h-11 w-full py-3 text-left text-xs font-medium tracking-widest uppercase transition-colors focus-ring"
              style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber w-full justify-center focus-ring">
              {t.header.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
