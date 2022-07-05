import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { APICardsActions } from '@reducers/APICardsReducer';

const FilterValues: { [key: string]: string } = {
  STATUS: 'status',
  NAME: 'name',
  SPECIES: 'species',
};

export const Filter = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.APICardsReducer);
  const filterBy: string[] = Object.keys(FilterValues).map((key) => FilterValues[key]);

  return (
    <>
      <p>Filter:</p>
      <ul>
        {filterBy.map((filterValue) => (
          <li
            key={uuidv4()}
            className={filter === filterValue ? 'active' : ''}
            onClick={() => dispatch(APICardsActions.setFilter(filterValue))}
          >
            {filterValue}
          </li>
        ))}
      </ul>
    </>
  );
};
