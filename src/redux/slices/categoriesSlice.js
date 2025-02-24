import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategoriesList: (state, action) => action.payload,
    },
});

export const { setCategoriesList } = categoriesSlice.actions;
export default categoriesSlice.reducer;
