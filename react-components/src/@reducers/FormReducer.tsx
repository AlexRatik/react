import { IFormCard } from '@components/FormCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  cards: IFormCard[];
};

const initialState: initialStateType = {
  cards: [],
};

export const FormSlice = createSlice({
  name: 'FormReducer',
  initialState,
  reducers: {
    setCard(state, action: PayloadAction<IFormCard>) {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const FormReducer = FormSlice.reducer;
export const FormActions = FormSlice.actions;
