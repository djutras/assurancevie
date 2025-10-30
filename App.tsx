
import React, { useState, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';
import type { FormData } from './types';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSuccess = useCallback((data: FormData) => {
    // In a real app, you would fire a tracking event here
    // analytics.track('thankyou_view');
    console.log('Tracking Event: thankyou_view');
    setFormData(data);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg font-sans antialiased">
      {isSubmitted && formData ? (
        <ThankYouPage formData={formData} />
      ) : (
        <LandingPage onFormSuccess={handleFormSuccess} />
      )}
    </div>
  );
};

export default App;