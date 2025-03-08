import { createSlice } from '@reduxjs/toolkit';

// загружаем избранное из localStorage
const loadFavoritesFromLocalStorage = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};

const initialState = {
    favorites: loadFavoritesFromLocalStorage(), // загружаем избранное из localStorage
    quantity: loadFavoritesFromLocalStorage().length, // кол-во продуктов в избранном
};
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            // action.payload ожидается как объект продукта:
            // { id, title, price, discont_price, image }
            // Для продукта вычисляем actualPrice:
            // если присутствует discont_price, то actualPrice = discont_price, иначе actualPrice = price.
            state.favorites = [...state.favorites, {
                ...action.payload,
                actualPrice: action.payload.discont_price ? action.payload.discont_price : action.payload.price,
            }];
            state.quantity = state.favorites.length; // обновляем количество продуктов в избранном. 
            // можно было просто написать state.quantity += 1, но так надёжнее
            localStorage.setItem('favorites', JSON.stringify(state.favorites)); // сохраняем в localStorage
        },
        removeFavorite(state, action) {
            // action.payload ожидается как id удаляемого продукта
            state.favorites = state.favorites.filter(product => product.id !== action.payload);
            state.quantity = state.favorites.length; // обновляем количество продуктов в избранном. 
            // можно было просто написать state.quantity -= 1, но так надёжнее
            localStorage.setItem('favorites', JSON.stringify(state.favorites)); // обновляем localStorage
        },

    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
