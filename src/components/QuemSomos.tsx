
import { Users } from 'lucide-react';

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white bg-curve-pattern">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-mq-blue" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mq-blue mb-6">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-mq-blue p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
                Michele Queiroz
              </h3>
              <p className="text-white/90 mb-6">
                Especialista em criação e implementação de estratégias de marketing, identidade visual e desenvolvimento institucional.
              </p>
              <div className="bg-white/20 rounded-lg p-6">
                <h4 className="text-white font-bold mb-4 text-xl">Formação</h4>
                <ul className="text-white/90 space-y-2">
                  <li>• Graduada em Tecnólogo em Marketing</li>
                  <li>• Licenciatura em Pedagogia</li>
                  <li>• Especialista em Docência de Ensino Superior</li>
                  <li>• Tutoria em Educação a Distância</li>
                  <li>• Gestão Integrada em Marketing</li>
                  <li>• Estudante de Marketing Político Eleitoral</li>
                </ul>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-mq-blue text-2xl md:text-3xl font-bold mb-6">
                Nossa Atuação
              </h3>
              <p className="mb-6 text-gray-700">
                A Michele Queiroz Mentoria e Consultora é especialista na criação e implementação de estratégias de marketing, identidade visual e desenvolvimento institucional. Nossas ações são para transformar a presença de marcas, pessoas, organizações, políticos e governamental, aplicando soluções alinhadas aos objetivos de nossos clientes e às demandas do mercado.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-mq-blue font-bold mb-4 text-xl">Atuamos com:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Estratégias personalizadas de marketing</li>
                  <li>• Identidade visual e branding</li>
                  <li>• Desenvolvimento institucional</li>
                  <li>• Marketing político e eleitoral</li>
                  <li>• Gestão de imagem e comunicação</li>
                  <li>• Capacitação de equipes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
