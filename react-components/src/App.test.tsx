import { render, screen } from '@testing-library/react';
import { App } from 'App';
import { MemoryRouter } from 'react-router-dom';

describe('App Component', () =>
  it('render App Component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/houses/i)).toBeInTheDocument();
    expect(screen.getByText(/search bar/i)).toBeInTheDocument();
  }));
