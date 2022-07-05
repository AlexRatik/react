import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { navLinks } from '@utils/NavLinks';
import styled from 'styled-components';

export const Navbar = (): JSX.Element => {
  const isApiRoute = useMatch('api');
  const isAboutRoute = useMatch('about');
  const isHousesRoute = useMatch('houses');
  const isFormRoute = useMatch('form');
  const isOneOfMainLinks = Boolean(isApiRoute || isAboutRoute || isHousesRoute || isFormRoute);
  return (
    <StyledNavbar data-testid="header-navbar">
      {navLinks.map((link) => (
        <NavLink
          data-testid={link.testID}
          className={({ isActive }) =>
            isActive && isOneOfMainLinks ? 'header__navbar_link active' : 'header__navbar_link'
          }
          key={link.testID}
          to={link.to}
        >
          {link.text}
        </NavLink>
      ))}
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 100%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__navbar_link {
    text-decoration: none;
    color: whitesmoke;
    transition: all 0.3s ease;
    padding: 5px;

    &:hover {
      opacity: 0.7;
      color: #ffffff;
    }

    &.active {
      border: 1px solid indigo;
      border-radius: 10px;
      box-shadow: 3px 3px 3px indigo;
    }
  }
`;
