import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('darkMode')
  ? JSON.parse(localStorage.getItem('darkMode') || '')
  : false;

export const darkModeSlice = createSlice({
  name: 'darkModeSlice',
  initialState,
  reducers: {
    darkMode: (state) => {
      localStorage.setItem('darkMode', JSON.stringify(!state));
      return !state;
    },
  },
});

export const { darkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
