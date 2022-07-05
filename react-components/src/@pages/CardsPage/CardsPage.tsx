import React, { useEffect, useState } from 'react';
import { getHouses } from '@data/data';
import { Card } from '@components/Card/';
import { ICard } from '@interfaces/ICard';
import styled from 'styled-components';

export const CardsPage = (): JSX.Element => {
  const [houses, setHouses] = useState<ICard[]>([]);
  useEffect(() => {
    const receivedHouses: ICard[] = getHouses();
    setHouses(receivedHouses);
  }, []);
  return (
    <div data-testid="houses-page">
      <StyledTitle>Houses</StyledTitle>
      <StyledHouses className="houses" data-testid="houses">
        {houses.map((house: ICard) => {
          return <Card key={house.id} house={house} />;
        })}
      </StyledHouses>
    </div>
  );
};
const StyledTitle = styled.h1`
  text-align: center;
`;
const StyledHouses = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
`;
