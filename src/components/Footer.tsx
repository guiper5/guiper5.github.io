import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSectionNav } from '@/hooks/useSectionNav';

/**
 * Páginas de conteúdo que ficam fora do menu principal. O rodapé é o único
 * lugar do site visível que aponta para elas. Sem isso o cluster inteiro
 * seria órfão, e página órfã ranqueia mal por mais bem escrita que seja.
 */
const moreLinks: { to: string; pt: string; en: string }[] = [
  { to: '/engenharia-civil/sala-tecnica', pt: 'Sala Técnica', en: 'Sala Técnica' },
  { to: '/engenharia-civil/cidades', pt: 'Cidades atendidas', en: 'Service areas' },
  { to: '/engenharia-civil/regiao-19', pt: 'Região de Campinas', en: 'Campinas region' },
  { to: '/engenharia-civil/sao-paulo', pt: 'São Paulo', en: 'São Paulo' },
  { to: '/engenharia-civil/brasil', pt: 'Todo o Brasil', en: 'Nationwide' },
  { to: '/engenharia-civil/documentacao/regularizacao-de-obras', pt: 'Regularização de obras', en: 'Construction compliance' },
  { to: '/engenharia-civil/documentacao/estudos-e-planos', pt: 'Estudos e planos', en: 'Studies and plans' },
  { to: '/engenharia-civil/glossario', pt: 'Glossário técnico', en: 'Technical glossary' },
];

const Footer = () => {
  const { t, lang } = useLanguage();
  const tx = t.footer;
  const scrollTo = useSectionNav();

  const socials = [
    { icon: MessageCircle, href: 'https://wa.me/5519991508664',            label: 'WhatsApp' },
    { icon: Instagram,     href: 'https://www.instagram.com/per5eng/',     label: 'Instagram' },
    { icon: Linkedin,      href: 'https://www.linkedin.com/company/per5/', label: 'LinkedIn' },
    { icon: Mail,          href: 'mailto:guilherme@per5.com.br',           label: 'Email' },
  ];

  const serviceIds = ['servicos','servicos','servicos','servicos','servicos','servicos'];
  const segmentIds = ['audiencia','audiencia','audiencia','audiencia'];

  // Paralelos a tx.serviceLinks / tx.segmentLinks: quando existe página dedicada,
  // o item vira <Link>; quando não existe (Topografia), continua como âncora.
  const serviceRoutes: (string | null)[] = [
    '/engenharia-civil/servicos/terraplenagem',
    '/engenharia-civil/servicos/drenagem-pluvial',
    '/engenharia-civil/servicos/pavimentacao',
    '/engenharia-civil/servicos/projeto-urbanistico',
    null,
    '/engenharia-civil/sala-tecnica',
  ];
  const segmentRoutes: (string | null)[] = [
    '/engenharia-civil/para/construtoras',
    '/engenharia-civil/para/industrias',
    '/engenharia-civil/para/loteadoras',
    '/engenharia-civil/para/escritorios-de-arquitetura',
  ];

  const linkStyle = { color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' } as const;
  const linkClass = 'block min-h-11 py-2 text-left text-sm transition-colors duration-200';
  const hoverIn = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = 'var(--areia)');
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = 'var(--fumo)');

  return (
    <footer style={{ background: 'var(--s-footer)' }}>
      <div className="container mx-auto px-4 pt-16 pb-8">

        <div className="grid grid-cols-1 gap-10 mb-14 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.35fr_1.3fr]">

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
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
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
                  className="w-11 h-11 rounded-sm flex items-center justify-center transition-all duration-200"
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
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.services}
            </p>
            <ul className="space-y-2.5">
              {tx.serviceLinks.map((label, i) => (
                <li key={label}>
                  {serviceRoutes[i] ? (
                    <Link to={serviceRoutes[i] as string} className={linkClass} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                      {label}
                    </Link>
                  ) : (
                    <button onClick={() => scrollTo(serviceIds[i])} className={linkClass} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* For whom */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.forWhom}
            </p>
            <ul className="space-y-2.5">
              {tx.segmentLinks.map((label, i) => (
                <li key={label}>
                  {segmentRoutes[i] ? (
                    <Link to={segmentRoutes[i] as string} className={linkClass} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                      {label}
                    </Link>
                  ) : (
                    <button onClick={() => scrollTo(segmentIds[i])} className={linkClass} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.credentials}
            </p>
            <div
              className="flex min-w-0 items-center gap-3 rounded-sm p-3"
              style={{ background: 'rgba(244,237,230,0.06)', border: '1px solid rgba(192,132,89,0.2)' }}
            >
              <picture className="h-14 w-14 shrink-0">
                <source srcSet="/buildingsmart.webp" type="image/webp" />
                <img
                  src="/buildingsmart.png"
                  alt="buildingSMART"
                  loading="lazy"
                  className="h-14 w-14 object-contain"
                />
              </picture>
              <a
                href="https://www.buildingsmart.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-0 items-center text-xs font-medium leading-snug transition-colors duration-200"
                style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif', overflowWrap: 'anywhere' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--amber-l)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--fumo)')}
              >
                Buildingsmart
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.contact}
            </p>
            <div className="space-y-4 text-sm">
              {[
                { label: 'WhatsApp', val: '(19) 99150-8664', href: 'https://wa.me/5519991508664' },
                { label: 'E-mail',   val: 'guilherme@per5.com.br', href: 'mailto:guilherme@per5.com.br' },
              ].map(({ label, val, href }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(234,224,216,0.68)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {label}
                  </p>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center transition-colors duration-200"
                    style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--fumo)')}
                  >
                    {val}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conteúdo técnico: páginas fora do menu principal */}
        <nav
          aria-label={lang === 'pt' ? 'Conteúdo técnico' : 'Technical content'}
          className="mb-8 pt-8"
          style={{ borderTop: '1px solid rgba(244,237,230,0.08)' }}
        >
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
            {lang === 'pt' ? 'Conteúdo técnico' : 'Technical content'}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {moreLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-11 items-center text-sm transition-colors duration-200"
                  style={linkStyle}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                >
                  {lang === 'pt' ? item.pt : item.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(244,237,230,0.08)', color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
        >
          <p>{tx.copyright}</p>
          <p>
            {tx.developedBy}{' '}
            <a
              href="https://skytalos.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--fumo)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--areia)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fumo)')}
            >
              Skytalos
            </a>
          </p>
          <p>{tx.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
