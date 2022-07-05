export enum INVALIDERRMSG {
  NAME = 'It should be not empty and should consist of letter',
  SURNAME = 'It should be not empty and should consist of letter',
  NUMBER = 'Phone number should consist at least 10 numbers without plus and letters',
  COUNTRY = 'You should choose your country',
  PICTURE = 'Choose an avatar',
  DATE = 'You should be at least 18 years old',
}

export const VALIDATIONREDEXP = {
  NAME: new RegExp(/^[a-zA-Zа-яА-ЯЁё]+$/, 'i'),
  SURNAME: new RegExp(/^[a-zA-Zа-яА-ЯЁё]+$/, 'i'),
  NUMBER: new RegExp(/^\+?([\d]+){10,}$/),
  BIRTHDAY: new RegExp(/(\d{4})-(\d{2})-(\d{2})/),
  COUNTRY: new RegExp(/[^->Click to choose<-]/, 'i'),
  PICTURE: new RegExp(/.+/, 'i'),
};
