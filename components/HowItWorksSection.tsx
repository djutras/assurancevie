
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string; icon: React.ReactNode }> = ({ number, title, description, icon }) => (
  <div className="text-center">
    <div className="flex items-center justify-center h-16 w-16 mx-auto bg-brand-blue rounded-full text-white mb-4">
        {icon}
    </div>
    <h3 className="text-lg font-bold text-brand-blue">{number}. {title}</h3>
    <p className="mt-2 text-brand-gray-600">{description}</p>
  </div>
);

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-gray-800">Comment ça marche?</h2>
          <p className="mt-4 text-lg text-brand-gray-600 max-w-2xl mx-auto">C'est simple comme bonjour. En 3 étapes faciles, tu auras le meilleur prix.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Step 
                number="1" 
                title="Remplis le formulaire" 
                description="Ça prend 30 secondes. Dis-nous juste ce dont tu as besoin."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
            />
            <Step 
                number="2" 
                title="On compare pour toi" 
                description="On envoie ta demande sécurisée à jusqu'à 5 assureurs de confiance au Québec."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
            />
            <Step 
                number="3" 
                title="Reçois tes offres" 
                description="Un conseiller te contacte avec les meilleures soumissions, sans pression."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM9 10H7v10h2V10zm4 0h-2v10h2V10zm4 0h-2v10h2V10z" /></svg>}
            />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
