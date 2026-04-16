import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '@/assets/logo.png';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const { t, toggle: toggleLang, lang } = useLanguage();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobile(false);
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(26,19,16,0.97)' : 'var(--s-dark)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        height: scrolled ? '60px' : '72px',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center gap-3 focus:outline-none">
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
        <nav className="hidden md:flex items-center gap-7">
          {t.header.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
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
            aria-label="Toggle theme"
            className="w-7 h-7 flex items-center justify-center transition-colors"
            style={{ color: 'var(--fumo)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fumo)')}
          >
            {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs font-medium tracking-widest uppercase px-2 py-1 rounded-sm transition-all duration-200"
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

          <button onClick={() => go('orcamento')} className="btn-amber">
            {t.header.cta}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-medium tracking-widest uppercase px-2 py-1 rounded-sm"
            style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--amber)', border: '1px solid rgba(192,132,89,0.35)' }}
          >
            {t.header.langBtn}
          </button>
          <button onClick={toggleTheme} style={{ color: 'var(--fumo)' }}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setMobile(!mobileOpen)} style={{ color: 'var(--areia)' }}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              className="block w-full text-left py-3 text-xs font-medium tracking-widest uppercase transition-colors"
              style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <button onClick={() => go('orcamento')} className="btn-amber w-full justify-center">
              {t.header.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
