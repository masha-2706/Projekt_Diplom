import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filter",
    initialState: {
        minPrice: "",
        maxPrice: "",
        discontOnly: false,
        sort: "default",
    },
    reducers: {
        setFilter: (state, action) => {
            const { minPrice, maxPrice, discontOnly, sort } = action.payload;
            if (minPrice !== undefined) state.minPrice = minPrice;
            if (maxPrice !== undefined) state.maxPrice = maxPrice;
            if (discontOnly !== undefined) state.discontOnly = discontOnly;
            if (sort !== undefined) state.sort = sort;
        },
        resetFilters: (state) => {
            state.minPrice = "";
            state.maxPrice = "";
            state.discontOnly = false;
            state.sort = "default";
        }
    }
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;