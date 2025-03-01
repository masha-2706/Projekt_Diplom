import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [], // массив продуктов в избранном для отображения
    quantity: 0, // количество продуктов в избранном
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            // action.payload ожидается как объект продукта:
            // { id, title, price, discontPrice, image }
            // Для продукта вычисляем actualPrice:
            // если присутствует discontPrice, то actualPrice = discontPrice, иначе actualPrice = price.
            state.favorites = [...state.favorites, {
                ...action.payload,
                actualPrice: action.payload.discontPrice ? action.payload.discontPrice : action.payload.price,
            }];
            state.quantity = state.favorites.length; // обновляем количество продуктов в избранном. 
            // можно было просто написать state.quantity += 1, но так надёжнее
        },
        removeFavorite(state, action) {
            // action.payload ожидается как id удаляемого продукта
            state.products = state.products.filter(product => product.id !== action.payload);
            state.quantity = state.favorites.length; // обновляем количество продуктов в избранном. 
            // можно было просто написать state.quantity -= 1, но так надёжнее
        },

    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
