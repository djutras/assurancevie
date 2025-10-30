
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { INSURER_LOGOS } from '../constants';
import type { FormData } from '../types';

interface ThankYouPageProps {
    formData: FormData;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ formData }) => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main className="flex-grow bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
            Merci, {formData.firstName}! On lance tes 5 demandes.
          </h1>
          <p className="mt-4 text-lg text-brand-gray-600">
            Ta demande a été envoyée avec succès. Voici ce qui va se passer maintenant:
          </p>
          
          <div className="mt-8 text-left bg-brand-gray-50 p-6 rounded-lg border border-brand-gray-200 space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm">1</div>
              <p className="ml-4 text-brand-gray-700"><strong>Validation:</strong> Un conseiller qualifié pourrait t'appeler rapidement pour confirmer quelques détails et s'assurer que les offres correspondent parfaitement à tes besoins.</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm">2</div>
              <p className="ml-4 text-brand-gray-700"><strong>Réception des offres:</strong> Tu devrais commencer à recevoir tes soumissions personnalisées d'ici <strong>24 à 48 heures ouvrables</strong>.</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm">3</div>
              <p className="ml-4 text-brand-gray-700"><strong>Aucune pression:</strong> Prends le temps de comparer les offres. Il n'y a absolument aucun engagement de ta part.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-brand-bg border-l-4 border-brand-blue p-6 text-left rounded-r-lg">
              <h3 className="font-bold text-brand-blue">Besoin de parler à quelqu'un tout de suite?</h3>
              <p className="text-brand-gray-700 mt-2">Pour un service accéléré ou si tu as des questions urgentes, n'hésite pas à nous appeler.</p>
              <a href="tel:+15141234567" className="mt-4 inline-block bg-brand-green hover:bg-brand-green-dark text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Appeler un conseiller maintenant
              </a>
          </div>
          
          <div className="mt-16">
            <h3 className="text-sm font-semibold text-brand-gray-500 uppercase tracking-wider">
              Nous collaborons avec les leaders de l'assurance au Québec:
            </h3>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-6">
                {INSURER_LOGOS.slice(0, 5).map((logo) => (
                    <img key={logo.name} className="h-8 grayscale opacity-60" src={logo.src} alt={logo.alt} />
                ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;