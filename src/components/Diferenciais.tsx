
import { CheckCircle } from 'lucide-react';

const Diferenciais = () => {
  const diferenciais = [
    {
      title: "Abordagem Criativa e Estratégica",
      description: "Soluções que unem design, marketing e posicionamento institucional."
    },
    {
      title: "Soluções Personalizadas",
      description: "Cada cliente é único, e cada estratégia é feita sob medida para atender às suas necessidades."
    },
    {
      title: "Experiência Multidisciplinar",
      description: "Atuamos em projetos que vão desde pequenas marcas até campanhas político-eleitorais."
    },
    {
      title: "Ferramentas Modernas",
      description: "Utilizamos as melhores práticas e tecnologias para entregar resultados de impacto."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mq-blue mb-6">
            Diferenciais
          </h2>
          <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg">
            O que nos torna únicos e diferenciados no mercado
          </p>
        </div>

        <div className="bg-mq-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="space-y-6">
                {diferenciais.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-mq-light-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-mq-blue-800 p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Resultados e Impacto
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center">
                    <span className="text-mq-light-blue text-4xl font-bold mr-3">+</span>
                    <div>
                      <h4 className="text-white text-xl font-bold">Experiência Ampla</h4>
                      <p className="text-white/80">Sucesso comprovado em campanhas municipais, estaduais e federais.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center">
                    <span className="text-mq-light-blue text-4xl font-bold mr-3">+</span>
                    <div>
                      <h4 className="text-white text-xl font-bold">Equipe Multidisciplinar</h4>
                      <p className="text-white/80">Especialistas em marketing político, design, comunicação e mobilização.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center">
                    <span className="text-mq-light-blue text-4xl font-bold mr-3">+</span>
                    <div>
                      <h4 className="text-white text-xl font-bold">Aumento de Engajamento</h4>
                      <p className="text-white/80">Resultados digitais e presenciais acima da média do setor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
