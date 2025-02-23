import { createSlice } from "@reduxjs/toolkit";

export const categoriesListSlice = createSlice(
    {
        name: 'categoriesList',
        initialState: [],
        reducers:
        {
            setCategoriesList: (state, action) => action.payload
            // устанавливаю в состояние просто то, что в него задиспатчили
        }
    }
)

export const { setCategoriesList } = categoriesListSlice.actions
export default categoriesListSlice.reducer