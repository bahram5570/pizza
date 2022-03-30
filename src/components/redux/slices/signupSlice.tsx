import { createSlice } from '@reduxjs/toolkit';

interface TypeStatus {
  status: null | string;
}

const initialState: TypeStatus = { status: null };

export const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    signupAction: (state, action) => {
      const currentUser = localStorage.getItem('user_' + action.payload.phone);
      
      if (action.payload === 'finish') {
        state.status = null;
      } else if (currentUser) {
        state.status = 'fail';
      } else {
        localStorage.setItem(
          'user_' + action.payload.phone,
          JSON.stringify({ ...action.payload })
        );
        state.status = 'success';
      }
    },
  },
});

export const { signupAction } = signupSlice.actions;
export default signupSlice.reducer;
