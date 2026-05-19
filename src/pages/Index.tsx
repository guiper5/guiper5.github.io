import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import PorQue from '@/components/PorQue';
import ParaQuem from '@/components/ParaQuem';
import Portfolio from '@/components/Portfolio';
import Processo from '@/components/Processo';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <StatsBar />
          <Services />
          <PorQue />
          <ParaQuem />
          <Portfolio />
          <Processo />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
