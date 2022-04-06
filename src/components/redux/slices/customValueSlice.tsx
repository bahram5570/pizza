import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('customValues')
  ? JSON.parse(localStorage.getItem('customValues') || '')
  : { dough: null, sauce: null, cheese: null, beef: null, vegetable: null };

const customValueSlice = createSlice({
  name: 'customValueSlice',
  initialState,
  reducers: {
    customValueAction: (state, action) => {
      switch (action.payload.type) {
        case 'dough':
          state.dough = action.payload.value;
          break;
      }

      localStorage.setItem('customValues', JSON.stringify(state));
    },
  },
});

export const { customValueAction } = customValueSlice.actions;
export default customValueSlice.reducer;
