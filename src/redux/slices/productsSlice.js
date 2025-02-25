import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsList: (state, action) => action.payload,
    },
});

export const { setProductsList } = productsSlice.actions;
export default productsSlice.reducer;
