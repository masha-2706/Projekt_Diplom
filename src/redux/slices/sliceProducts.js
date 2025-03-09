import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [], // массив продуктов для отображения
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProducts(state, action) {
            // action.payload ожидается как актуальный массив объектов продукта:
            // { id, title, price, discont_price, image, categoryId }
            // Для каждого продукта вычисляем actualPrice:
            // если присутствует discont_price, то actualPrice = discont_price, иначе actualPrice = price.
            state.products = action.payload.map(product => ({
                ...product,
                actualPrice: product.discont_price ? product.discont_price : product.price,
            }));
        },
    },
});

export const { updateProducts } = productsSlice.actions;
export default productsSlice.reducer;
