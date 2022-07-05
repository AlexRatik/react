import { Header } from '@components/Header';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header rendering', () => {
  test('Header class name is header', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(getByTestId('header')).toBeInTheDocument();
  });
});
