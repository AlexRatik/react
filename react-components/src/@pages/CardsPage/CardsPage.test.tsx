import { render, screen } from '@testing-library/react';
import { CardsPage } from '@pages/CardsPage';
import { getHouses } from '@data/data';
import { ICard } from '@interfaces/ICard';

const houses: ICard[] = getHouses();

describe('Rendering Cards Page', () => {
  beforeEach(() => {
    render(<CardsPage />);
  });
  test('Should render 6 house-cards', () => {
    expect(screen.getAllByTestId('house').length).toBe(houses.length);
  });
  test("Container should have class 'houses'", () => {
    expect(screen.getByTestId('houses')).toBeInTheDocument();
  });
});
