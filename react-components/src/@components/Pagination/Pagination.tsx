import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Filter } from './Filter';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { APICardsActions } from '../../@reducers/APICardsReducer';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { total, limit, page } = useAppSelector((state) => state.APICardsReducer);
  const pageNumbers = [];

  const totalPages = Math.ceil(total / limit);
  let firstAvailablePage = Math.max(1, page - 2);
  let lastAvailablePage = Math.min(totalPages, page + 2);

  if (firstAvailablePage === 1 || firstAvailablePage === 2) {
    lastAvailablePage = firstAvailablePage + 4;
  }
  if (lastAvailablePage === totalPages || lastAvailablePage === totalPages - 1) {
    firstAvailablePage = lastAvailablePage - 4;
  }
  for (let i = firstAvailablePage; i <= lastAvailablePage; i++) {
    pageNumbers.push(i);
  }
  const availableCardsPerPage = [5, 10, 20];
  return (
    <StyledPagination>
      <p>Cards per page:</p>
      <ul>
        {availableCardsPerPage.map((num) => (
          <li
            key={uuidv4()}
            onClick={() => dispatch(APICardsActions.setLimit(num))}
            className={num === limit ? 'active' : ''}
          >
            {num}
          </li>
        ))}
      </ul>
      <p>Page:</p>
      <div className="pages">
        <span
          className={page === firstAvailablePage ? 'disable' : ''}
          onClick={() => dispatch(APICardsActions.setPage(page - 1))}
        >
          {'🢀'}
        </span>
        <ul>
          {pageNumbers.map((num) => (
            <li
              key={uuidv4()}
              className={num === page ? 'active' : ''}
              onClick={() => dispatch(APICardsActions.setPage(num))}
            >
              {num}
            </li>
          ))}
        </ul>

        <span
          className={page === lastAvailablePage ? 'disable' : ''}
          onClick={() => dispatch(APICardsActions.setPage(page + 1))}
        >
          {'🢂'}
        </span>
      </div>
      <Filter />
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  * {
    user-select: none;
  }
  padding: 1em;
  .pages {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      border: 1px solid teal;
      font-size: 25px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      padding: 5px;
      transition: all 0.25s ease;
      &:hover {
        cursor: pointer;
        background-color: teal;
        color: white;
      }
      &.disable {
        pointer-events: none;
        opacity: 0.6;
      }
    }
  }
  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      margin: 0 5px;
      border: 1px solid teal;
      border-radius: 50% 0;
      min-width: 60px;
      min-height: 60px;
      padding: 10px;
      display: block;
      text-align: center;
      color: black;
      font-size: 32px;
      text-decoration: none;
      transition: all 0.25s ease;

      &.active {
        background-color: teal;
        color: white;
      }
      &:hover {
        cursor: pointer;
        color: white;
        background-color: teal;
      }
    }
  }
`;
