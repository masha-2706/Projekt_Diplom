import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [], // массив продуктов для отображения
    total: 0, // общая стоимость корзины
    quantity: 0, // количество уникальных продуктов в корзине
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // action.payload ожидается как объект продукта:
            // { id, title, price, discontPrice, image, quantity }
            // Для продукта вычисляем actualPrice
            // total - округляем до 2 знаков после запятой
            // если товар уже есть в корзине, то увеличиваем его количество на 1
            // если товара нет в корзине, то добавляем его
            const product = action.payload;
            const productInCart = state.cart.find(item => item.id === product.id);
            if (productInCart) {
                productInCart.quantity += 1;
            } else {
                state.cart.push({
                    ...product,
                    actualPrice: product.discontPrice ? product.discontPrice : product.price,
                    quantity: 1,
                });
            }
            state.total = +(state.total + product.actualPrice).toFixed(2);
            state.quantity = state.cart.length;
        },
        removeOneFromCart: (state, action) => {
            // action.payload ожидается как id удаляемого продукта
            // Если количество товара больше 1, то уменьшаем его количество на 1
            // Если количество товара равно 1, то удаляем товар из корзины
            const product = state.cart.find(item => item.id === action.payload);
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                state.cart = state.cart.filter(item => item.id !== action.payload);
            }
            state.total = +(state.total - product.actualPrice).toFixed(2);
            state.quantity = state.cart.length;
        },
        removeAllFromCart: (state, action) => {
            // action.payload ожидается как id удаляемого продукта
            // Удаляем товар из корзины
            const product = state.cart.find(item => item.id === action.payload);
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.total = +(state.total - product.actualPrice * product.quantity).toFixed(2);
            state.quantity = state.cart.length;
        }

    },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
