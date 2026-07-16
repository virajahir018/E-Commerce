import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

const wishlistSlice = createSlice({
    name: "wishlist",

    initialState,

    reducers: {
        addWishlist: (state, action) => {
            const existingProduct = state.items.find((item) =>
                item.id === action.payload.id);

            if (existingProduct) {
                state.items.filter(
                    (item) => item.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
        },
    },
});

export const { addWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;