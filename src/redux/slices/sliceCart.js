import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [], // массив продуктов для отображения
    totalQuantity: 0, // количество уникальных товаров в корзине
    totalSum: 0, // общая сумма товаров в корзине
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // ожидается, что action.payload содержит: 
            // id, title, price, discont_price, image, и опционально quantity
            const product = action.payload;

            // если количество не указано - добавляем 1 единицу товара
            const quantityToAdd = product.quantity ? product.quantity : 1;

            // если товар уже в корзине - просто увеличиваем количество
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantityToAdd;
            } else {
                state.cart.push({ ...product, quantity: quantityToAdd });
            }

            // Обновление общих показателей корзины
            state.totalQuantity = state.cart.length;
            state.totalSum += (product.discont_price || product.price) * quantityToAdd;
            state.totalSum = parseFloat(state.totalSum.toFixed(2));//пришлось округлять, иначе баг из-за плавающей запятой
        },

        // удаление одной единицы товара по id
        removeOneFromCart: (state, action) => {
            // action.payload - id товара
            const id = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) { // если найден по id, обновляем поля слайса
                existingItem.quantity -= 1;
                state.totalQuantity = state.cart.length;
                state.totalSum -= existingItem.discont_price || existingItem.price;
                state.totalSum = parseFloat(state.totalSum.toFixed(2)); //пришлось округлять, иначе баг из-за плавающей запятой

                // если товара в корзине 0 или меньше - пересоздаем массив элементов,
                // но уже без этого товара
                if (existingItem.quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== id);
                }
            }
        },

        // Удаление всех единиц товара из корзины
        removeAllFromCart: (state, action) => {
            // action.payload - id товара
            const id = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity = state.cart.length;
                state.totalSum -= (existingItem.discont_price || existingItem.price) * existingItem.quantity;
                state.totalSum = parseFloat(state.totalSum.toFixed(2)); //пришлось округлять, иначе баг из-за плавающей запятой
                state.cart = state.cart.filter(item => item.id !== id);
            }
        },

    },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
