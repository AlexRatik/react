import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRouter } from '@routes/AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('AppRouter testing', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    );
  });
  test('about link', () => {
    const aboutLink = screen.getByTestId('about-link');
    expect(aboutLink).toHaveTextContent(/about us/i);
    expect(screen.queryByTestId('about-page')).toBeNull();
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  test('houses link', () => {
    const housesLink = screen.getByTestId('houses-link');
    expect(housesLink).toHaveTextContent(/houses/i);
    expect(screen.queryByTestId('houses-page')).toBeNull();
    userEvent.click(housesLink);
    expect(screen.getByTestId('houses-page')).toBeInTheDocument();
  });
  test('search link', () => {
    const searchLink = screen.getByTestId('search-link');
    expect(searchLink).toHaveTextContent(/search/i);
    expect(screen.queryByTestId('search-page')).toBeNull();
    userEvent.click(searchLink);
    expect(screen.getByTestId('search-page')).toBeInTheDocument();
  });
});

describe('App router error page', () => {
  test('error page case 1', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/asd']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(getByTestId('error-page')).toBeInTheDocument();
  });
  test('error page case 2', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/home']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(getByTestId('error-page')).toBeInTheDocument();
  });
  test('error page case 3', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/housess']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(getByTestId('error-page')).toBeInTheDocument();
  });
});
