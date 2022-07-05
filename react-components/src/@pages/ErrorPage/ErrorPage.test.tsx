import { render } from '@testing-library/react';
import { ErrorPage } from '@pages/ErrorPage';

describe('Rendering Error Page', () => {
  test('Should render title', () => {
    const { getByTestId } = render(<ErrorPage />);
    const errorPage = getByTestId('error-page');
    expect(errorPage).toHaveTextContent(/error/i);
    expect(errorPage).toHaveTextContent(/404/i);
    expect(errorPage).toHaveTextContent(/not found/i);
  });
});
