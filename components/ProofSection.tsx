
import React from 'react';
import { INSURER_LOGOS } from '../constants';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ProofSection: React.FC = () => {
  return (
    <section className="bg-brand-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-semibold text-brand-gray-500 uppercase tracking-wider">
          On magasine auprès des meilleurs assureurs pour toi
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 items-center">
          {INSURER_LOGOS.map((logo) => (
            <div key={logo.name} className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img className="h-10 object-contain" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border border-brand-gray-200">
            <div className="flex justify-center text-brand-yellow mb-4">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
            </div>
            <blockquote className="text-brand-gray-800 text-lg italic">
              "Processus super simple et rapide. J'ai économisé 35$/mois sur mon assurance-vie en comparant. J'aurais dû le faire avant! Merci!"
            </blockquote>
            <cite className="mt-4 block font-semibold text-brand-gray-600 not-italic">
              - Julie D., Montréal
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;