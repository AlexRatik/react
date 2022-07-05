import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { APICardsActions, fetchAPIData } from '@reducers/APICardsReducer';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { keywords } = useAppSelector((state) => state.APICardsReducer);
  return (
    <StyledSearchBarWrapper>
      <h1>Search Bar</h1>
      <StyledSearchBar
        data-testid="search-input"
        autoFocus
        value={keywords}
        onChange={(e) => {
          dispatch(APICardsActions.setKeywords(e.target.value));
        }}
        onKeyPress={(e) => {
          if (e.code === 'Enter') {
            dispatch(fetchAPIData());
          }
        }}
      />
    </StyledSearchBarWrapper>
  );
};
const StyledSearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledSearchBar = styled.input`
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  width: 80%;

  height: 50px;
  border-radius: 20px;
  border: 2px dotted teal;
  font-size: 32px;
  padding: 15px;

  &:focus {
    border-color: indigo;
  }
`;
