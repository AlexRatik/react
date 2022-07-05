import { getByTestId, render, screen, waitFor } from '@testing-library/react';
import { Form } from '@components/Form';
import userEvent from '@testing-library/user-event';
import { INVALIDERRMSG } from './EForm';

describe('Form', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('Form render', () => {
    const form = screen.queryByTestId('form');
    expect(form).toBeInTheDocument();
  });
  it('Name input render', () => {
    const formName = screen.queryByTestId('form__name');
    expect(formName).toBeInTheDocument();
    expect(formName).toHaveAttribute('placeholder', 'Your name...');
    expect(formName).toHaveAttribute('type', 'text');
  });
  it('Surname input render', () => {
    const formSurname = screen.queryByTestId('form__surname');
    expect(formSurname).toBeInTheDocument();
    expect(formSurname).toHaveAttribute('placeholder', 'Your surname...');
    expect(formSurname).toHaveAttribute('type', 'text');
  });
  it('Number input render', () => {
    const formNumber = screen.queryByTestId('form__number');
    expect(formNumber).toBeInTheDocument();
    expect(formNumber).toHaveAttribute('placeholder', 'Your phone number...');
    expect(formNumber).toHaveAttribute('type', 'text');
  });
  it('Birthday input render', () => {
    const formBirthday = screen.queryByTestId('form__birthday');
    expect(formBirthday).toBeInTheDocument();
    expect(formBirthday).toHaveAttribute('type', 'date');
    const formBirthdayLabel = screen.getByTestId('form__birthday_label');
    expect(formBirthdayLabel).toHaveTextContent('Your birthday:');
  });
  it('Switcher input render', () => {
    const formSwitcher = screen.queryByTestId('form__switcher');
    expect(formSwitcher).toBeInTheDocument();
    expect(formSwitcher).toHaveAttribute('type', 'checkbox');
    const formSwitcherLabel = screen.getByTestId('form__switcher_label');
    expect(formSwitcherLabel).toHaveTextContent('Male / Female');
  });
  it('Picture input render', () => {
    const formPicture = screen.queryByTestId('form__picture');
    expect(formPicture).toBeInTheDocument();
    expect(formPicture).toHaveAttribute('type', 'file');
    const formPictureLabel = screen.getByTestId('form__picture_label');
    expect(formPictureLabel).toHaveTextContent(/photo/i);
  });
  it('Country input render', () => {
    const formCountry = screen.queryByTestId('form__country');
    expect(formCountry).toBeInTheDocument();
    const formCountryLabel = screen.getByTestId('form__country_label');
    expect(formCountryLabel).toHaveTextContent(/country/i);
  });
  it('Gift1 input render', () => {
    const formGift1 = screen.queryByTestId('form__gift_1');
    expect(formGift1).toBeInTheDocument();
    expect(formGift1).toHaveAttribute('type', 'checkbox');
    const formGift1Label = screen.getByTestId('form__gift1_label');
    expect(formGift1Label).toHaveTextContent(/book/i);
  });
  it('Gift2 input render', () => {
    const formGift2 = screen.queryByTestId('form__gift_2');
    expect(formGift2).toBeInTheDocument();
    expect(formGift2).toHaveAttribute('type', 'checkbox');
    const formGiftLabel = screen.getByTestId('form__gift2_label');
    expect(formGiftLabel).toHaveTextContent(/pen/i);
  });
  it('Gift3 input render', () => {
    const formGift3 = screen.queryByTestId('form__gift_3');
    expect(formGift3).toBeInTheDocument();
    expect(formGift3).toHaveAttribute('type', 'checkbox');
    const formGiftLabel = screen.getByTestId('form__gift3_label');
    expect(formGiftLabel).toHaveTextContent(/notebook/i);
  });
  it('Gift4 input render', () => {
    const formGift4 = screen.queryByTestId('form__gift_4');
    expect(formGift4).toBeInTheDocument();
    expect(formGift4).toHaveAttribute('type', 'checkbox');
    const formGiftLabel = screen.getByTestId('form__gift4_label');
    expect(formGiftLabel).toHaveTextContent(/daily planner/i);
  });
  it('Gift5 input render', () => {
    const formGift5 = screen.queryByTestId('form__gift_5');
    expect(formGift5).toBeInTheDocument();
    expect(formGift5).toHaveAttribute('type', 'checkbox');
    const formGiftLabel = screen.getByTestId('form__gift5_label');
    expect(formGiftLabel).toHaveTextContent(/pencil/i);
  });
  it('Submit btn render', () => {
    const submitBtn = screen.getByTestId('form__submit-btn');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute('disabled');
    expect(submitBtn).toHaveAttribute('type', 'submit');
    expect(submitBtn).toHaveTextContent(/submit/i);
  });
});

