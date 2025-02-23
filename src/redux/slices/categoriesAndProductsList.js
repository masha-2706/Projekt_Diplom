import { createSlice } from "@reduxjs/toolkit";

export const categoriesListSlice = createSlice(
    {
        name: 'categoriesAndProductsList',
        initialState: [],
        reducers:
        {
            setCategoriesList: (state, action) => action.payload,
            setProductsList: (state, action) => action.payload
            // устанавливаю в состояние просто то, что в него задиспатчили
        }
    }
)

export const { setCategoriesList, setProductsList } = categoriesListSlice.actions
export default categoriesListSlice.reducer