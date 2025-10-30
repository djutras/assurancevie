
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" role="img" aria-label="Shield Icon">🛡️</span>
            <span className="text-xl font-bold text-brand-blue">Assurance-Vie Express</span>
          </div>
          <div className="flex items-center">
            <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center">
              <span className="mr-1.5">⚜️</span>
              Québec
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;