import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import categoriesReducer from './slices/categoriesAndProductsList'


export default configureStore({
    reducer: {
        filter: filterReducer,
        categories: categoriesReducer
    },
});