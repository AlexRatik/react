import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { getCountries } from './FormOptions';
import { IFormCard } from '@components/FormCard';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '@components/FormCard/IFormCard';
import { FormInput } from './FormField/FormInput';
import { schema } from './Validation/FormValidation';
import { FormCheckbox } from './FormField/FormCheckbox';
import { FormSelect } from './FormField/FormSelect';
import { useAppDispatch } from '@hooks/redux';
import { FormActions } from '@reducers/FormReducer';

export const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<IFormValues>({ reValidateMode: 'onSubmit', resolver: yupResolver(schema) });
  const dispatch = useAppDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isFirstTyped, setIsFirstTyped] = useState<boolean>(false);

  const isBtnDisabled = (): void => {
    if (!isFirstTyped) {
      setIsButtonDisabled(true);
    } else if (isButtonDisabled && !haveErrors(errors)) {
      setIsButtonDisabled(false);
    } else if (!isButtonDisabled && haveErrors(errors)) {
      setIsButtonDisabled(true);
    }
  };

  const haveErrors = (errors: FieldErrors): boolean => {
    return Object.keys(errors).length !== 0;
  };

  useEffect(() => {
    isBtnDisabled();
  }, [errors, isBtnDisabled]);

  const onSubmit: SubmitHandler<IFormValues> = (data): void => {
    const card: IFormCard = {
      card: {
        name: firstLetterToUpperCase(data.name),
        surname: firstLetterToUpperCase(data.surname),
        number: data.number,
        birthday: new Date(data.birthday).toISOString().slice(0, 10).replaceAll(/-/g, '.'),
        country: data.country,
        sex: data.switcher ? 'Female' : 'Male',
        pictureURL: URL.createObjectURL(new Blob([data.file[0]])),
        gifts: getGifts(),
      },
    };
    dispatch(FormActions.setCard(card));
    setIsFirstTyped(false);
    reset();
  };

  const firstLetterToUpperCase = (value: string): string => {
    if (value) {
      return value.slice(0, 1).toUpperCase() + value.slice(1);
    }
    return '';
  };

  const getGifts = (): string => {
    const gifts: { [key: string]: boolean } = {
      book: getValues('book'),
      pen: getValues('pen'),
      notebook: getValues('notebook'),
      pencil: getValues('pencil'),
      'daily planner': getValues('dailyPlanner'),
    };
    let resultGifts = '';
    Object.entries(gifts).map(([key, value]) => {
      if (value) {
        resultGifts += `${key}, `;
      }
    });
    return firstLetterToUpperCase(resultGifts.replace(/, $/, '.')) || 'No.';
  };

  return (
    <>
      <StyledForm className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <div className="form__container">
          <FormInput
            name="name"
            id="form__name"
            testID="form__name"
            testIDForError="form__name_error"
            inputType="text"
            placeholder="Your name..."
            errorMSG={errors['name']}
            onChange={() => {
              clearErrors('name');
              if (!isFirstTyped) {
                setIsFirstTyped(true);
              }
            }}
            register={register}
          />
          <FormInput
            name="surname"
            id="form__surname"
            testID="form__surname"
            testIDForError="form__surname_error"
            inputType="text"
            placeholder="Your surname..."
            errorMSG={errors['surname']}
            onChange={() => {
              clearErrors('surname');
              if (!isFirstTyped) {
                setIsFirstTyped(true);
              }
            }}
            register={register}
          />
          <FormInput
            name="number"
            id="form__number"
            testID="form__number"
            testIDForError="form__number_error"
            inputType="text"
            placeholder="Your phone number..."
            errorMSG={errors['number']}
            onChange={() => {
              clearErrors('number');
              if (!isFirstTyped) {
                setIsFirstTyped(true);
              }
            }}
            register={register}
          />
          <FormInput
            name="birthday"
            id="form__birthday"
            testID="form__birthday"
            testIDForLabel="form__birthday_label"
            testIDForError="form__birthday_error"
            inputType="date"
            errorMSG={errors['birthday']}
            label="Your birthday: "
            onChange={() => {
              clearErrors('birthday');
              if (!isFirstTyped) {
                setIsFirstTyped(true);
              }
            }}
            register={register}
            defaultValue={new Date().toISOString().replace(/T.+/i, '')}
          />
          <FormCheckbox
            name="switcher"
            label="Male / Female"
            testIDForLabel="form__switcher_label"
            id="form__switcher"
            testID="form__switcher"
            register={register}
          />
          <FormInput
            name="file"
            label="Upload photo... "
            testIDForLabel="form__picture_label"
            testIDForError="form__picture_error"
            id="form__picture"
            testID="form__picture"
            inputType="file"
            errorMSG={errors['file']}
            onChange={() => {
              clearErrors('file');
              if (!isFirstTyped) {
                setIsFirstTyped(true);
              }
            }}
            register={register}
          />
          <FormSelect
            name="country"
            id="form__country"
            testID="form__country"
            label="Choose your country... "
            testIDForLabel="form__country_label"
            testIDForError="form__country_error"
            errorMSG={errors['country']}
            onSelect={() => {
              clearErrors('country');
              if (!isFirstTyped) {
                setIsFirstTyped(true);
              }
            }}
            register={register}
            options={getCountries()}
          />
          <StyledGiftsTitle>Choose a gift(s):</StyledGiftsTitle>
          <StyledGiftsContainer>
            <FormCheckbox
              name="book"
              id="form__gift_1"
              testID="form__gift_1"
              testIDForLabel="form__gift1_label"
              label="Book"
              register={register}
            />
            <FormCheckbox
              name="pen"
              id="form__gift_2"
              testID="form__gift_2"
              testIDForLabel="form__gift2_label"
              label="Pen"
              register={register}
            />
            <FormCheckbox
              name="notebook"
              id="form__gift_3"
              testID="form__gift_3"
              testIDForLabel="form__gift3_label"
              label="Notebook"
              register={register}
            />
            <FormCheckbox
              name="dailyPlanner"
              id="form__gift_4"
              testID="form__gift_4"
              testIDForLabel="form__gift4_label"
              label="Daily planner"
              register={register}
            />
            <FormCheckbox
              name="pencil"
              id="form__gift_5"
              testID="form__gift_5"
              testIDForLabel="form__gift5_label"
              label="Pencil"
              register={register}
            />
          </StyledGiftsContainer>
        </div>
        <StyledFormButton
          type="submit"
          className="form__submit"
          disabled={isButtonDisabled}
          data-testid="form__submit-btn"
        >
          Submit
        </StyledFormButton>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  width: 15em;
  margin: 0.5em auto 0 auto;
  border: 2px solid teal;
  border-radius: 20px;
  position: relative;
  padding-bottom: 50px;
  .form-group {
    width: 90%;
    margin: 0.7em auto 0.7em auto;
    position: relative;
  }
  label {
    font-size: 16px;
  }
`;
const StyledGiftsTitle = styled.p`
  font-size: 18px;
  width: 90%;
  margin: 0 auto;
`;
const StyledGiftsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const StyledFormButton = styled.button`
  position: absolute;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: teal;
  color: white;
  right: 10px;
  bottom: 10px;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: transparent;
    color: teal;
    cursor: pointer;
    border: 1px solid teal;
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
