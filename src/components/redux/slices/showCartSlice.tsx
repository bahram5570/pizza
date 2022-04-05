import { createSlice } from '@reduxjs/toolkit';

const showCartSlice = createSlice({
  name: 'showCartSlice',
  initialState: { status: false },
  reducers: {
    showMenuCart: (state, action) => {
      if (action.payload === 'open') {
        state.status = true;
      } else if (action.payload === 'close') {
        state.status = false;
      }
    },
  },
});

export const { showMenuCart } = showCartSlice.actions;
export default showCartSlice.reducer;
