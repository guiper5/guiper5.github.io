const diferenciais = [
  'Especialização em infraestrutura — não somos generalistas',
  'Projetos em Civil 3D e AutoCAD com padrão executivo',
  'Emissão de ART e responsabilidade técnica pelo CREA',
  'Integração com projetos de pavimentação, fundações e arquitetura',
  'Atendimento direto com o engenheiro responsável — sem intermediários',
  'Prazos cumpridos — cronograma real, não estimativa comercial',
  'Confidencialidade garantida para parceiros B2B',
  'Campinas e interior de SP · Remoto para todo o Brasil',
];

const stats = [
  { num: '100+', label: 'Projetos entregues' },
  { num: '7+',   label: 'Anos de experiência' },
  { num: '24h',  label: 'Retorno ao contato' },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-theme-alt">
      <div className="container mx-auto px-4">

        {/* Título centralizado */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow mb-3">Por que a PER5?</span>
          <h2
            className="text-3xl md:text-4xl font-bold text-heading mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Projetos de infraestrutura que cabem no seu projeto —
            sem precisar de uma grande empresa
          </h2>
          <p className="text-body-c text-lg leading-relaxed">
            Projetos de terraplenagem e drenagem sempre foram território de grandes escritórios.
            Equipe pesada, prazos longos, burocracia e ticket fora do alcance da maioria das
            construtoras e loteadoras regionais. <strong className="text-heading">A PER5 nasceu para mudar isso.</strong>
          </p>
        </div>

        {/* 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          {/* Texto + stats */}
          <div>
            <p className="text-body-c leading-relaxed mb-5">
              Somos um escritório independente especializado em projetos de infraestrutura civil.
              Entregamos a mesma qualidade técnica que as grandes consultorias entregam — com Civil 3D,
              compatibilização de disciplinas, normas ABNT, ART — mas com a agilidade de quem atende
              você diretamente, responde no mesmo dia e não some depois de assinar o contrato.
            </p>
            <p className="text-body-c leading-relaxed mb-5">
              Para escritórios de arquitetura e engenharia, somos o backoffice de infraestrutura que
              faltava: você mantém o cliente, a gente entrega o projeto técnico.
            </p>
            <p className="text-body-c leading-relaxed">
              Para construtoras e empreendedores, somos o parceiro que torna viável o que antes
              só estava ao alcance de grandes players.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-lg"
                  style={{ border: '1px solid var(--border)', background: 'var(--bg)' }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--per5-copper)',
                    }}
                  >
                    {num}
                  </div>
                  <p className="text-xs text-muted-c leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diferenciais */}
          <div
            className="rounded-lg p-8"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <h3
              className="text-base font-bold text-heading mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Nossos Diferenciais
            </h3>
            <ul className="space-y-4">
              {diferenciais.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-c leading-relaxed">
                  <span
                    className="mt-0.5 flex-shrink-0 font-bold"
                    style={{ color: 'var(--per5-green)' }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
