
import { Book, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CursosSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mq-blue mb-6">
            Nossa Plataforma de Cursos
          </h2>
          <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg mb-8">
            Invista em sua formação e desenvolva habilidades essenciais para liderança, equipes e atuação política
          </p>
          <div className="flex justify-center">
            <a href="https://portifolio.mqconsultoria.marketing/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Acessar Plataforma
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-mq-blue transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center mb-6">
              <Book className="w-8 h-8 text-mq-blue" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Desenvolvimento de Pessoas</h3>
            <p className="text-gray-700 mb-6">
              Cursos focados no desenvolvimento de habilidades pessoais e profissionais para líderes e equipes.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Liderança e Gestão</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Inteligência Emocional</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Comunicação Efetiva</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-mq-light-blue transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-light-blue/10 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-mq-light-blue" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Treinamento Organizacional</h3>
            <p className="text-gray-700 mb-6">
              Formação para desenvolver equipes de alto desempenho dentro de organizações públicas e privadas.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Gestão de Equipes</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Cultura Organizacional</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Resolução de Conflitos</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-mq-orange transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-mq-orange/10 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-mq-orange" />
            </div>
            <h3 className="text-2xl font-bold text-mq-blue mb-4">Assessoria Política</h3>
            <p className="text-gray-700 mb-6">
              Cursos especializados para atuação política em todas as fases da campanha.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Pré-campanha</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Estratégias de Campanha</span>
              </li>
              <li className="flex items-start">
                <span className="text-mq-light-blue mr-2">•</span>
                <span>Pós-campanha e Mandato</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-mq-blue-50 rounded-xl p-8 shadow-inner text-center">
          <h3 className="text-2xl font-bold text-mq-blue mb-4">
            Está pronto para elevar suas habilidades?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Acesse agora nossa plataforma completa de cursos e comece sua jornada de desenvolvimento profissional.
          </p>
          <a href="https://portifolio.mqconsultoria.marketing/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
            <span>Ver todos os cursos</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CursosSection;
