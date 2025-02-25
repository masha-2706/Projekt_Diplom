import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import categoriesReducer from './slices/categoriesSlice'
import productsReducer from './slices/productsSlice'
import cartItemsReducer from './slices/cartSlice'


export default configureStore({
    reducer: {
        filter: filterReducer,
        categories: categoriesReducer,
        products: productsReducer,
        cartItems: cartItemsReducer
    },
});