import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const CTA = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [telefone, setTelefone] = useState('');
  const { t } = useLanguage();
  const tx = t.cta;

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(e.target.value.replace(/\D/g, '').slice(0, 11));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (telefone.length < 10) {
      e.currentTarget.querySelector<HTMLInputElement>('[name="telefone"]')
        ?.setCustomValidity('Informe DDD + número (mínimo 10 dígitos)');
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

  const Label = ({ children }: { children: React.ReactNode }) => (
    <label
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
          </div>

          {/* Success */}
          {formState === 'success' ? (
            <div className="rounded-sm p-12 text-center" style={{ background: 'var(--s-dark-card)', border: '1px solid rgba(244,237,230,0.1)' }}>
              <CheckCircle className="h-14 w-14 mx-auto mb-4" style={{ color: '#4A6741' }} />
              <h3 className="text-2xl mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--areia)', textTransform: 'uppercase' }}>
                {tx.successTitle}
              </h3>
              <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                {tx.successBody}
              </p>
            </div>
          ) : (
            <form
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
                    <Label>{tx.labels.nome} <Req /></Label>
                    <input type="text" name="nome" required placeholder={tx.placeholders.nome} className="input-per5" />
                  </div>
                  <div>
                    <Label>{tx.labels.email} <Req /></Label>
                    <input type="email" name="email" required placeholder={tx.placeholders.email} className="input-per5" />
                  </div>
                  <div>
                    <Label>{tx.labels.telefone} <Req /></Label>
                    <input
                      type="tel" name="telefone" required inputMode="numeric"
                      value={telefone} onChange={handlePhone}
                      onFocus={e => e.target.setCustomValidity('')}
                      placeholder={tx.placeholders.telefone}
                      maxLength={11} pattern="[0-9]{10,11}"
                      title="Somente dígitos — DDD + número"
                      className="input-per5"
                    />
                    {telefone.length > 0 && telefone.length < 10 && (
                      <p className="mt-1 text-xs" style={{ color: 'var(--amber-l)', fontFamily: 'Instrument Sans, sans-serif' }}>
                        {tx.phoneHint(11 - telefone.length)}
                      </p>
                    )}
                    {telefone.length >= 10 && (
                      <p className="mt-1 text-xs" style={{ color: '#4A6741' }}>{tx.phoneOk}</p>
                    )}
                  </div>
                  <div>
                    <Label>{tx.labels.empresa}</Label>
                    <input type="text" name="empresa" placeholder={tx.placeholders.empresa} className="input-per5" />
                  </div>
                </div>
              </div>

              {/* You are */}
              <div>
                <div className="label mb-5" style={{ color: 'var(--amber-l)', borderBottom: '1px solid rgba(244,237,230,0.1)', paddingBottom: '8px' }}>
                  {tx.sections.voce} <Req />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tx.tipoSolicitante.map((tipo) => (
                    <label
                      key={tipo}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-sm cursor-pointer text-sm transition-all duration-150"
                      style={{ border: '1px solid rgba(244,237,230,0.12)', color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      <input type="radio" name="tipo_solicitante" value={tipo} required style={{ accentColor: 'var(--amber)' }} />
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
                    <Label>{tx.labels.tipoProjeto} <Req /></Label>
                    <select name="tipo_projeto" required defaultValue={tx.tipoProjeto[0]} className="input-per5">
                      {tx.tipoProjeto.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <Label>{tx.labels.localizacao} <Req /></Label>
                    <input type="text" name="localizacao" required placeholder={tx.placeholders.localizacao} className="input-per5" />
                  </div>
                  <div>
                    <Label>{tx.labels.area} <Req /></Label>
                    <select name="area" required className="input-per5">
                      <option value="">—</option>
                      {tx.area.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <Label>{tx.labels.prazo} <Req /></Label>
                    <select name="prazo" required className="input-per5">
                      <option value="">—</option>
                      {tx.prazo.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <Label>{tx.labels.desc}</Label>
                  <textarea name="descricao" rows={4} placeholder={tx.placeholders.desc} className="input-per5 resize-none" />
                </div>
              </div>

              <input type="hidden" name="_replyto" value="guilherme@per5.com.br" />
              <input type="hidden" name="_subject" value="[PER5] Novo orçamento via site" />

              <div>
                <button type="submit" disabled={formState === 'sending'} className="btn-amber w-full justify-center text-base group disabled:opacity-60">
                  {formState === 'sending' ? tx.sending : (
                    <>{tx.submit} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                {formState === 'error' && (
                  <p className="mt-3 text-xs text-center" style={{ color: '#e74c3c', fontFamily: 'Instrument Sans, sans-serif' }}>
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
