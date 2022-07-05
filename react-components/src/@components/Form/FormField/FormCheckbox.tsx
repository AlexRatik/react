import React from 'react';
import { IFormCheckbox } from './IFormCheckbox';
import styled from 'styled-components';

const StyledFormCheckboxGroup = styled.div`
  margin: 0;
  flex-basis: 50%;
  label {
    margin-left: 10px;
  }
  input {
    width: 15px;
    height: 15px;
  }
  #form__switcher {
    display: none;
  }
  #form__switcher + label {
    position: relative;
    padding: 5px 0 0 50px;
    line-height: 2em;
    margin-left: 20px;
  }
  #form__switcher + label:before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 40px;
    height: 24px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  #form__switcher + label:after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  #form__switcher + label:hover:after {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  #form__switcher:checked + label:after {
    margin-left: 16px;
  }
  #form__switcher:checked + label:before {
    background: teal;
  }
`;

export const FormCheckbox = (props: IFormCheckbox) => {
  return (
    <StyledFormCheckboxGroup>
      <input
        id={props.id}
        data-testid={props.testID}
        type="checkbox"
        {...props.register(props.name)}
        className="form__control"
      />
      <label htmlFor={props.id} data-testid={props.testIDForLabel}>
        {props.label}
      </label>
    </StyledFormCheckboxGroup>
  );
};
