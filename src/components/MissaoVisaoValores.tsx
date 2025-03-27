
import { Target, Eye, Heart } from 'lucide-react';

const MissaoVisaoValores = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-mq-blue" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Missão</h3>
            <div className="w-12 h-1 bg-mq-light-blue mb-6"></div>
            <p className="text-gray-700">
              Impulsionar negócios, marcas e campanhas por meio de estratégias inovadoras e soluções criativas.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-mq-blue" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Visão</h3>
            <div className="w-12 h-1 bg-mq-light-blue mb-6"></div>
            <p className="text-gray-700">
              Ser referência em prestação de serviços de mentoria e consultoria alinhada estratégica de marketing político e design institucional, reconhecida pela qualidade e resultados de impacto.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-mq-blue" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Valores</h3>
            <div className="w-12 h-1 bg-mq-light-blue mb-6"></div>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Criatividade e inovação</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Compromisso com resultados</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Ética e transparência</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Foco no cliente e no mercado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValores;
