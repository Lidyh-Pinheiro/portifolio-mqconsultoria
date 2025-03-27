
import { 
  TrendingUp, 
  Palette, 
  Building, 
  Users
} from 'lucide-react';

const AreasAtuacao = () => {
  const areas = [
    {
      id: 1,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Marketing Estratégico",
      items: [
        "Diagnóstico de mercado e definição de metas",
        "Criação de campanhas publicitárias",
        "Gestão de redes sociais e análise de métricas",
        "Fortalecimento da marca e posicionamento"
      ]
    },
    {
      id: 2,
      icon: <Palette className="w-12 h-12" />,
      title: "Identidade Visual",
      items: [
        "Design criativo de logotipos personalizados",
        "Desenvolvimento de manual de identidade visual",
        "Criação de materiais gráficos e institucionais",
        "Aplicação da marca em diferentes materiais"
      ]
    },
    {
      id: 3,
      icon: <Building className="w-12 h-12" />,
      title: "Identidade Institucional",
      items: [
        "Construção de missão, visão e valores",
        "Estratégias para consolidar imagem e reputação",
        "Produção de materiais corporativos",
        "Planejamento de comunicação interna e externa"
      ]
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12" />,
      title: "Desenvolvimento Organizacional",
      items: [
        "Treinamentos em branding e marketing",
        "Alinhamento de objetivos com estratégias",
        "Elaboração de projetos para captação",
        "Planejamento estratégico integrado"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-mq-blue to-mq-blue-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
          <p className="text-white/80 text-lg">
            Oferecemos serviços especializados em diferentes áreas, 
            sempre com foco em resultados e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div 
              key={area.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-mq-light-blue mr-4">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {area.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {area.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mq-light-blue mr-2">•</span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
