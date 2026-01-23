import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-primary rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-primary rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tem um projeto em mente?
            <span className="block text-accent">Fale com a PER5.</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
            Estamos prontos para entregar <strong>soluções técnicas</strong> com 
            precisão e agilidade para o seu projeto de infraestrutura.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-cta text-accent-foreground hover:opacity-90 shadow-cta px-8 py-6 text-lg font-semibold group"
              asChild
            >
              <a 
                href="http://wa.me/5519991508664"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Entrar em Contato
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-primary border-white hover:bg-white/90 px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:+5519991508664">
                <Phone className="mr-2 h-5 w-5" />
                (19) 99150-8664
              </a>
            </Button>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-accent text-2xl font-bold mb-2">✓</div>
              <h3 className="font-semibold mb-1 text-primary">Orçamento Gratuito</h3>
              <p className="text-muted-foreground text-sm">Análise inicial sem compromisso</p>
            </div>
            <div className="p-4">
              <div className="text-accent text-2xl font-bold mb-2">⚡</div>
              <h3 className="font-semibold mb-1 text-primary">Resposta Rápida</h3>
              <p className="text-muted-foreground text-sm">Retorno em até 24 horas</p>
            </div>
            <div className="p-4">
              <div className="text-accent text-2xl font-bold mb-2">🎯</div>
              <h3 className="font-semibold mb-1 text-primary">Solução Personalizada</h3>
              <p className="text-muted-foreground text-sm">Projeto sob medida para você</p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-primary text-sm mb-2">
              <strong>Atendemos todo o Brasil</strong>
            </p>
            <p className="text-muted-foreground text-xs">
              Projetos de Infraestrutura • Consultoria em Patologias • Regularização de Imóveis e Loteamentos • OpenBIM 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;