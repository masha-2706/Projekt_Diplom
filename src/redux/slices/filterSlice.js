import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice(
    {
        name: "filter",
        initialState: {
            minPrice: "",
            maxPrice: "",
            discontOnly: false,
            sort: "default",
        },
        reducers: {
            setFilter: (state, action) => {
                // при изменении фильтра присваиваем новые значения
                const { minPrice, maxPrice, discontOnly, sort } = action.payload;
                minPrice !== undefined && (state.minPrice = minPrice);
                maxPrice !== undefined && (state.maxPrice = maxPrice);
                discontOnly !== undefined && (state.discontOnly = discontOnly);
                sort !== undefined && (state.sort = sort);
            }
        }
    }
);

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
