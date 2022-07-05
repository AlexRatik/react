import React, { useEffect } from 'react';
import { SearchBar } from '@components/SearchBar';
import { APICards } from '@components/APICards';
import { Loader } from '@components/Loader';
import { Pagination } from '@components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { fetchAPIData } from '@reducers/APICardsReducer';

export const SearchPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page, filter, isLoading, limit, visibleCards } = useAppSelector(
    (state) => state.APICardsReducer
  );
  useEffect(() => {
    dispatch(fetchAPIData());
  }, [page, limit, filter]);

  return (
    <div data-testid="search-page">
      <SearchBar />
      <Pagination />
      {isLoading ? <Loader /> : <APICards cardsData={visibleCards} />}
    </div>
  );
};
