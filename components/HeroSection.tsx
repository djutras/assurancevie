
import React from 'react';
import InsuranceForm from './InsuranceForm';
import type { FormData } from '../types';

interface HeroSectionProps {
  onFormSuccess: (data: FormData) => void;
  formSubmitButtonRef: React.RefObject<HTMLButtonElement>;
}

const CheckIcon = () => (
    <svg className="w-5 h-5 text-brand-green mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const HeroSection = React.forwardRef<HTMLFormElement, HeroSectionProps>(({ onFormSuccess, formSubmitButtonRef }, ref) => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue leading-tight">
              5 assureurs. 1 meilleur prix pour ton assurance-vie.
            </h1>
            <p className="mt-4 text-lg text-brand-gray-600">
              On compare pour toi. Tu économises du temps et de l'argent.
            </p>
            <ul className="mt-6 space-y-3 text-left inline-block">
              <li className="flex items-center">
                <CheckIcon />
                <span>Compare jusqu'à <strong>5 assureurs-vie</strong> en une seule demande.</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Obtiens le <strong>meilleur prix</strong> du marché québécois.</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span>Gratuit, rapide et <strong>sans engagement</strong>.</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border border-brand-gray-200">
            <InsuranceForm ref={ref} onFormSuccess={onFormSuccess} formSubmitButtonRef={formSubmitButtonRef} />
          </div>
          
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
