
import React, { useRef } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ProofSection from './ProofSection';
import HowItWorksSection from './HowItWorksSection';
import FaqSection from './FaqSection';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import type { FormData } from '../types';

interface LandingPageProps {
  onFormSuccess: (data: FormData) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onFormSuccess }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const formSubmitButtonRef = useRef<HTMLButtonElement>(null);

  const handleStickyCTAClick = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection ref={formRef} formSubmitButtonRef={formSubmitButtonRef} onFormSuccess={onFormSuccess} />
        <ProofSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyCTA formSubmitButtonRef={formSubmitButtonRef} onCTAClick={handleStickyCTAClick} />
    </>
  );
};

export default LandingPage;
