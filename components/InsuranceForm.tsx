
import React, { useState, useCallback } from 'react';
import { Input, Select, Toggle, Checkbox } from './FormControls';
import { submitLead } from '../services/apiService';
import type { FormData, FormErrors } from '../types';
import { HealthStatus, CoverageAmount, InsuranceType, ContactTime } from '../types';

interface InsuranceFormProps {
  onFormSuccess: (data: FormData) => void;
  formSubmitButtonRef: React.RefObject<HTMLButtonElement>;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  isSmoker: false,
  coverageAmount: '',
  insuranceType: '',
  monthlyBudget: '',
  healthStatus: '',
  phone: '',
  email: '',
  contactTime: '',
  consent: false,
};

const InsuranceForm = React.forwardRef<HTMLFormElement, InsuranceFormProps>(({ onFormSuccess, formSubmitButtonRef }, ref) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const validateField = useCallback(<K extends keyof FormData,>(name: K, value: FormData[K]): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value ? '' : 'Ce champ est requis.';
      case 'birthDate':
        if (!value) return 'Date de naissance requise.';
        const birthYear = new Date(value as string).getFullYear();
        const currentYear = new Date().getFullYear();
        if (currentYear - birthYear < 18) return 'Tu dois avoir 18 ans.';
        if (currentYear - birthYear > 80) return 'Âge maximum est 80 ans.';
        return '';
      case 'phone':
        if (!value) return 'Téléphone requis.';
        return /^\(?([0-9]{3})\)?[ -.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(value as string) ? '' : 'Téléphone invalide.';
      case 'email':
        if (!value) return 'Courriel requis.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string) ? '' : 'Courriel invalide.';
      case 'coverageAmount':
      case 'insuranceType':
      case 'healthStatus':
      case 'contactTime':
        return value ? '' : 'Fais une sélection.';
      case 'consent':
        return value ? '' : 'Consentement requis.';
      default:
        return '';
    }
  }, []);

  const handleChange = useCallback(<K extends keyof FormData,>(name: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tracking Event: form_submit_attempt');
    
    const newErrors: FormErrors = {};
    let hasError = false;
    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      console.log('Tracking Event: validation_error', { errors: newErrors });
      return;
    }

    setIsLoading(true);
    setSubmissionError(null);

    try {
      await submitLead(formData);
      console.log('Tracking Event: form_submit_success');
      onFormSuccess(formData);
    } catch (error) {
      console.error('Tracking Event: form_submit_error', { error: (error as Error).message });
      setSubmissionError((error as Error).message || 'Une erreur est survenue.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={ref} onSubmit={handleSubmit} noValidate className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input name="firstName" label="Prénom" value={formData.firstName} onChange={e => handleChange('firstName', e.target.value)} error={errors.firstName} placeholder="Ton prénom" required/>
            <Input name="lastName" label="Nom" value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} error={errors.lastName} placeholder="Ton nom" required/>
        </div>
        
        <Input name="birthDate" label="Date de naissance" type="date" value={formData.birthDate} onChange={e => handleChange('birthDate', e.target.value)} error={errors.birthDate} required/>

        <Toggle label="Es-tu fumeur?" name="isSmoker" checked={formData.isSmoker} onChange={checked => handleChange('isSmoker', checked)} optionLabels={{on: 'Fumeur', off: 'Non-fumeur'}}/>

        <Select name="coverageAmount" label="Montant de couverture désiré" value={formData.coverageAmount} onChange={e => handleChange('coverageAmount', e.target.value as CoverageAmount)} error={errors.coverageAmount} options={Object.values(CoverageAmount)} required/>
        
        <Select name="insuranceType" label="Type d'assurance" value={formData.insuranceType} onChange={e => handleChange('insuranceType', e.target.value as InsuranceType)} error={errors.insuranceType} options={Object.values(InsuranceType)} required/>
        
        <Select name="healthStatus" label="État de santé général" value={formData.healthStatus} onChange={e => handleChange('healthStatus', e.target.value as HealthStatus)} error={errors.healthStatus} options={Object.values(HealthStatus)} required/>

        <Input name="phone" label="Téléphone" type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} error={errors.phone} placeholder="(514) 123-4567" required/>
        
        <Input name="email" label="Courriel" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} error={errors.email} placeholder="ton.courriel@email.com" required/>

        <Select name="contactTime" label="Meilleur moment pour te joindre" value={formData.contactTime} onChange={e => handleChange('contactTime', e.target.value as ContactTime)} error={errors.contactTime} options={Object.values(ContactTime)} required/>
        
        <Checkbox name="consent" checked={formData.consent} onChange={e => handleChange('consent', e.target.checked)} error={errors.consent}>
            J'autorise l'envoi de ma demande à jusqu'à 5 assureurs-vie pour obtenir des soumissions et consens à être contacté(e).
        </Checkbox>
        
        {submissionError && <p className="text-red-600 text-sm text-center">{submissionError}</p>}
        
        <button
            ref={formSubmitButtonRef}
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green disabled:bg-brand-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
        >
            {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : 'Obtenir mes 5 offres'}
        </button>
        <p className="text-xs text-center text-brand-gray-500 mt-2">Réponse typique sous 24-48 h.</p>
    </form>
  );
});

InsuranceForm.displayName = 'InsuranceForm';
export default InsuranceForm;
