
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  BookOpen, 
  Clock, 
  Users, 
  Award,
  Layers,
  BarChart,
  Monitor,
  Target,
  CheckCircle,
  Heart
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cursos = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update title
    document.title = "Cursos | Michele Queiroz";
  }, []);

  const cursos = [
    {
      id: 1,
      title: "Marketing Digital Completo",
      description: "Aprenda a criar e gerenciar campanhas digitais de sucesso",
      icon: <Monitor className="w-10 h-10" />,
      duration: "40 horas",
      level: "Iniciante a Intermediário",
      benefits: [
        "Estratégias de marketing digital",
        "SEO e otimização para buscadores",
        "Gestão de redes sociais",
        "Análise de métricas e resultados"
      ],
      color: "mq-blue"
    },
    {
      id: 2,
      title: "Branding e Identidade Visual",
      description: "Desenvolva marcas memoráveis e identidades visuais impactantes",
      icon: <Layers className="w-10 h-10" />,
      duration: "35 horas",
      level: "Intermediário",
      benefits: [
        "Estratégias de posicionamento de marca",
        "Criação de elementos visuais",
        "Design de logo e materiais corporativos",
        "Gestão da reputação da marca"
      ],
      color: "mq-light-blue"
    },
    {
      id: 3,
      title: "Marketing Político",
      description: "Estratégias eficientes para campanhas políticas de sucesso",
      icon: <Target className="w-10 h-10" />,
      duration: "45 horas",
      level: "Avançado",
      benefits: [
        "Planejamento estratégico de campanha",
        "Comunicação política eficiente",
        "Mobilização e engajamento de eleitores",
        "Gestão de crises e imagem pública"
      ],
      color: "mq-blue"
    },
    {
      id: 4,
      title: "Gestão de Projetos em Marketing",
      description: "Aprenda a gerenciar projetos de marketing do início ao fim",
      icon: <BarChart className="w-10 h-10" />,
      duration: "30 horas",
      level: "Intermediário a Avançado",
      benefits: [
        "Métodos ágeis para equipes de marketing",
        "Planejamento e execução de campanhas",
        "Gestão de recursos e orçamentos",
        "Avaliação de resultados e KPIs"
      ],
      color: "mq-light-blue"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-mq-blue to-mq-blue-800 py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex items-center text-white/70 mb-4">
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span>Cursos</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Plataforma de Cursos
              </h1>
              <p className="text-white/90 text-xl mb-8 max-w-2xl">
                Desenvolva habilidades práticas e atualizadas com nossos cursos especializados em marketing, 
                branding e comunicação estratégica.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-secondary">
                  Ver todos os cursos
                </button>
                <button className="bg-white text-mq-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-gray-100">
                  Solicitar informações
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-mq-blue" />
                </div>
                <h3 className="text-xl font-bold text-mq-blue mb-3">Conteúdo Premium</h3>
                <p className="text-gray-700">
                  Material didático atualizado e desenvolvido por especialistas do mercado.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-mq-blue" />
                </div>
                <h3 className="text-xl font-bold text-mq-blue mb-3">Flexibilidade de Horários</h3>
                <p className="text-gray-700">
                  Estude no seu próprio ritmo e horário, com acesso ilimitado ao conteúdo.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-mq-blue" />
                </div>
                <h3 className="text-xl font-bold text-mq-blue mb-3">Suporte Dedicado</h3>
                <p className="text-gray-700">
                  Tire suas dúvidas com nossos instrutores e equipe de suporte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course List */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-mq-blue mb-6">
                Nossos Cursos
              </h2>
              <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg">
                Explore nossos cursos especializados e desenvolva habilidades essenciais para o mercado atual
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cursos.map((curso) => (
                <div 
                  key={curso.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className={`bg-${curso.color} p-6 flex items-center`}>
                    <div className="bg-white/20 p-3 rounded-full">
                      {curso.icon}
                    </div>
                    <h3 className="text-white text-2xl font-bold ml-4">
                      {curso.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">
                      {curso.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-mq-light-blue mr-2" />
                        <span className="text-gray-700">{curso.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-mq-light-blue mr-2" />
                        <span className="text-gray-700">{curso.level}</span>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-mq-blue mb-3">O que você vai aprender:</h4>
                    <ul className="space-y-2 mb-6">
                      {curso.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-mq-light-blue shrink-0 mr-2" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full btn-primary`}>
                      Saber mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-mq-blue mb-6">
                O Que Nossos Alunos Dizem
              </h2>
              <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-8 text-mq-blue">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 italic mb-6">
                    "O curso de Marketing Digital transformou minha carreira. O conteúdo prático e atualizado me permitiu implementar estratégias eficazes imediatamente."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-mq-blue rounded-full flex items-center justify-center text-white font-bold">
                      RP
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-mq-blue">Rafael Pereira</h4>
                      <p className="text-gray-600 text-sm">Gestor de Marketing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-8 text-mq-blue">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 italic mb-6">
                    "A didática dos instrutores e a qualidade do material são excepcionais. Consegui aplicar os conhecimentos no meu negócio e vi resultados rapidamente."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-mq-light-blue rounded-full flex items-center justify-center text-white font-bold">
                      CS
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-mq-blue">Camila Santos</h4>
                      <p className="text-gray-600 text-sm">Empreendedora</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-8 text-mq-blue">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 italic mb-6">
                    "O curso de Branding foi fundamental para reposicionar minha empresa no mercado. A abordagem estratégica e prática superou minhas expectativas."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-mq-orange rounded-full flex items-center justify-center text-white font-bold">
                      MA
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-mq-blue">Marcos Almeida</h4>
                      <p className="text-gray-600 text-sm">Diretor de Criação</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-mq-blue to-mq-blue-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Impulsionar sua Carreira?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Inscreva-se agora e comece sua jornada rumo ao sucesso profissional
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <button className="bg-white text-mq-blue px-8 py-4 rounded-md font-medium text-lg transition-all hover:bg-gray-100">
                Cadastre-se na plataforma
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium text-lg transition-all hover:bg-white/10">
                Solicitar mais informações
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cursos;
