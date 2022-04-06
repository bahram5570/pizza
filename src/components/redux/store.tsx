import {configureStore} from '@reduxjs/toolkit';
import darkModeSlice from './slices/darkModeSlice';
import signupSlice from './slices/signupSlice';
import signinSlice from './slices/signinSlice';
import cartSlice from './slices/cartSlice';
import showCartSlice from './slices/showCartSlice';
import customValueSlice from './slices/customValueSlice'

export const store = configureStore({
    reducer: {
        darkModeStore: darkModeSlice,
        signupStore: signupSlice,
        signinStore: signinSlice,
        cartStore: cartSlice,
        showCartStore: showCartSlice,
        customValueStore: customValueSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
