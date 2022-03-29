import {configureStore} from '@reduxjs/toolkit';
import darkModeSlice from './slices/darkModeSlice';
import signupSlice from './slices/signupSlice';

export const store = configureStore({
    reducer: {
        darkModeStore: darkModeSlice,
        signupStore: signupSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
