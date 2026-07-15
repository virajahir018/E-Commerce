import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;