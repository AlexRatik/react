import { render } from '@testing-library/react';
import { AboutUsPage } from '@pages/AboutUsPage';

describe('Rendering About Us Page', () => {
  test('Should render title', () => {
    const { getByTestId } = render(<AboutUsPage />);
    expect(getByTestId('about-page')).toHaveTextContent(/about us/i);
  });
});
