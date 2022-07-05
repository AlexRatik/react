import React from 'react';
import { IFormSelect } from './IFormSelect';
import { StyledFormError } from './StyledFormError';

export const FormSelect = (props: IFormSelect) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id} data-testid={props.testIDForLabel}>
        {props.label}
      </label>
      <select
        id={props.id}
        data-testid={props.testID}
        className="form__control"
        multiple={props.multiple}
        {...props.register(props.name)}
        onChange={(e) => props.onSelect(e)}
      >
        {props.options.map((optionText: string) => (
          <option key={optionText}>{optionText}</option>
        ))}
      </select>
      {props.errorMSG?.message && (
        <StyledFormError data-testid={props.testIDForError}>
          {props.errorMSG.message}
        </StyledFormError>
      )}
    </div>
  );
};
