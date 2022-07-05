import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: teal;
  width: 100%;
  height: 15vh;
  font-size: 32px;
`;

export const Header = (): JSX.Element => {
  return (
    <StyledHeader data-testid="header">
      <Navbar />
      <Outlet />
    </StyledHeader>
  );
};
