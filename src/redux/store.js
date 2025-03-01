import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/sliceCart";
import categoriesReducer from "./slices/sliceCategories";
import productsReducer from "./slices/sliceProducts";
import favoritesReducer from "./slices/sliceFavorites";

export default configureStore({
    reducer: {
        cart: cartReducer,
        categories: categoriesReducer,
        products: productsReducer,
        favorites: favoritesReducer,
    },
});