import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const garantias = [
  { icon: Shield, label: 'Confidencialidade garantida', desc: 'Seu cliente continua sendo seu cliente.' },
  { icon: Clock,  label: 'Prazo definido em contrato',  desc: 'Cronograma real, sem prazo aberto.' },
  { icon: Award,  label: 'Qualidade executiva',         desc: 'Civil 3D, ABNT, ART — padrão de grande escritório.' },
];

const ParaEscritorios = () => {
  return (
    <section
      id="para-escritorios"
      className="py-24"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <span
            className="eyebrow mb-4 block"
            style={{ color: 'var(--per5-sand)' }}
          >
            Para escritórios de arquitetura e engenharia
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Texto */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--per5-offwhite)' }}
              >
                A PER5 é o seu backoffice de infraestrutura
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--per5-sand)' }}>
                Você tem o cliente. Tem o relacionamento. Tem a confiança.
                Mas o projeto pede terraplenagem, drenagem, infraestrutura viária —
                e você não quer perder o escopo nem contratar um engenheiro fixo para isso.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--per5-sand)' }}>
                <span style={{ color: 'var(--per5-offwhite)', fontWeight: 600 }}>
                  É exatamente para isso que a PER5 existe.
                </span>
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--per5-sand)' }}>
                Atuamos como parceiro técnico de escritórios que precisam de projetos de infraestrutura
                civil sem montar equipe interna. Você terceiriza a disciplina conosco, mantém a gestão
                do cliente e entrega um projeto completo e compatibilizado.
              </p>

              <button onClick={() => scrollTo('orcamento')} className="btn-outline-light group">
                Quero ser parceiro da PER5
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Cards de garantia */}
            <div className="space-y-4">
              {garantias.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-lg px-6 py-5 transition-all duration-200"
                  style={{
                    background: 'rgba(245,240,235,0.04)',
                    border: '1px solid rgba(245,240,235,0.10)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(200,121,65,0.08)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,121,65,0.25)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,240,235,0.04)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,240,235,0.10)';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--per5-copper)' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: 'var(--per5-offwhite)' }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: 'var(--per5-offwhite)' }}
                    >
                      {label}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--per5-sand)' }}>{desc}</p>
                  </div>
                </div>
              ))}

              <div
                className="mt-2 pt-6"
                style={{ borderTop: '1px solid rgba(245,240,235,0.10)' }}
              >
                <p className="text-sm" style={{ color: 'rgba(200,184,154,0.5)' }}>
                  Sua assinatura no projeto. Nossa entrega técnica. Transparência total no processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaEscritorios;
