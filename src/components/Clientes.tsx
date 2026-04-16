import { useLanguage } from '@/contexts/LanguageContext';

const placeholders = [
  'Construtora Exemplo',
  'Incorporadora SP',
  'Loteadora Campinas',
  'Engenharia Associados',
  'Indústria Regional',
  'Empreendimentos RJ',
  'Arquitetura & Projetos',
  'Grupo Construção',
];

const ClientItem = ({ name }: { name: string }) => (
  <div
    className="flex items-center gap-3 px-8 py-4 flex-shrink-0"
    style={{ borderRight: '1px solid var(--bd)' }}
  >
    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--amber)' }} />
    <span className="text-sm font-medium whitespace-nowrap" style={{ fontFamily: 'Instrument Sans, sans-serif', color: 'var(--t-b)' }}>
      {name}
    </span>
  </div>
);

const Clientes = () => {
  const { t } = useLanguage();
  const doubled = [...placeholders, ...placeholders];

  return (
    <section style={{ backgroundColor: 'var(--s-2)', borderTop: '1px solid var(--bd)', borderBottom: '1px solid var(--bd)' }}>
      <div className="container mx-auto px-4 py-4">
        <span className="eyebrow text-center block mb-0" style={{ fontSize: '10px' }}>
          {t.clientes.label}
        </span>
      </div>

      <div className="relative overflow-hidden pb-5">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, var(--s-2), transparent)` }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, var(--s-2), transparent)` }}
        />
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <ClientItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
