import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-blueprints.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Projetos de engenharia civil e infraestrutura - PER5"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Regularização, 
            <span className="block text-accent">OpenBIM</span> 
            e Infraestrutura
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Engenharia civil com foco em inovação e soluções completas.
            Atuamos com regularização de imóveis e loteamentos, projetos de infraestrutura, consultoria técnica e OpenBIM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                Solicite uma Proposta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm"
              onClick={() => {
                document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conheça a PER5
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-slide-up">
          <p className="text-white/70 mb-4 text-sm uppercase tracking-wide">
            Experiência Comprovada Em
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <span>• Regularização</span>
            <span>• Projetos de Infraestrutura</span>
            <span>• Consultoria e análise de patologias</span>
            <span>• OpenBIM</span>
            <span>• Consultoria Técnica</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;