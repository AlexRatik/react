import { render, screen } from '@testing-library/react';
import { Card } from '@components/Card';
import { ICard } from '@interfaces/ICard';

const props: ICard = {
  id: '1',
  name: 'Z10 – ТИПОВОЙ ПРОЕКТ КОТТЕДЖА',
  photoURL: 'https://archidom.by/wp-content/uploads/2014/12/z10_21.jpg',
  price: '1 230',
  square: '162,0',
  height: '6,78',
  costOfConstruction: '47000',
};

describe('Card rendering', () => {
  beforeEach(() => {
    render(<Card house={props} />);
  });

  test('House in the document', () => {
    const house = screen.getByTestId('house');
    expect(house).toBeInTheDocument();
  });

  test("House's photo", () => {
    const photo = screen.getByTestId('house-photo');
    expect(photo.getAttribute('src')).toBe(
      'https://archidom.by/wp-content/uploads/2014/12/z10_21.jpg'
    );
    expect(photo.className).toBe('house__img');
  });

  test("House's name", () => {
    const name = screen.getByTestId('house-name');
    expect(name).toHaveTextContent('Z10 – ТИПОВОЙ ПРОЕКТ КОТТЕДЖА');
    expect(name.className).toBe('house__name');
  });

  test("House's price", () => {
    const price = screen.getByTestId('house-price');
    expect(price).toHaveTextContent('1 230');
    expect(price.className).toBe('house__price');
  });

  test("House's square", () => {
    const square = screen.getByTestId('house-square');
    expect(square).toHaveTextContent('162,0');
    expect(square.className).toBe('house__description_square');
  });

  test("House's height", () => {
    const height = screen.getByTestId('house-height');
    expect(height).toHaveTextContent('6,78');
    expect(height.className).toBe('house__description_height');
  });

  test("House's cost of construction", () => {
    const costOfConstruction = screen.getByTestId('house-costOfConstruction');
    expect(costOfConstruction).toHaveTextContent('47000');
    expect(costOfConstruction.className).toBe('house__description_cost');
  });
});
