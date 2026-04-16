import { MessageCircle, Mail, Instagram, Linkedin, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const tx = t.contact;

  return (
    <section id="contato" className="py-20" style={{ backgroundColor: 'var(--s-2)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <span className="eyebrow">{tx.eyebrow}</span>
            <h2 className="text-section mb-4" style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>
              {tx.title}
            </h2>
            <p className="text-sm" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Main channels */}
            <div className="space-y-3">
              <a
                href="https://wa.me/5519991508664"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-sm transition-all duration-200 group"
                style={{ background: 'var(--s-card)', border: '1px solid rgba(192,132,89,0.25)' }}
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'var(--amber)' }}>
                  <MessageCircle className="h-5 w-5" style={{ color: 'var(--areia)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.channels.wa.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--t-h)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.channels.wa.value}
                  </div>
                </div>
              </a>

              <a
                href="mailto:guilherme@per5.com.br"
                className="flex items-center gap-4 p-5 rounded-sm transition-all duration-200"
                style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'var(--amber-pale)' }}>
                  <Mail className="h-5 w-5" style={{ color: 'var(--amber-d)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.channels.email.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--t-h)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.channels.email.value}
                  </div>
                </div>
              </a>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/per5eng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-4 rounded-sm transition-all duration-200"
                  style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}
                >
                  <Instagram className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                  <span className="text-sm" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.channels.ig}
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/per5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-4 rounded-sm transition-all duration-200"
                  style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                  <span className="text-sm" style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.channels.li}
                  </span>
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div className="p-5 rounded-sm" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4" style={{ color: 'var(--amber)' }} />
                  <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.atuacao.title}
                  </span>
                </div>
                <div className="space-y-2">
                  {tx.atuacao.rows.map(({ label, val }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif' }}>{label}</span>
                      <span style={{ color: 'var(--t-h)', fontFamily: 'Instrument Sans, sans-serif' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-sm" style={{ background: 'var(--s-card)', border: '1px solid var(--bd)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4" style={{ color: 'var(--amber)' }} />
                  <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--amber)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.horario.title}
                  </span>
                </div>
                <div className="space-y-2">
                  {tx.horario.rows.map(({ label, val }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span style={{ color: 'var(--t-m)', fontFamily: 'Instrument Sans, sans-serif' }}>{label}</span>
                      <span style={{ color: 'var(--t-h)', fontFamily: 'Instrument Sans, sans-serif' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-sm" style={{ background: 'var(--amber-pale)', border: '1px solid rgba(192,132,89,0.2)' }}>
                <p
                  className="text-xs"
                  style={{ color: 'var(--amber-d)', fontFamily: 'Instrument Sans, sans-serif' }}
                  dangerouslySetInnerHTML={{ __html: tx.crea }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
