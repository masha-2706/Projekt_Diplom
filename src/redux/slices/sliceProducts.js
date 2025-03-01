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
            // { id, title, price, discontPrice, image, categoryId }
            // Для каждого продукта вычисляем actualPrice:
            // если присутствует discontPrice, то actualPrice = discontPrice, иначе actualPrice = price.
            state.products = action.payload.map(product => ({
                ...product,
                actualPrice: product.discontPrice ? product.discontPrice : product.price,
            }));
        },
    },
});

export const { updateProducts } = productsSlice.actions;
export default productsSlice.reducer;
