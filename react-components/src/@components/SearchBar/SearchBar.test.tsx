import { render } from '@testing-library/react';
import { SearchBar } from '@components/SearchBar';

describe('test search bar', () => {
  test('Have "searchBar" class', () => {
    const { getByTestId } = render(<SearchBar />);
    const input: HTMLElement = getByTestId('search-input');
    expect(input).toBeInTheDocument();
  });
});
