import {configureStore} from '@reduxjs/toolkit';
import darkModeSlice from './slices/darkModeSlice';
import signupSlice from './slices/signupSlice';
import signinSlice from './slices/signinSlice';

export const store = configureStore({
    reducer: {
        darkModeStore: darkModeSlice,
        signupStore: signupSlice,
        signinStore: signinSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
