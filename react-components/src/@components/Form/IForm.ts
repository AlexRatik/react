import { IFormCard } from '@components/FormCard';

export interface IFormState {
  cards: IFormCard[];
  errors: IFormErrors;
  isButtonDisabled: boolean;
  isValid: boolean;
}
export interface IFormErrors {
  [key: string]: string;
}
