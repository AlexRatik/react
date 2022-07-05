import { UseFormRegister } from 'react-hook-form';

export interface IFormCheckbox {
  name: string;
  id: string;
  testID: string;
  testIDForLabel: string;
  label: string;
  register: UseFormRegister<any>;
}
