import { LanguageProvider } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { OPEN_CONSENT_EVENT } from '@/lib/analytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PATH = '/politica-de-privacidade';
const UPDATED = '27/09/2026';

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Quem somos',
    body: (
      <p>
        Este site é mantido pela PER5 Projetos e Consultoria, com sede em Campinas (SP), responsável pelo tratamento
        dos dados descritos nesta política.
      </p>
    ),
  },
  {
    title: 'Google Analytics 4 e cookies',
    body: (
      <>
        <p>
          Usamos o Google Analytics 4 (GA4), serviço do Google, para entender como o site é usado: páginas visitadas,
          tempo de navegação, origem do acesso, tipo de dispositivo e cliques em botões de contato (WhatsApp, e-mail
          e telefone). Os dados são estatísticos e usados apenas para melhorar o conteúdo e a experiência do site.
        </p>
        <p>
          Os cookies do GA4 (como <code>_ga</code>) só são gravados depois que você clica em "Aceitar" no aviso de
          cookies. Se você recusar, nenhum cookie de análise é gravado. Não usamos cookies de publicidade nem
          compartilhamos dados para anúncios personalizados.
        </p>
        <p>
          O Google trata esses dados conforme a sua própria{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--amber)' }}>
            Política de Privacidade
          </a>
          . Os dados ficam retidos no GA4 por [PREENCHER: 2 ou 14 meses, conforme configuração da propriedade].
        </p>
      </>
    ),
  },
  {
    title: 'Formulário de orçamento e contato',
    body: (
      <p>
        Os dados enviados pelo formulário de orçamento (nome, e-mail, telefone, empresa e informações do projeto) são
        usados apenas para responder à sua solicitação. O envio é processado pelo serviço Formspree. Ao clicar em um
        link de WhatsApp, a conversa acontece no aplicativo do WhatsApp, sob as regras dele. Não vendemos nem
        compartilhamos seus dados com terceiros para outras finalidades.
      </p>
    ),
  },
  {
    title: 'Seus direitos',
    body: (
      <p>
        Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir confirmação do tratamento, acesso,
        correção, anonimização ou exclusão dos seus dados, além de revogar o consentimento a qualquer momento. Para
        isso, entre em contato pelo canal abaixo.
      </p>
    ),
  },
  {
    title: 'Contato do responsável',
    body: (
      <ul className="list-none space-y-1 pl-0">
        <li>Responsável pelo tratamento de dados: [PREENCHER: nome]</li>
        <li>E-mail: [PREENCHER: e-mail de contato para privacidade]</li>
      </ul>
    ),
  },
];

const PoliticaPrivacidade = () => {
  useSEO({
    title: 'Política de Privacidade | PER5',
    description:
      'Como a PER5 usa cookies e o Google Analytics 4, como trata os dados do formulário de orçamento e como exercer seus direitos pela LGPD.',
    canonicalPath: PATH,
  });

  const openConsent = () => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative pt-36 pb-14 md:pt-44 md:pb-16" style={{ backgroundColor: 'var(--s-dark)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: 'var(--amber)' }} />
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <span className="eyebrow-light">LGPD</span>
                <h1
                  className="mb-4"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 'clamp(34px, 4.6vw, 56px)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--areia)',
                    lineHeight: 1.08,
                  }}
                >
                  Política de Privacidade
                </h1>
                <p className="text-sm" style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}>
                  Última atualização: {UPDATED}
                </p>
              </div>
            </div>
          </section>

          <section className="py-16" style={{ backgroundColor: 'var(--s-page)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl space-y-10">
                {sections.map(({ title, body }) => (
                  <div key={title}>
                    <h2
                      className="text-2xl mb-3"
                      style={{ color: 'var(--t-h)', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}
                    >
                      {title}
                    </h2>
                    <div
                      className="space-y-3 text-base leading-relaxed"
                      style={{ color: 'var(--t-b)', fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      {body}
                    </div>
                  </div>
                ))}

                <button type="button" onClick={openConsent} className="btn-outline-amber focus-ring" data-consent="open">
                  Alterar preferências de cookies
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default PoliticaPrivacidade;
