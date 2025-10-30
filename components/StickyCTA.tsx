
import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { CTA_VARIANTS } from '../constants';

interface StickyCTAProps {
  formSubmitButtonRef: React.RefObject<HTMLButtonElement>;
  onCTAClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ formSubmitButtonRef, onCTAClick }) => {
  const isFormButtonVisible = useOnScreen(formSubmitButtonRef, '-100px');
  const ctaText = CTA_VARIANTS[0]; // Using the primary CTA text

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 border-t border-brand-gray-200 transition-transform duration-300 ease-in-out md:hidden ${
        isFormButtonVisible ? 'translate-y-full' : 'translate-y-0'
      }`}
      style={{ zIndex: 50 }}
    >
      <button
        onClick={onCTAClick}
        className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green"
      >
        {ctaText}
      </button>
    </div>
  );
};

export default StickyCTA;
