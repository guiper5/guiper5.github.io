import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Compass, 
  ClipboardCheck, 
  Settings,
  ArrowRight, 
  ShieldAlert
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Projetos de Infraestrutura',
      description: 'Projetos de Infraestrutura com Foco em Executabilidade.',
      features: ['Terraplenagem: Volumetria com otimização de movimentação de terra', 'Drenagem: Redes e dispositivos de captação, Drenagem sustentável LID', 'Saneamento: Sistemas de abastecimento de água potável e coleta de esgoto', 'Pavimentação: Asfalto, Concreto, Intertravado, Permeável, Geométricos, Acessos Rodoviários e as-built']
    },
    {
      icon: ShieldAlert,
      title: 'Consultoria em Patologias',
      description: 'Engenharia Diagnóstica: Ciência a Serviço da Longevidade.',
      features: ['Visitas técnicas', 'Diagnóstico', 'Relatórios especializados', 'Soluções para prevenção e correção']
    },
    {
      icon: ClipboardCheck,
      title: 'Regularização de Imóveis e Loteamentos',
      description: 'Regularização técnica e documental para garantir conformidade e viabilidade do imóvel e do Loteamento.',
      features: [ 'Habite-se, Alvarás, Registro de Imóveis e Receita Federal', 'Desmembramentos, unificações e adequações legais', 'Estudos técnicos e de viabilidade', 'Projetos Urbanísticos']
    },
    {
      icon: Settings,
      title: 'OpenBIM',
      description: 'Projetos desenvolvidos em padrão IFC para total interoperabilidade',
      features: ['Consultoria, implantação e treinamentos de metodologia OpenBIM', 'Coordenação e auditoria de projetos e modelos (IFC, IDS, BCF)', 'Modelagem, Scan-to-BIM em IFC nativo', '⁠Gestão de informações em projetos de construção (ISO 19650)']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em engenharia civil e infraestrutura, 
            desde a concepção até a execução dos seus projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a 
                    href="http://wa.me/5519991508664"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Como Trabalhamos
            </h3>
            <p className="text-muted-foreground">
              Processo estruturado para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inteligência de Dados', desc: 'Transformamos necessidades em diretrizes técnicas e legais claras.' },
              { step: '02', title: 'Engenharia Integrada', desc: 'Projetamos soluções em BIM para antecipar problemas e otimizar custos de infraestrutura.' },
              { step: '03', title: 'Rigor Executivo', desc: 'Gestão focada na performance da obra e na mitigação de riscos patológicos.' },
              { step: '04', title: 'Ativos Valorizados', desc: 'Entrega de Projeto compatibilizados e prontos para execução' }
            ].map((process, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold">{process.step}</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;