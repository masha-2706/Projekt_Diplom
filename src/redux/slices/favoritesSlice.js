import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        // Добавление товара в избранное. Если товара ещё нет, добавляем его.
        addFavorite: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);
            if (!existingItem) {
                state.items.push(product);
                state.totalQuantity += 1;
            }
        },
        // Удаление товара из избранного по id.
        removeFavorite: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalQuantity -= 1;
            }
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
