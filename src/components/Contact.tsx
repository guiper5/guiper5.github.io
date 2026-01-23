import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, MessageCircle, MapPin, Clock, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Fale conosco agora mesmo',
      value: '(19) 99150-8664',
      link: 'http://wa.me/5519991508664',
      primary: true
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Envie sua dúvida ou solicitação',
      value: 'contato@per5.com.br',
      link: 'mailto:contato@per5.com.br'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Acompanhe nossos projetos',
      value: '@per5eng',
      link: 'https://www.instagram.com/per5eng/'
    },
    {
      icon: Linkedin,
      title: 'Linkedin',
      description: 'Acesse nosso perfil corporativo',
      value: '@per5',
      link: 'https://www.linkedin.com/company/per5/ '
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pronto para dar vida ao seu projeto? Nossa equipe está disponível 
              para esclarecer dúvidas e apresentar a melhor solução para suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0 group cursor-pointer ${
                  method.primary ? 'ring-2 ring-accent/20' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <a 
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      method.primary ? 'gradient-cta' : 'bg-primary'
                    } group-hover:scale-110`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-light transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {method.description}
                    </p>
                    <p className="text-primary font-medium">
                      {method.value}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <Card className="gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">
                    Horário de Atendimento
                  </h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Segunda a Sexta:</strong> 8:00 às 18:00</p>
                  <p><strong>Sábado:</strong> 8:00 às 12:00</p>
                  <p><strong>WhatsApp:</strong> Disponível 24/7</p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">
                    Área de Atuação
                  </h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Todo o Brasil</strong></p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 border-2 border-primary/10 shadow-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Transforme sua ideia em realidade
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Com mais de 7 anos de experiência em engenharia civil, 
                a PER5 é sua parceira ideal para projetos de infraestrutura de qualidade.
              </p>
              <Button 
                size="lg" 
                className="gradient-cta text-accent-foreground hover:opacity-90 shadow-cta px-8 py-3"
                asChild
              >
                <a 
                  href="http://wa.me/5519991508664"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Começar Meu Projeto Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;