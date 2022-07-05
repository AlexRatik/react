import mockSuccessData from '@utils/mockData';
import { APICards } from '@components/APICards';
import { render } from '@testing-library/react';
import { IRickAndMortyResult } from '@interfaces/IRickAndMorty';
import { MemoryRouter } from 'react-router-dom';

describe('APICards rendering', () => {
  test('Cards rendering', () => {
    const { getAllByTestId } = render(
      <MemoryRouter initialEntries={['/api']}>
        <APICards cardsData={mockSuccessData.results} />
      </MemoryRouter>
    );
    expect(getAllByTestId('APICard').length).toBe(20);
  });
  test('Error rendering', () => {
    const { getByTestId, queryAllByTestId } = render(
      <APICards cardsData={{} as IRickAndMortyResult[]} />
    );
    expect(queryAllByTestId('APICard').length).toBe(0);
    expect(getByTestId('error-page')).toBeInTheDocument();
  });
});
