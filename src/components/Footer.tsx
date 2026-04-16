import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const tx = t.footer;
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    { icon: MessageCircle, href: 'https://wa.me/5519991508664',            label: 'WhatsApp' },
    { icon: Instagram,     href: 'https://www.instagram.com/per5eng/',     label: 'Instagram' },
    { icon: Linkedin,      href: 'https://www.linkedin.com/company/per5/', label: 'LinkedIn' },
    { icon: Mail,          href: 'mailto:guilherme@per5.com.br',           label: 'Email' },
  ];

  const serviceIds = ['servicos','servicos','servicos','servicos','servicos','servicos'];
  const segmentIds = ['audiencia','audiencia','audiencia','audiencia'];

  return (
    <footer style={{ background: 'var(--s-footer)' }}>
      <div className="container mx-auto px-4 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand */}
          <div>
            <div
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--areia)', letterSpacing: '0.05em' }}
            >
              PER5
            </div>
            <div
              className="text-xs mb-5"
              style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {tx.tagline}
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.about}
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(244,237,230,0.06)', color: 'var(--fumo)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--amber)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--areia)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(244,237,230,0.06)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fumo)';
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.services}
            </h4>
            <ul className="space-y-2.5">
              {tx.serviceLinks.map((label, i) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(serviceIds[i])}
                    className="text-sm text-left transition-colors duration-200"
                    style={{ color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--pedra)')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For whom */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.forWhom}
            </h4>
            <ul className="space-y-2.5">
              {tx.segmentLinks.map((label, i) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(segmentIds[i])}
                    className="text-sm text-left transition-colors duration-200"
                    style={{ color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--pedra)')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.contact}
            </h4>
            <div className="space-y-4 text-sm">
              {[
                { label: 'WhatsApp', val: '(19) 99150-8664', href: 'https://wa.me/5519991508664' },
                { label: 'E-mail',   val: 'guilherme@per5.com.br', href: 'mailto:guilherme@per5.com.br' },
              ].map(({ label, val, href }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(138,122,110,0.6)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {label}
                  </p>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--pedra)')}
                  >
                    {val}
                  </a>
                </div>
              ))}
              <div>
                <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(138,122,110,0.6)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  Registro
                </p>
                <p style={{ color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}>CREA-SP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(244,237,230,0.08)', color: 'var(--pedra)', fontFamily: 'Instrument Sans, sans-serif' }}
        >
          <p>{tx.copyright}</p>
          <p>{tx.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
