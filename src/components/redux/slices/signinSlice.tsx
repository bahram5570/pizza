import { createSlice } from '@reduxjs/toolkit';

const currentUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user') || '').phone
  : null;

const initialState = { user: currentUser };

const signinSlice = createSlice({
  name: 'signinSlice',
  initialState,
  reducers: {
    signinAction: (state, action) => {
      const user = localStorage.getItem('user_' + action.payload.phone)
        ? JSON.parse(localStorage.getItem('user_' + action.payload.phone) || '')
        : null;

      if (action.payload === 'finish') {
        state.user = JSON.parse(localStorage.getItem('user') || '').phone;
      } else if (user) {
        if (action.payload.pass === user.pass) {
          state.user = 'success';
        } else {
          state.user = 'wrong';
        }
      } else {
        state.user = 'fail';
      }
    },
  },
});

export const { signinAction } = signinSlice.actions;
export default signinSlice.reducer;
