import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        // Образец объекта: { id: 1, title: 'Category 1', image: 'image1.png' }
    ]
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateCategories(state, action) {
            // очистить текущее состояние и получить список категорий заново
            state.categories = action.payload;
        }
    }
});

export const { updateCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;