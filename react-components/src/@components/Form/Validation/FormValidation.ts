import * as yup from 'yup';
import { INVALIDERRMSG, VALIDATIONREDEXP } from '../EForm';

export const schema = yup
  .object()
  .shape({
    name: yup.string().trim().matches(VALIDATIONREDEXP.NAME, { message: INVALIDERRMSG.NAME }),
    surname: yup
      .string()
      .trim()
      .matches(VALIDATIONREDEXP.SURNAME, { message: INVALIDERRMSG.SURNAME }),
    number: yup.string().matches(VALIDATIONREDEXP.NUMBER, { message: INVALIDERRMSG.NUMBER }),
    birthday: yup
      .date()
      .max(new Date(Date.now() - (18 * 365 + 4) * 24 * 60 * 60 * 1000), INVALIDERRMSG.DATE),
    country: yup
      .string()
      .matches(VALIDATIONREDEXP.COUNTRY, { message: INVALIDERRMSG.COUNTRY })
      .required(),
    file: yup.mixed().test('length', INVALIDERRMSG.PICTURE, (value) => {
      return value.length > 0;
    }),
  })
  .nullable();
