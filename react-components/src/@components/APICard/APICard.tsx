import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IRickAndMortyResult } from '@interfaces/IRickAndMorty';
import { APICardsActions } from '@reducers/APICardsReducer';
import { useAppDispatch } from '@hooks/redux';

export const APICard = ({ data }: { data: IRickAndMortyResult }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Link
      style={{ color: 'black', textDecoration: 'none' }}
      to={`${data.id}`}
      onClick={() => dispatch(APICardsActions.setDirectlyCard(data))}
    >
      <StyledAPICard>
        <div className="APICard" data-testid="APICard">
          <img src={data.image} alt={data.name} data-testid="APICard_image" />
          <p>{data.name}</p>
        </div>
      </StyledAPICard>
    </Link>
  );
};

const StyledAPICard = styled.div`
  width: 13em;
  height: 13em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid teal;
  border-radius: 75px;
  opacity: 0.87;
  flex-shrink: 0;
  transition: all 0.25s ease;
  padding: 15px;
  .APICard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    p {
      margin-top: 35px;
      overflow: hidden;
    }
  }
  img {
    width: 270px;
    height: 270px;
    object-fit: cover;
    border-radius: 50px;
  }
  &:hover {
    cursor: pointer;
    background-color: teal;
    opacity: 1;
    color: #ffffff;
    transform: scale(1.1);
  }
`;
