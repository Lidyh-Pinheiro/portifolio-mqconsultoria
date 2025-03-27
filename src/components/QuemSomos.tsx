
import { Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <h3 className="text-2xl text-mq-blue-700 mb-8">Conheça sua mentora</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-mq-blue p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                  <img 
                    src="/public/lovable-uploads/148a8dab-56cf-4074-8f11-9f764cf6cf57.png" 
                    alt="Michele Queiroz" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
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
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://wa.me/5511952156866" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center transition-all"
                >
                  <MessageCircle className="mr-2" />
                  Fale comigo no WhatsApp
                </a>
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
              
              <div className="mt-8 text-center">
                <h4 className="text-mq-blue font-bold mb-4 text-xl">Vamos trabalhar juntos?</h4>
                <p className="text-gray-700 mb-4">
                  Entre em contato e vamos transformar suas ideias em resultados concretos.
                </p>
                <a 
                  href="https://wa.me/5511952156866" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  <MessageCircle className="mr-2" />
                  Iniciar conversa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
