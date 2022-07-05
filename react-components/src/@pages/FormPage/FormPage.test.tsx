import { render } from '@testing-library/react';
import { FormPage } from '@pages/FormPage';

describe('Rendering Form Page', () => {
  test('Should contain Form element', () => {
    const { getByTestId } = render(<FormPage />);
    const formPage = getByTestId('form-page');
    const formElement = getByTestId('form');
    expect(formPage).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
  });
});
