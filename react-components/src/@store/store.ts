import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { APICardsReducer } from '@reducers/APICardsReducer';
import { FormReducer } from '@reducers/FormReducer';
const rootReducer = combineReducers({
  APICardsReducer,
  FormReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
