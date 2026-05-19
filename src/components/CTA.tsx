import { useState } from 'react';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type FormState = 'idle' | 'sending' | 'success' | 'error';
const whatsappHref = 'https://wa.me/5519991508664';

const CTA = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [telefone, setTelefone] = useState('');
  const { t } = useLanguage();
  const tx = t.cta;

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    setTelefone(e.target.value.replace(/\D/g, '').slice(0, 11));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (telefone.length < 10) {
      e.currentTarget.querySelector<HTMLInputElement>('[name="telefone"]')
        ?.setCustomValidity(tx.phoneRequired);
      e.currentTarget.reportValidity();
      return;
    }
    setFormState('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/xlgonzzz', {
        method: 'POST', body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setFormState('success'); setTelefone(''); (e.target as HTMLFormElement).reset(); }
      else setFormState('error');
    } catch { setFormState('error'); }
  };

  const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
      style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--fumo)' }}
    >
      {children}
    </label>
  );

  const Req = () => <span style={{ color: 'var(--amber)' }}>*</span>;

  return (
    <section id="orcamento" className="py-24" style={{ backgroundColor: 'var(--s-dark)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="eyebrow-light">{tx.eyebrow}</span>
            <h2
              className="text-section mb-4"
              style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
            >
              {tx.title}
            </h2>
            <p
              className="text-base"
              style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
              dangerouslySetInnerHTML={{
                __html: tx.subtitle.replace(/<strong>/g, '<strong style="color:var(--amber)">'),
              }}
            />
            <div
              className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 rounded-sm p-5 text-left"
              style={{ background: 'rgba(244,237,230,0.04)', border: '1px solid rgba(192,132,89,0.22)' }}
            >
              <div>
                <h3
                  className="text-xl mb-1"
                  style={{ color: 'var(--areia)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                >
                  {tx.whatsappTitle}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {tx.whatsappBody}
                </p>
              </div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber justify-center self-center whitespace-nowrap focus-ring">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                {tx.whatsappCta}
              </a>
            </div>
            <p className="mt-5 text-xs uppercase tracking-wider" style={{ color: 'var(--amber-l)', fontFamily: 'Instrument Sans, sans-serif' }}>
              {tx.formHint}
            </p>
          </div>

          {/* Success */}
          {formState === 'success' ? (
            <div className="rounded-sm p-12 text-center" style={{ background: 'var(--s-dark-card)', border: '1px solid rgba(244,237,230,0.1)' }}>
              <CheckCircle aria-hidden="true" className="h-14 w-14 mx-auto mb-4" style={{ color: 'var(--amber)' }} />
              <h3 className="text-2xl mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--areia)', textTransform: 'uppercase' }}>
                {tx.successTitle}
              </h3>
              <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                {tx.successBody}
              </p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-amber mt-8 inline-flex justify-center focus-ring">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                {tx.whatsappCta}
              </a>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xlgonzzz"
              method="POST"
              onSubmit={handleSubmit}
              className="rounded-sm p-8 md:p-10 space-y-8"
              style={{ background: 'var(--s-dark-card)', border: '1px solid rgba(244,237,230,0.08)' }}
            >
              {/* Identification */}
              <div>
                <div className="label mb-5" style={{ color: 'var(--amber-l)', borderBottom: '1px solid rgba(244,237,230,0.1)', paddingBottom: '8px' }}>
                  {tx.sections.id}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">{tx.labels.nome} <Req /></Label>
                    <input id="nome" type="text" name="nome" required autoComplete="name" placeholder={tx.placeholders.nome} aria-describedby="nome-help" className="input-per5" />
                    <p id="nome-help" className="sr-only">{tx.requiredField}</p>
                  </div>
                  <div>
                    <Label htmlFor="email">{tx.labels.email} <Req /></Label>
                    <input id="email" type="email" name="email" required autoComplete="email" placeholder={tx.placeholders.email} aria-describedby="email-help" className="input-per5" />
                    <p id="email-help" className="sr-only">{tx.emailHelp}</p>
                  </div>
                  <div>
                    <Label htmlFor="telefone">{tx.labels.telefone} <Req /></Label>
                    <input
                      id="telefone" type="tel" name="telefone" required inputMode="numeric"
                      value={telefone} onChange={handlePhone}
                      onFocus={e => e.target.setCustomValidity('')}
                      placeholder={tx.placeholders.telefone}
                      maxLength={11} pattern="[0-9]{10,11}"
                      title={tx.phoneTitle}
                      autoComplete="tel-national"
                      aria-describedby={telefone.length > 0 ? 'telefone-status telefone-help' : 'telefone-help'}
                      className="input-per5"
                    />
                    <p id="telefone-help" className="sr-only">{tx.phoneRequired}</p>
                    {telefone.length > 0 && telefone.length < 10 && (
                      <p id="telefone-status" className="mt-1 text-xs" style={{ color: 'var(--amber-l)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        {tx.phoneHint(11 - telefone.length)}
                      </p>
                    )}
                    {telefone.length >= 10 && (
                      <p id="telefone-status" className="mt-1 text-xs" style={{ color: 'var(--areia)' }}>{tx.phoneOk}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="empresa">{tx.labels.empresa}</Label>
                    <input id="empresa" type="text" name="empresa" autoComplete="organization" placeholder={tx.placeholders.empresa} className="input-per5" />
                  </div>
                </div>
              </div>

              {/* You are */}
              <div>
                <div className="label mb-5" style={{ color: 'var(--amber-l)', borderBottom: '1px solid rgba(244,237,230,0.1)', paddingBottom: '8px' }}>
                  {tx.sections.voce} <Req />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tx.tipoSolicitante.map((tipo, i) => (
                    <label
                      key={tipo}
                      htmlFor={`tipo-solicitante-${i}`}
                      className="flex min-h-11 items-center gap-3 px-4 py-3 rounded-sm cursor-pointer text-sm transition-all duration-150"
                      style={{ border: '1px solid rgba(244,237,230,0.12)', color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      <input id={`tipo-solicitante-${i}`} type="radio" name="tipo_solicitante" value={tipo} required style={{ accentColor: 'var(--amber)', fontSize: '16px' }} />
                      {tipo}
                    </label>
                  ))}
                </div>
              </div>

              {/* About the project */}
              <div>
                <div className="label mb-5" style={{ color: 'var(--amber-l)', borderBottom: '1px solid rgba(244,237,230,0.1)', paddingBottom: '8px' }}>
                  {tx.sections.projeto}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tipo-projeto">{tx.labels.tipoProjeto} <Req /></Label>
                    <select id="tipo-projeto" name="tipo_projeto" required defaultValue={tx.tipoProjeto[0]} aria-describedby="tipo-projeto-help" className="input-per5">
                      {tx.tipoProjeto.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                    <p id="tipo-projeto-help" className="sr-only">{tx.requiredField}</p>
                  </div>
                  <div>
                    <Label htmlFor="localizacao">{tx.labels.localizacao} <Req /></Label>
                    <input id="localizacao" type="text" name="localizacao" required autoComplete="address-level2" placeholder={tx.placeholders.localizacao} aria-describedby="localizacao-help" className="input-per5" />
                    <p id="localizacao-help" className="sr-only">{tx.requiredField}</p>
                  </div>
                  <div>
                    <Label htmlFor="area">{tx.labels.area} <Req /></Label>
                    <select id="area" name="area" required aria-describedby="area-help" className="input-per5">
                      <option value="">—</option>
                      {tx.area.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                    <p id="area-help" className="sr-only">{tx.requiredField}</p>
                  </div>
                  <div>
                    <Label htmlFor="prazo">{tx.labels.prazo} <Req /></Label>
                    <select id="prazo" name="prazo" required aria-describedby="prazo-help" className="input-per5">
                      <option value="">—</option>
                      {tx.prazo.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                    <p id="prazo-help" className="sr-only">{tx.requiredField}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="descricao">{tx.labels.desc}</Label>
                  <textarea id="descricao" name="descricao" rows={4} placeholder={tx.placeholders.desc} className="input-per5 resize-none" />
                </div>
              </div>

              <input type="hidden" name="_subject" value="[PER5] Novo orçamento via site" />
              <input type="hidden" name="destinatario_preferencial" value="guilherme@per5.com.br" />

              <div>
                <button type="submit" disabled={formState === 'sending'} className="btn-amber w-full justify-center text-base group disabled:opacity-60">
                  {formState === 'sending' ? tx.sending : (
                    <>{tx.submit} <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                {formState === 'error' && (
                  <p className="mt-3 text-xs text-center" style={{ color: 'var(--amber-l)', fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tx.errMsg}
                  </p>
                )}
                <p className="mt-4 text-xs text-center" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  {tx.privacy}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
