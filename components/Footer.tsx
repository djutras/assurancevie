
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-brand-gray-300 text-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <p>
            En soumettant ce formulaire, tu consens à ce que nous partagions tes informations avec jusqu'à 5 partenaires assureurs-vie autorisés au Québec afin qu'ils puissent te contacter par téléphone, texto ou courriel pour te fournir des soumissions. Tu peux retirer ton consentement à tout moment.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a href="#privacy" className="hover:text-white underline">Politique de confidentialité</a>
            <span>|</span>
            <a href="#terms" className="hover:text-white underline">Termes et conditions</a>
          </div>
          <p className="text-xs text-brand-gray-400">
            Ce site est un service de comparaison indépendant et n'est pas un assureur. Les soumissions sont fournies par des conseillers financiers et agents en assurance de personnes autorisés par l'AMF.
          </p>
          <p className="text-xs text-brand-gray-400">
            © {currentYear} Assurance-Vie Express Québec. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
