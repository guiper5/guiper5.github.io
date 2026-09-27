import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GA_ID, OPEN_CONSENT_EVENT, getStoredConsent, setConsent, type ConsentChoice } from '@/lib/analytics';

/**
 * Banner de cookies (LGPD). Aparece enquanto não houver escolha salva e pode
 * ser reaberto pelo link "Preferências de cookies" do rodapé.
 */
const CookieConsent = () => {
  const [open, setOpen] = useState(() => Boolean(GA_ID) && getStoredConsent() === null);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 pointer-events-none"
    >
      <div
        className="pointer-events-auto mx-auto flex max-w-4xl flex-col gap-4 rounded-sm p-4 md:flex-row md:items-center md:gap-6 md:p-5"
        style={{
          background: 'var(--s-footer)',
          border: '1px solid rgba(192,132,89,0.35)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <p
          className="flex-1 text-sm leading-relaxed"
          style={{ color: 'var(--fumo)', fontFamily: 'Instrument Sans, sans-serif' }}
        >
          Usamos cookies para entender como o site é usado e melhorar sua experiência.{' '}
          <Link
            to="/politica-de-privacidade"
            className="underline underline-offset-2 focus-ring"
            style={{ color: 'var(--amber-l)' }}
          >
            Política de Privacidade
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-3 md:flex md:shrink-0">
          <button type="button" onClick={() => choose('denied')} className="btn-ghost justify-center focus-ring" data-consent="deny">
            Recusar
          </button>
          <button type="button" onClick={() => choose('granted')} className="btn-ghost justify-center focus-ring" data-consent="accept">
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