describe('Name input', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('check error msg', async () => {
    const input = screen.getByTestId('form__name');
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.type(input, 'Jack23');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.getByTestId('form__name_error');
      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent(INVALIDERRMSG.NAME);
      userEvent.type(input, 'Jac1');
      expect(screen.queryByTestId('form__name_error')).toBeNull();
    });
  });
  it('check without error msg', async () => {
    const input = screen.getByTestId('form__name');
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.type(input, 'Jack');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.queryByTestId('form__name_error');
      expect(error).toBeNull();
    });
  });
});
describe('Surname input', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('check error msg', async () => {
    const input = screen.getByTestId('form__surname');
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.type(input, 'Rozenberg23');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.getByTestId('form__surname_error');
      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent(INVALIDERRMSG.SURNAME);
      userEvent.type(input, 'Rozenberg2');
      expect(screen.queryByTestId('form__surname_error')).toBeNull();
    });
  });
  it('check without error msg', async () => {
    const input = screen.getByTestId('form__surname');
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.type(input, 'Rozenberg');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.queryByTestId('form__surname_error');
      expect(error).toBeNull();
    });
  });
});
describe('Number input', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('check error msg', async () => {
    const input = screen.getByTestId('form__number');
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.type(input, 'Rozenberg23');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.getByTestId('form__number_error');
      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent(INVALIDERRMSG.NUMBER);
      userEvent.type(input, 'Jack');
      expect(screen.queryByTestId('form__number_error')).toBeNull();
    });
  });
  it('check without error msg', async () => {
    const input = screen.getByTestId('form__number');
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.type(input, '+375291112223');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.queryByTestId('form__number_error');
      expect(error).toBeNull();
    });
  });
});
describe('Birthday input', () => {
  beforeEach(() => {
    render(<Form />);
    const inputName = screen.getByTestId('form__name');
    userEvent.type(inputName, 'Jack');
  });
  it('check error msg', async () => {
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.getByTestId('form__birthday_error');
      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent(INVALIDERRMSG.DATE);
    });
  });
  it('check without error msg', async () => {
    const input = screen.getByTestId('form__birthday') as HTMLInputElement;
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.type(input, '1999-10-02');
    expect(input.value).toBe('1999-10-02');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.queryByTestId('form__birthday_error');
      expect(error).toBeNull();
    });
  });
});
describe('Country input', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('check error msg', async () => {
    const inputName = screen.getByTestId('form__name');
    userEvent.type(inputName, 'Jack');
    const input = screen.getByTestId('form__country');
    expect((screen.getByText('->Click to choose<-') as HTMLOptionElement).selected).toBeTruthy();
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.getByTestId('form__country_error');
      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent(INVALIDERRMSG.COUNTRY);
      userEvent.selectOptions(input, 'Afghanistan');
      expect(screen.queryByTestId('form__country_error')).toBeNull();
    });
  });
  it('check without error msg', async () => {
    const input = screen.getByTestId('form__country');
    const submitBtn = screen.getByTestId('form__submit-btn');
    expect(screen.getByText('->Click to choose<-') as HTMLOptionElement).toBeTruthy();
    userEvent.selectOptions(input, 'Afghanistan');
    expect((screen.getByText('->Click to choose<-') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Afghanistan') as HTMLOptionElement).selected).toBeTruthy();
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.queryByTestId('form__country_error');
      expect(error).toBeNull();
    });
  });
});
describe('File input', () => {
  let file: File;
  beforeEach(() => {
    render(<Form />);
    file = new File(['(0)⌐□_□(1)'], 'hacker', { type: 'image/png' });
  });
  it('check error msg', async () => {
    const inputName = screen.getByTestId('form__name');
    userEvent.type(inputName, 'Jack');
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.getByTestId('form__picture_error');
      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent(INVALIDERRMSG.PICTURE);
    });
  });
  it('check without error msg', async () => {
    URL.createObjectURL = () => 'blob:https://ntp.msn.com/c676c005-b758-4907-8d0e-0dc0651241e2';
    const input = screen.getByTestId('form__picture') as HTMLInputElement;
    const submitBtn = screen.getByTestId('form__submit-btn');
    userEvent.upload(input, file);
    expect(input.files![0]).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
    userEvent.click(submitBtn);
    await waitFor(() => {
      const error = screen.queryByTestId('form__picture_error');
      expect(error).toBeNull();
    });
  });
});

