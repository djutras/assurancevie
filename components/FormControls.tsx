
import React from 'react';

// Common classes for form inputs
const commonInputClasses = "block w-full text-sm rounded-md border-brand-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue";
const errorInputClasses = "border-red-500 focus:border-red-500 focus:ring-red-500";
const labelClasses = "block text-xs font-medium text-brand-gray-600";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, name, error, required, ...props }) => (
  <div>
    <label htmlFor={name} className={labelClasses}>{label} {required && <span className="text-red-500">*</span>}</label>
    <input
      id={name}
      name={name}
      className={`${commonInputClasses} mt-1 ${error ? errorInputClasses : ''}`}
      {...props}
    />
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  error?: string;
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ label, name, error, options, required, ...props }) => (
  <div>
    <label htmlFor={name} className={labelClasses}>{label} {required && <span className="text-red-500">*</span>}</label>
    <select
      id={name}
      name={name}
      className={`${commonInputClasses} mt-1 ${error ? errorInputClasses : ''}`}
      {...props}
    >
      <option value="">Sélectionner...</option>
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);

interface ToggleProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  optionLabels?: { on: string; off: string };
}

export const Toggle: React.FC<ToggleProps> = ({ label, name, checked, onChange, optionLabels = { on: 'Oui', off: 'Non' } }) => (
    <div>
        <span className={labelClasses}>{label}</span>
        <div className="mt-1 flex items-center space-x-2">
            <button
                type="button"
                onClick={() => onChange(false)}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-l-md transition-colors ${!checked ? 'bg-brand-blue text-white' : 'bg-white text-brand-gray-700 border border-brand-gray-300'}`}
            >
                {optionLabels.off}
            </button>
            <button
                type="button"
                onClick={() => onChange(true)}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-r-md transition-colors ${checked ? 'bg-brand-blue text-white' : 'bg-white text-brand-gray-700 border border-brand-gray-300'}`}
            >
                {optionLabels.on}
            </button>
        </div>
    </div>
);


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, children, error, ...props }) => (
  <div className="relative flex items-start">
    <div className="flex items-center h-5">
      <input
        id={name}
        name={name}
        type="checkbox"
        className={`h-4 w-4 text-brand-blue border-brand-gray-300 rounded focus:ring-brand-blue ${error ? 'border-red-500' : ''}`}
        {...props}
      />
    </div>
    <div className="ml-2 text-xs">
      <label htmlFor={name} className="font-medium text-brand-gray-700">{children}</label>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  </div>
);
