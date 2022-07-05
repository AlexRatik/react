import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '@hooks/redux';

export const APICardPage = () => {
  const { directlyCard } = useAppSelector((state) => state.APICardsReducer);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (directlyCard.id === 0) {
      navigate('/api');
    }
  });
  return (
    <>
      <StyledTitle>API Card №{params.id}</StyledTitle>
      <StyledAPICardPage data-testid="APICard__page">
        <div className="APICard__page_info">
          <h2 data-testid="APICard__page_info-name">Name: {directlyCard.name}</h2>
          <p data-testid="APICard__page_info-status">Status: {directlyCard.status}</p>
          <p data-testid="APICard__page_info-species">Species: {directlyCard.species}</p>
          <p data-testid="APICard__page_info-gender">Gender: {directlyCard.gender}</p>
          <p data-testid="APICard__page_info-origin">Origin: {directlyCard.origin.name}</p>
          <p data-testid="APICard__page_info-location">Location: {directlyCard.location.name}</p>
        </div>
        <img
          data-testid="APICard__page_image"
          className="APICard__page_image"
          src={directlyCard.image}
          alt={directlyCard.name}
        />
        <button
          data-testid="APICard__page_btn"
          className="APICard__page_back-btn"
          onClick={() => navigate('/api')}
        >
          <span>{'⤺ Back'}</span>
        </button>
      </StyledAPICardPage>
    </>
  );
};

const StyledTitle = styled.h1`
  margin: 0.3em 0;
  text-align: center;
`;
const StyledAPICardPage = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 3px solid teal;
  border-radius: 1em;
  p,
  h2 {
    margin-bottom: 15px;
  }
  img {
    width: 300px;
    height: 300px;
    border-radius: 1em;
  }
  button {
    position: absolute;
    width: 8em;
    height: 4em;
    bottom: -4.5rem;
    left: 0;
    border: 1px solid teal;
    border-radius: 2em;
    background-color: transparent;
    outline: none;
    transition: all 0.25s ease;
    span {
      font-size: 2em;
    }
    &:hover {
      cursor: pointer;
      background-color: teal;
      color: white;
      transform: scale(1.1);
    }
  }
`;
