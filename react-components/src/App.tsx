import React from 'react';
import GlobalStyles from 'globalStyles';
import { Header } from '@components/Header';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
};
