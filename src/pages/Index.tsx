
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuemSomos from '../components/QuemSomos';
import MissaoVisaoValores from '../components/MissaoVisaoValores';
import AreasAtuacao from '../components/AreasAtuacao';
import Diferenciais from '../components/Diferenciais';
import ConsultoriaPolitica from '../components/ConsultoriaPolitica';
import CursosSection from '../components/CursosSection';
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
        <CursosSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
