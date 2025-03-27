
import { ChevronDown, Book } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-mq-blue overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/717d7aff-a889-485c-8cdc-f1138712d1f7.png')] bg-cover bg-center opacity-20"></div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
              Michele<br />Queiroz
            </h1>
            <h2 className="text-white/90 text-3xl md:text-4xl font-medium mb-6">
              Mentoria e Consultoria
            </h2>
            <div className="w-24 h-1 bg-mq-light-blue mb-8"></div>
            <p className="text-white/80 text-xl mb-8 max-w-lg">
              Transformamos ideias em estratégias que geram resultados.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('quem-somos')} 
                className="btn-secondary"
              >
                Conheça nosso trabalho
              </button>
              <button 
                onClick={() => window.location.href = '/cursos'}
                className="bg-white text-mq-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-gray-100 flex items-center"
              >
                <Book className="mr-2" size={18} />
                Plataforma de Cursos
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center animate-zoom-in">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-mq-light-blue/20 backdrop-blur-sm rounded-full animate-float"></div>
              <img 
                src="/public/lovable-uploads/d0f47c10-8f2b-4e19-b944-edde9bb98f3b.png" 
                alt="Logo Michele Queiroz" 
                className="absolute inset-0 w-full h-full object-contain p-8 logo-glow"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('quem-somos')}
      >
        <ChevronDown className="text-white/70 hover:text-white transition-colors" size={36} />
      </div>
    </section>
  );
};

export default Hero;
