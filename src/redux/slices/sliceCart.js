import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [], // массив товаров
    totalQuantity: 0, // количество уникальных товаров в корзине
    totalSum: 0, // общая сумма товаров в корзине
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const quantityToAdd = product.quantity ? product.quantity : 1;

            const existingItem = state.cart.find(item => item.id === product.id);

            if (existingItem) {
                // Если товар уже есть, увеличиваем количество
                existingItem.price = product.price;
                existingItem.discont_price = product.discont_price;
                existingItem.quantity += quantityToAdd;
            } else {
                // Если товара нет, добавляем как обычно
                state.cart.push({ ...product, quantity: quantityToAdd });
            }

            state.totalSum = state.cart.reduce((sum, item) => {
                const itemPrice = item.discont_price != null ? item.discont_price : item.price;
                return sum + itemPrice * item.quantity;
            }, 0);
            state.totalSum = +state.totalSum.toFixed(2);
        },


        removeOneFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity -= 1;
                if (existingItem.quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== id);
                }
            }
            state.totalQuantity = state.cart.length;
            state.totalSum = state.cart.reduce((sum, item) => {
                const itemEffectivePrice = item.discont_price != null ? item.discont_price : item.price;
                return sum + itemEffectivePrice * item.quantity;
            }, 0);
            state.totalSum = parseFloat(state.totalSum.toFixed(2));
        },

        removeAllFromCart(state, action) {
            const id = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
            state.totalQuantity = state.cart.length;
            state.totalSum = state.cart.reduce((sum, item) => {
                const itemEffectivePrice = item.discont_price != null ? item.discont_price : item.price;
                return sum + itemEffectivePrice * item.quantity;
            }, 0);
            state.totalSum = parseFloat(state.totalSum.toFixed(2));
        },
    },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
