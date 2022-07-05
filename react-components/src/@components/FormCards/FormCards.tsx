import React from 'react';
import styled from 'styled-components';
import { FormCard } from '@components/FormCard';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '@hooks/redux';

export const FormCards = () => {
  const { cards } = useAppSelector((state) => state.FormReducer);
  return (
    <StyledFormCardsContainer>
      {cards.map((card) => (
        <FormCard card={card.card} key={uuidv4()} />
      ))}
    </StyledFormCardsContainer>
  );
};

const StyledFormCardsContainer = styled.div`
  width: 90%;
  margin: 1em auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 1em;
`;
