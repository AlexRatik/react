import { render } from '@testing-library/react';
import { FormCard, IFormCard } from '@components/FormCard';

const testCard: IFormCard = {
  card: {
    name: 'Jack',
    surname: 'Vorobey',
    number: '0192312312',
    birthday: '1843.04.07',
    country: 'Russia',
    sex: 'Male',
    pictureURL: 'blob:https://ntp.msn.com/c676c005-b758-4907-8d0e-0dc0651241e2',
    gifts: 'Pen',
  },
};

describe('FormCard render', () => {
  test('render', () => {
    const { getByTestId } = render(<FormCard card={testCard.card} />);
    const name = getByTestId('form__card_name');
    const surname = getByTestId('form__card_surname');
    const number = getByTestId('form__card_number');
    const birthday = getByTestId('form__card_birthday');
    const sex = getByTestId('form__card_sex');
    const country = getByTestId('form__card_country');
    const gifts = getByTestId('form__card_gifts');
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent(testCard.card.name);
    expect(surname).toBeInTheDocument();
    expect(surname).toHaveTextContent(testCard.card.surname);
    expect(number).toBeInTheDocument();
    expect(number).toHaveTextContent(testCard.card.number);
    expect(birthday).toBeInTheDocument();
    expect(birthday).toHaveTextContent(testCard.card.birthday);
    expect(sex).toBeInTheDocument();
    expect(sex).toHaveTextContent(testCard.card.sex);
    expect(country).toBeInTheDocument();
    expect(country).toHaveTextContent(testCard.card.country);
    expect(gifts).toBeInTheDocument();
    expect(gifts).toHaveTextContent(testCard.card.gifts);
  });
});
