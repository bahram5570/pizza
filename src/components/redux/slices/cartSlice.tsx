import {createSlice} from '@reduxjs/toolkit'

const initialState: {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string
    }[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [];

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.findIndex(x => x.id === action.payload.id)
            
            if (itemIndex === -1) {
                state.push({...action.payload, quantity: 1})
            } else {
                state[itemIndex].quantity++
            }
            localStorage.setItem('cart', JSON.stringify(state))
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;