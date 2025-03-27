
import { Award, Check, TrendingUp } from 'lucide-react';

const ConsultoriaPolitica = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-mq-blue" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mq-blue mb-6">
            Consultoria Política
          </h2>
          <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Oferecemos consultoria especializada para candidatos e profissionais que atuam na área política, 
            desenvolvendo estratégias eficientes para fortalecer a imagem e a comunicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-mq-blue transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-mq-blue" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Estratégias de Campanha</h3>
            <p className="text-gray-700 mb-6">
              Desenvolvemos estratégias personalizadas de comunicação e posicionamento para candidatos e partidos políticos.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Planejamento de campanha</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Análise de cenário político</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Definição de metas e objetivos</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-mq-light-blue transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-light-blue/10 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-mq-light-blue" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Marketing Político</h3>
            <p className="text-gray-700 mb-6">
              Criamos e implementamos ações de marketing direcionadas ao fortalecimento da imagem do candidato.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Gestão de redes sociais</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Criação de conteúdo estratégico</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Posicionamento de marca pessoal</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-mq-orange transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-orange/10 flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-mq-orange" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Comunicação Política</h3>
            <p className="text-gray-700 mb-6">
              Desenvolvemos estratégias de comunicação eficientes para conectar candidatos com seu eleitorado.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Discurso e oratória</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Media training</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 text-mq-light-blue">
                  <Check size={16} />
                </div>
                <span>Gerenciamento de crises</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5511952156866" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <MessageCircle className="mr-2" />
            Agende uma consultoria
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaPolitica;
