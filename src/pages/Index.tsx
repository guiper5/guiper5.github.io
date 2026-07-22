import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
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
  const location = useLocation();

  useSEO({
    title: 'PER5 — Projetos de Infraestrutura Civil | Campinas, SP',
    description: 'Projetos de infraestrutura civil em Campinas e todo o Brasil: terraplenagem, drenagem, pavimentação e urbanismo com ART e atendimento direto.',
    keywords: 'projeto de terraplenagem, projeto de drenagem pluvial, projeto de pavimentação, projeto urbanístico, engenharia civil Campinas, topografia Campinas, regularização de obras',
    canonicalPath: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'PER5 Projetos e Consultoria',
      url: 'https://per5.com.br',
      telephone: '+55-19-99150-8664',
      email: 'guilherme@per5.com.br',
      description: 'Facilitadora de engenharia civil. Projetos de infraestrutura civil com alto desempenho técnico: terraplenagem, drenagem, pavimentação e regularização.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Campinas',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      areaServed: 'BR',
      hasCredential: 'CREA-SP',
      serviceType: [
        'Projeto de Terraplenagem',
        'Projeto de Drenagem Pluvial',
        'Projeto de Pavimentação',
        'Projeto Urbanístico',
        'Topografia',
        'Regularização de Construções',
        'Patologias',
        'Estudo de Viabilidade',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-19-99150-8664',
        email: 'guilherme@per5.com.br',
        contactType: 'customer service',
      },
    },
  });

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
    return () => clearTimeout(timer);
  }, [location.hash]);

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
