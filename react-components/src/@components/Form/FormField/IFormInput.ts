import { ChangeEvent } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IFormInput {
  name: string;
  id: string;
  testID: string;
  testIDForLabel?: string;
  testIDForError?: string;
  inputType: InputType;
  errorMSG?: FieldError;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  register: UseFormRegister<any>;
  defaultValue?: string;
}

type InputType = 'text' | 'date' | 'file' | 'number' | 'checkbox';
