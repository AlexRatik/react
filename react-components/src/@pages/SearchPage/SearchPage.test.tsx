import { render } from '@testing-library/react';
import { SearchPage } from '@pages/SearchPage';

describe('Rendering Search Page', () => {
  test('Should render page', () => {
    const { getByTestId } = render(<SearchPage />);
    expect(getByTestId('search-page')).toBeInTheDocument();
    expect(getByTestId('loader')).toBeInTheDocument();
  });
});
