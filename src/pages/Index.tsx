
import { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuemSomos from '../components/QuemSomos';
import MissaoVisaoValores from '../components/MissaoVisaoValores';
import AreasAtuacao from '../components/AreasAtuacao';
import Diferenciais from '../components/Diferenciais';
import ConsultoriaPolitica from '../components/ConsultoriaPolitica';
import CursosSection from '../components/CursosSection';
import ServiceInfo from '../components/ServiceInfo';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
import SocialButtons from '../components/SocialButtons';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update title
    document.title = "Michele Queiroz | Mentoria e Consultoria Política";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SocialButtons />
      <main className="flex-grow">
        <Hero />
        <QuemSomos />
        <MissaoVisaoValores />
        <AreasAtuacao />
        <ConsultoriaPolitica />
        <Diferenciais />
        <ServiceInfo />
        <CursosSection />
        
        {/* Appointment Form Section */}
        <section id="contato" className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-mq-blue/10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-mq-blue" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-mq-blue mb-6">
                Agende uma Reunião
              </h2>
              <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vamos trabalhar juntos? Agende uma reunião e transforme suas ideias em resultados concretos.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto animate-fade-in">
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
