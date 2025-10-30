
import React from 'react';
import { FAQ_DATA } from '../constants';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <details className="border-b border-brand-gray-200 py-4 group">
    <summary className="flex justify-between items-center font-semibold text-brand-gray-800 cursor-pointer hover:text-brand-blue">
      {question}
      <svg className="w-5 h-5 text-brand-gray-500 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <p className="mt-2 text-brand-gray-600 animate-fade-in">{answer}</p>
  </details>
);

const FaqSection: React.FC = () => {
    
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-12 md:py-16 bg-brand-gray-50">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-gray-800">Questions fréquentes</h2>
          <p className="mt-4 text-lg text-brand-gray-600">On répond à tes questions en toute transparence.</p>
        </div>
        <div className="space-y-2">
          {FAQ_DATA.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
