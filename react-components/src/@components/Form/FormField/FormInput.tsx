import React, { ChangeEvent } from 'react';
import { IFormInput } from './IFormInput';
import { StyledFormError } from './StyledFormError';
import styled from 'styled-components';

const StyledFormInputGroup = styled.div`
  input[type='text'],
  input[type='date'] {
    display: block;
    width: 100%;
    height: 2.5em;
    outline: none;
    border: 1px solid teal;
    border-radius: 20px;
    padding: 10px;
  }
  input[type='date'] {
    width: 30%;
    display: inline-block;
    margin-left: 20%;
  }
`;

export const FormInput = (props: IFormInput) => {
  return (
    <StyledFormInputGroup className="form-group">
      {props.label && props.inputType !== 'checkbox' && (
        <label htmlFor={props.id} data-testid={props.testIDForLabel}>
          {props.label}
        </label>
      )}
      <input
        id={props.id}
        data-testid={props.testID}
        type={props.inputType}
        {...props.register(props.name)}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props.onChange ? props.onChange(event) : () => {}
        }
        placeholder={props.placeholder || ''}
        className="form__control"
        defaultValue={props.defaultValue ? props.defaultValue : ''}
      />
      {props.errorMSG?.message && (
        <StyledFormError data-testid={props.testIDForError}>
          {props.errorMSG.message}
        </StyledFormError>
      )}
    </StyledFormInputGroup>
  );
};
