
export enum HealthStatus {
  Excellent = 'Excellent',
  Bon = 'Bon',
  QuelquesConditions = 'Quelques conditions',
  ADiscuter = 'À discuter',
}

export enum CoverageAmount {
  CentMille = '100000',
  DeuxCentCinquanteMille = '250000',
  CinqCentMille = '500000',
  UnMillion = '1000000',
  Autre = 'Autre',
}

export enum InsuranceType {
  Terme10 = 'Terme 10 ans',
  Terme20 = 'Terme 20 ans',
  Terme30 = 'Terme 30 ans',
  VieEntiere = 'Vie entière',
  ADiscuter = 'À discuter',
}

export enum ContactTime {
    AM = 'Matin (9h-12h)',
    PM = 'Après-midi (13h-17h)',
    Soir = 'Soir (18h-20h)',
    Texto = 'Texto OK en tout temps'
}

export interface FormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  isSmoker: boolean;
  coverageAmount: CoverageAmount | '';
  insuranceType: InsuranceType | '';
  monthlyBudget: string;
  healthStatus: HealthStatus | '';
  phone: string;
  email: string;
  contactTime: ContactTime | '';
  consent: boolean;
}

export type FormErrors = {
  [K in keyof FormData]?: string;
};