describe('Submit button', () => {
  let submitBtn: HTMLButtonElement;
  let file: File;
  let name: HTMLInputElement;
  let surname: HTMLInputElement;
  let birthday: HTMLInputElement;
  let number: HTMLInputElement;
  let picture: HTMLInputElement;
  let country: HTMLInputElement;
  let gifts: HTMLInputElement[];
  beforeEach(async () => {
    const { getByTestId } = render(<Form />);
    submitBtn = getByTestId('form__submit-btn') as HTMLButtonElement;
    file = new File(['(0)⌐□_□(1)'], 'hacker', { type: 'image/png' });
    URL.createObjectURL = () => 'blob:https://ntp.msn.com/c676c005-b758-4907-8d0e-0dc0651241e2';
    name = getByTestId('form__name') as HTMLInputElement;
    surname = getByTestId('form__surname') as HTMLInputElement;
    birthday = getByTestId('form__birthday') as HTMLInputElement;
    number = getByTestId('form__number') as HTMLInputElement;
    country = getByTestId('form__country') as HTMLInputElement;
    picture = getByTestId('form__picture') as HTMLInputElement;
    gifts = [
      getByTestId('form__gift_1') as HTMLInputElement,
      getByTestId('form__gift_2') as HTMLInputElement,
      getByTestId('form__gift_3') as HTMLInputElement,
      getByTestId('form__gift_4') as HTMLInputElement,
      getByTestId('form__gift_5') as HTMLInputElement,
    ];
  });
  it('Disabled/not disabled', () => {
    const name = screen.getByTestId('form__name');
    expect(submitBtn).toHaveAttribute('disabled');
    userEvent.type(name, 'Jack');
    expect(submitBtn).not.toHaveAttribute('disabled');
  });
  it('Reset fields after submit', async () => {
    userEvent.type(name, 'Jack');
    userEvent.type(surname, 'Vorobey');
    userEvent.type(birthday, '1843-04-07');
    userEvent.type(number, '0192312312');
    userEvent.selectOptions(country, 'Russia');
    userEvent.upload(picture, file);
    userEvent.click(gifts[0]);
    userEvent.click(gifts[2]);
    submitBtn.click();
    await waitFor(() => {
      expect(name.value).toBe('');
      expect(surname.value).toBe('');
      expect(birthday.value).toBe(new Date().toISOString().replace(/T.+/i, ''));
      expect(number.value).toBe('');
      expect(country.value).toBe('->Click to choose<-');
      expect(picture.value).toBe('');
    });
  });
});
