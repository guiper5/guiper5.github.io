import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4F4744] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-cta rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">P5</span>
              </div>
              <h3 className="text-xl font-bold">PER5 PROJETOS E CONSULTORIA</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Especialistas em engenharia de infraestrutura, projetos técnicos e 
              consultorias com foco em excelência e inovação.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5519991508664"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/per5eng/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contato@per5.com.br"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Projetos de Infraestrutura</li>
              <li>Consultoria em Patologias</li>
              <li>Regularização de Imóveis</li>
              <li>OpenBIM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <p className="font-medium">WhatsApp:</p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5519991508664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  (19) 99150-8664
                </a>
              </div>
              <div>
                <p className="font-medium">E-mail:</p>
                <a 
                  href="mailto:contato@per5.com.br"
                  className="hover:text-accent transition-colors"
                >
                  contato@per5.com.br
                </a>
              </div>
              <div>
                <p className="font-medium">Atendimento:</p>
                <p>Seg-Sex: 8h às 18h</p>
                <p>Sáb: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© 2026 PER5 Projetos e Consultoria. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span>Transformamos desafios em soluções sustentáveis e inteligentes.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;