import React from 'react';
import styled from 'styled-components';

const StyledAboutUsPage = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const AboutUsPage = (): JSX.Element => {
  return (
    <StyledAboutUsPage data-testid="about-page">
      <h1>About Us</h1>
    </StyledAboutUsPage>
  );
};
