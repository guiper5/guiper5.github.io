import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precisão Técnica',
      description: 'Projetos desenvolvidos com rigor técnico e atenção aos detalhes'
    },
    {
      icon: Users,
      title: 'Soluções Personalizadas',
      description: 'Atendimento sob medida para cada necessidade específica'
    },
    {
      icon: CheckCircle,
      title: 'Prazo e Orçamento',
      description: 'Compromisso com entregas pontuais e controle de custos'
    },
    {
      icon: Award,
      title: 'Excelência em Engenharia',
      description: 'Padrões elevados de qualidade e inovação constante'
    }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Na PER5, transformamos <strong>desafios de engenharia</strong> em <strong>soluções integradas</strong> de <strong>infraestrutura</strong> e <strong>regularização</strong>. Do <strong>diagnóstico preciso de patologias</strong> à <strong>aprovação de loteamentos e condomínios</strong>, nossa atuação é pautada pelas <strong>normas vigentes</strong> e pelas <strong>melhores práticas do mercado</strong>. Unimos a experiência em <strong>engenharia diagnóstica</strong> à inovação do <strong>openBIM</strong> para oferecer uma <strong>gestão de projetos transparente e interoperável</strong>. Somos <strong>parceiros estratégicos</strong> que asseguram a <strong>viabilidade de cada obra</strong>, respeitando <strong>prazos</strong>, <strong>orçamentos</strong> e as <strong>exigências técnicas mais rigorosas</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-hover transition-shadow duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 gradient-cta rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projetos Executados</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Satisfação dos Clientes</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;