
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-mq-blue-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Michele Queiroz</h3>
            <div className="w-12 h-1 bg-mq-light-blue mb-6"></div>
            <p className="text-white/80 mb-6">
              Transformando ideias em estratégias que geram resultados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/micheleconsultora_mkt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mq-light-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:michelemkt2016@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mq-light-blue transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+5511952156866" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mq-light-blue transition-colors"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <div className="w-12 h-1 bg-mq-light-blue mb-6"></div>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="/#quem-somos" className="text-white/80 hover:text-white transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="/#servicos" className="text-white/80 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="/cursos" className="text-white/80 hover:text-white transition-colors">Cursos</a>
              </li>
              <li>
                <a href="/#contato" className="text-white/80 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <div className="w-12 h-1 bg-mq-light-blue mb-6"></div>
            <ul className="space-y-4">
              <li>
                <a href="/#servicos" className="text-white/80 hover:text-white transition-colors">Marketing Estratégico</a>
              </li>
              <li>
                <a href="/#servicos" className="text-white/80 hover:text-white transition-colors">Identidade Visual</a>
              </li>
              <li>
                <a href="/#servicos" className="text-white/80 hover:text-white transition-colors">Identidade Institucional</a>
              </li>
              <li>
                <a href="/#servicos" className="text-white/80 hover:text-white transition-colors">Desenvolvimento Organizacional</a>
              </li>
              <li>
                <a href="/#servicos" className="text-white/80 hover:text-white transition-colors">Marketing Político</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="w-12 h-1 bg-mq-light-blue mb-6"></div>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="w-5 h-5 text-mq-light-blue mr-3 shrink-0" />
                <span className="text-white/80">(11) 95215-6866</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-mq-light-blue mr-3 shrink-0" />
                <span className="text-white/80">michelemkt2016@gmail.com</span>
              </li>
              <li className="flex">
                <Instagram className="w-5 h-5 text-mq-light-blue mr-3 shrink-0" />
                <a 
                  href="https://instagram.com/micheleconsultora_mkt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  @micheleconsultora_mkt
                </a>
              </li>
              <li className="flex">
                <MapPin className="w-5 h-5 text-mq-light-blue mr-3 shrink-0" />
                <span className="text-white/80">Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="/public/lovable-uploads/d0f47c10-8f2b-4e19-b944-edde9bb98f3b.png" 
                alt="Logo Michele Queiroz" 
                className="h-16 w-auto mx-auto md:mx-0"
              />
            </div>
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Michele Queiroz. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
