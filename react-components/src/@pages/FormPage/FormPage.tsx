import React from 'react';
import { Form } from '@components/Form';
import { FormCards } from '@components/FormCards';
import styled from 'styled-components';
const StyledTitle = styled.h1`
  text-align: center;
`;

export const FormPage = (): JSX.Element => {
  return (
    <div data-testid="form-page">
      <StyledTitle>Form</StyledTitle>
      <Form />
      <FormCards />
    </div>
  );
};
