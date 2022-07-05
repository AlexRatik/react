import React from 'react';
import styled from 'styled-components';
import { IFormCard } from './IFormCard';

export const FormCard = ({ card }: IFormCard): JSX.Element => {
  return (
    <StyledFormCard>
      <img src={card.pictureURL} alt={card.name} className="form__card_avatar" />
      <p data-testid="form__card_name" className="form__card_name">
        Name: {card.name}
      </p>
      <p data-testid="form__card_surname" className="form__card_surname">
        Surname: {card.surname}
      </p>
      <p data-testid="form__card_number" className="form__card_number">
        Phone number: {card.number}
      </p>
      <p data-testid="form__card_birthday" className="form__card_birthday">
        Birthday: {card.birthday}
      </p>
      <p data-testid="form__card_sex" className="form__card_sex">
        Sex: {card.sex}
      </p>
      <p data-testid="form__card_country" className="form__card_country">
        Country: {card.country}
      </p>
      <p data-testid="form__card_gifts" className="form__card_gifts">
        Gifts: {card.gifts}
      </p>
    </StyledFormCard>
  );
};
const StyledFormCard = styled.div`
  flex-basis: 33%;
  position: relative;
  font-size: 18px;
  background-color: teal;
  color: whitesmoke;
  border: 1px dotted teal;
  border-radius: 30px;
  padding: 1.25em;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 400px;
  img {
    position: relative;
    object-fit: cover;
    width: 5em;
    height: 5em;
    border-radius: 50%;
  }
  p {
    margin-top: 0.75em;
    width: 100%;
  }
`;
