import { render, screen } from '@testing-library/react';
import { Navbar } from '@components/Navbar';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Navbar rendering', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });
  test('Should have class "header__navbar"', () => {
    expect(screen.getByTestId('header-navbar')).toBeInTheDocument();
  });
  test('Link should have "header__navbar_link" class', () => {
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    expect(aboutLink.className).toBe('header__navbar_link');
    expect(housesLink.className).toBe('header__navbar_link');
    expect(searchLink.className).toBe('header__navbar_link');
  });
  test('Add "active class to AboutLink"', () => {
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    userEvent.click(aboutLink);
    expect(aboutLink.className).toBe('header__navbar_link active');
    expect(housesLink.className).toBe('header__navbar_link');
    expect(searchLink.className).toBe('header__navbar_link');
  });
  test('Add "active class to HousesLink"', () => {
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    userEvent.click(housesLink);
    expect(aboutLink.className).toBe('header__navbar_link');
    expect(housesLink.className).toBe('header__navbar_link active');
    expect(searchLink.className).toBe('header__navbar_link');
  });
  test('Add "active class to SearchLink"', () => {
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    userEvent.click(searchLink);
    expect(aboutLink.className).toBe('header__navbar_link');
    expect(housesLink.className).toBe('header__navbar_link');
    expect(searchLink.className).toBe('header__navbar_link active');
  });
});

describe('Navbar for unknown URLs', () => {
  test('Shouldn\'t be "active" class at links', () => {
    render(
      <MemoryRouter initialEntries={['/react']}>
        <Navbar />
      </MemoryRouter>
    );
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    expect(aboutLink.className).toBe('header__navbar_link');
    expect(housesLink.className).toBe('header__navbar_link');
    expect(searchLink.className).toBe('header__navbar_link');
  });
});

describe('Navbar for "/about" URL', () => {
  test('Should be "active" class at AboutLink', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar />
      </MemoryRouter>
    );
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    expect(aboutLink.className).toBe('header__navbar_link active');
    expect(housesLink.className).toBe('header__navbar_link');
    expect(searchLink.className).toBe('header__navbar_link');
  });
});

describe('Navbar for "/houses" URL', () => {
  test('Should be "active" class at HousesLink', () => {
    render(
      <MemoryRouter initialEntries={['/houses']}>
        <Navbar />
      </MemoryRouter>
    );
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    expect(aboutLink.className).toBe('header__navbar_link');
    expect(housesLink.className).toBe('header__navbar_link active');
    expect(searchLink.className).toBe('header__navbar_link');
  });
});

describe('Navbar for "/api" URL', () => {
  test('Should be "active" class at SearchLink', () => {
    render(
      <MemoryRouter initialEntries={['/api']}>
        <Navbar />
      </MemoryRouter>
    );
    const [aboutLink, housesLink, searchLink]: HTMLElement[] = [
      screen.getByTestId('about-link'),
      screen.getByTestId('houses-link'),
      screen.getByTestId('search-link'),
    ];
    expect(aboutLink.className).toBe('header__navbar_link');
    expect(housesLink.className).toBe('header__navbar_link');
    expect(searchLink.className).toBe('header__navbar_link active');
  });
});
