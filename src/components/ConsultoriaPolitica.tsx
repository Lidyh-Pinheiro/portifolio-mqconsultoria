
import { Award, Check, TrendingUp, Users as UsersIcon, MessageCircle as MessageCircleIcon, FileText, BriefcaseBusiness } from 'lucide-react';

const ConsultoriaPolitica = () => {
  return (
    <section id="consultoria-politica" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-mq-blue" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mq-blue mb-6">
            Assessoria Política
          </h2>
          <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Oferecemos consultoria especializada para candidatos e profissionais que atuam na área política, 
            desenvolvendo estratégias eficientes para fortalecer a imagem e a comunicação.
          </p>
        </div>

        {/* Elaboração de Projetos */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-24 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-mq-blue flex items-center justify-center">
                <UsersIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-mq-light-blue mb-4">Elaboração de Projetos Políticos e Sociais</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-semibold text-mq-blue mb-3">Captação de Recursos:</h4>
                  <p className="text-gray-700 mb-4">
                    Desenvolvimento de propostas para emendas parlamentares, leis de incentivo e fundos públicos.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-mq-blue mb-3">Projetos de Impacto Social:</h4>
                  <p className="text-gray-700 mb-4">
                    Planejamento de iniciativas em saúde, educação e sustentabilidade.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-mq-blue mb-3">Gestão Governamental:</h4>
                  <p className="text-gray-700 mb-4">
                    Criação de planos de governo baseados em diagnósticos regionais e demandas da população.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planejamento Estratégico */}
        <div className="mb-16 bg-mq-blue rounded-xl shadow-lg p-8 text-white animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-auto">
              <h3 className="text-3xl font-bold mb-6">Planejamento Estratégico de Mobilização</h3>
              
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4">Objetivo Central</h4>
                <div className="border-l-4 border-mq-light-blue pl-4 py-2">
                  <p className="text-white/90">
                    Construir uma conexão genuína entre o candidato e os eleitores, promovendo engajamento ativo e fortalecendo a campanha em nível local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Etapas do Planejamento */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-mq-blue mb-8 text-center">Etapas do Planejamento</h3>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-mq-blue flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                01
              </div>
              <div>
                <h4 className="text-xl font-semibold text-mq-light-blue mb-2">Diagnóstico e Mapeamento Inicial:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Identificar bases eleitorais estratégicas.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Mapear lideranças comunitárias e formadores de opinião.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Levantar demandas e expectativas populares por meio de pesquisas e reuniões.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-mq-blue flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                02
              </div>
              <div>
                <h4 className="text-xl font-semibold text-mq-light-blue mb-2">Mobilização Presencial:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Realização de eventos comunitários, caminhadas, porta a porta e carreatas.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Criação de comitês regionais para engajamento contínuo.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Ações simbólicas que impactem positivamente a comunidade.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-mq-blue flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                03
              </div>
              <div>
                <h4 className="text-xl font-semibold text-mq-light-blue mb-2">Mobilização Digital:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Campanhas em redes sociais para ampliar a mensagem da campanha.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Uso de grupos no WhatsApp e Telegram para comunicação rápida e mobilização.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Lançamento de lives e interações online com eleitores.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-mq-blue flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                04
              </div>
              <div>
                <h4 className="text-xl font-semibold text-mq-light-blue mb-2">Treinamento da Equipe de Mobilização:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Capacitação sobre técnicas de engajamento, gestão de conflitos e ferramentas digitais.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-mq-blue flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                05
              </div>
              <div>
                <h4 className="text-xl font-semibold text-mq-light-blue mb-2">Monitoramento e Ajustes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Avaliação constante dos resultados e ajustes estratégicos.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-2 text-mq-light-blue">
                      <Check size={16} />
                    </div>
                    <span>Reuniões periódicas para manter o alinhamento e a motivação da equipe.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <UsersIcon className="w-8 h-8 text-mq-light-blue" />
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
              <MessageCircleIcon className="w-8 h-8 text-mq-orange" />
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

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-mq-blue">Vamos trabalhar juntos?</h3>
          <p className="text-gray-700 mt-4 mb-8">
            Entre em contato conosco para agendar uma consultoria e transformar seus objetivos políticos em realidade.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/5511952156866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <MessageCircleIcon className="mr-2" />
              Agende uma consultoria
            </a>
            <a 
              href="mailto:contato@mqconsultoria.marketing"
              className="btn-secondary inline-flex items-center"
            >
              <FileText className="mr-2" />
              contato@mqconsultoria.marketing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaPolitica;
