
import type { FormData } from '../types';

const WEBHOOK_URL = 'https://webhook.site/mock-url'; // Replace with your actual Make.com webhook URL

export const submitLead = (formData: FormData): Promise<{ success: boolean }> => {
  // In a real app, you would get UTM params from the URL
  const utm = {
    source: "google",
    medium: "cpc",
    campaign: "assurance-vie-quebec-hiver-2024",
    term: "assurance vie québec prix",
    content: "annonce-variante-b"
  };

  const payload = {
    lead_source: "Assurance-vie-QC",
    timestamp_iso: new Date().toISOString(),
    first_name: formData.firstName,
    last_name: formData.lastName,
    dob: formData.birthDate,
    smoker: formData.isSmoker,
    coverage_amount: formData.coverageAmount,
    product_type: formData.insuranceType,
    monthly_budget: formData.monthlyBudget,
    health_status: formData.healthStatus,
    phone: formData.phone,
    email: formData.email,
    best_contact_time: formData.contactTime,
    consent_share_to_five: formData.consent,
    utm: utm,
  };

  console.log('--- Simulation de soumission au Webhook ---');
  console.log('URL:', WEBHOOK_URL);
  console.log('Payload:', JSON.stringify(payload, null, 2));
  console.log('-------------------------------------------');

  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate a successful submission
      if (Math.random() > 0.1) { // 90% success rate for simulation
        // In a real app, you would use fetch:
        /*
        fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
        .then(response => {
          if (response.ok) {
            resolve({ success: true });
          } else {
            reject(new Error('La soumission a échoué.'));
          }
        })
        .catch(error => reject(error));
        */
        console.log('Réponse simulée du Webhook: 200 OK');
        resolve({ success: true });
      } else {
        // Simulate a failure
        console.error('Réponse simulée du Webhook: 500 Erreur Serveur');
        reject(new Error('Oups! Un problème est survenu. Essaie encore.'));
      }
    }, 1500);
  });
};
