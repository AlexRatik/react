import React from 'react';
import styled from 'styled-components';
import { ICardProps } from '@interfaces/ICard';

const StyledCard = styled.div`
  position: relative;
  width: 30vw;
  height: 450px;
  padding: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.4s ease;
  font-size: 24px;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    opacity: 0.7;

    .house__description {
      opacity: 1;
    }
  }

  .house__img {
    object-fit: cover;
    width: 20vw;
    height: 200px;
  }

  .house__description {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    color: whitesmoke;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      margin-top: 6%;
    }
  }
`;

export const Card = ({ house }: ICardProps): JSX.Element => {
  return (
    <StyledCard data-testid="house">
      <img className="house__img" data-testid="house-photo" src={house.photoURL} alt={house.name} />
      <p className="house__name" data-testid="house-name">
        {house.name}
      </p>
      <p className="house__price" data-testid="house-price">
        {house.price} $
      </p>
      <div className="house__description">
        <p className="house__description_square" data-testid="house-square">
          Square: {house.square} м<sup>2</sup>
        </p>
        <p className="house__description_height" data-testid="house-height">
          Height: {house.height} м
        </p>
        <p className="house__description_cost" data-testid="house-costOfConstruction">
          Cost of construction: {house.costOfConstruction} y.e.
        </p>
      </div>
    </StyledCard>
  );
};
