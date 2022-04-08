import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('customValues')
  ? JSON.parse(localStorage.getItem('customValues') || '')
  : { dough: null, sauce: null, cheese: null, beef: [], vegetable: [] };

const customValueSlice = createSlice({
  name: 'customValueSlice',
  initialState,
  reducers: {
    customValueAction: (state, action) => {
      switch (action.payload.type) {
        case 'dough':
          state.dough = action.payload.value;
          break;
        case 'sauce':
          state.sauce = action.payload.value;
          break;
        case 'cheese':
          state.cheese = action.payload.value;
          break;
        case 'beef':
          state.beef = action.payload.value;
          break;
        case 'vegetable':
          state.vegetable = action.payload.value;
          break;
      }

      localStorage.setItem('customValues', JSON.stringify(state));
    },
    customResetAction: (state) => {
      const value = {
        dough: null,
        sauce: null,
        cheese: null,
        beef: [],
        vegetable: [],
      };
      localStorage.setItem('customValues', JSON.stringify(value));
      return (state = value);
    },
  },
});

export const { customValueAction, customResetAction } =
  customValueSlice.actions;
export default customValueSlice.reducer;
