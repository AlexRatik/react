import { FieldError, UseFormRegister } from 'react-hook-form';
import { ChangeEvent } from 'react';

export interface IFormSelect {
  name: string;
  id: string;
  testID: string;
  testIDForLabel?: string;
  testIDForError?: string;
  errorMSG?: FieldError;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  register: UseFormRegister<any>;
  multiple?: boolean;
  options: string[];
}
