import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from 'App';
import { AboutUsPage } from '@pages/AboutUsPage';
import { ErrorPage } from '@pages/ErrorPage';
import { SearchPage } from '@pages/SearchPage';
import { CardsPage } from '@pages/CardsPage';
import { FormPage } from '@pages/FormPage';
import { APICardPage } from '@pages/APICardPage';

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<AboutUsPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="houses" element={<CardsPage />} />
        <Route path="api" element={<SearchPage />} />
        <Route path="api/:id" element={<APICardPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
