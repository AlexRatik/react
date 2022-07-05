import React from 'react';
import styled from 'styled-components';
import { APICard } from '@components/APICard';
import { ErrorPage } from '@pages/ErrorPage';
import { IAPICardProps } from './IAPICards';

export const APICards = ({ cardsData }: IAPICardProps): JSX.Element => {
  return (
    <StyledAPICards data-testid="APICards__container">
      {cardsData.length ? (
        cardsData.map((cardData) => <APICard data={cardData} key={cardData.id} />)
      ) : (
        <ErrorPage />
      )}
    </StyledAPICards>
  );
};

const StyledAPICards = styled.div`
  width: 95%;
  margin: 1em auto 0;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;
