import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalSum: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Добавление товара в корзину
        addProduct: (state, action) => {
            // ожидается, что action.payload содержит: id, title, price, discont_price, image, и опционально quantity
            const product = action.payload;

            // если количество не указано - добавляем 1 единицу товара
            const quantityToAdd = product.quantity ? product.quantity : 1;

            // если товар уже в корзине - просто увеличиваем количество
            const existingItem = state.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantityToAdd;
            } else {
                state.items.push({ ...product, quantity: quantityToAdd });
            }

            // Обновление общих показателей корзины
            state.totalQuantity += quantityToAdd;
            state.totalSum += (product.discont_price || product.price) * quantityToAdd;
            state.totalSum = parseFloat(state.totalSum.toFixed(2));//пришлось округлять, иначе баг из-за плавающей запятой
        },


        // удаление одной единицы товара по id
        removeOneProduct: (state, action) => {
            // action.payload - id товара
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) { // если найден по id, обновляем поля слайса
                existingItem.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalSum -= existingItem.discont_price || existingItem.price;
                state.totalSum = parseFloat(state.totalSum.toFixed(2)); //пришлось округлять, иначе баг из-за плавающей запятой

                // если товара в корзине 0 или меньше - пересоздаем массив элементов,
                // но уже без этого товара
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },

        // Удаление всех единиц товара из корзины
        removeAllProduct: (state, action) => {
            // action.payload - id товара
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalSum -= (existingItem.discont_price || existingItem.price) * existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
    },
});

export const { addProduct, removeOneProduct, removeAllProduct } = cartSlice.actions;

export default cartSlice.reducer;