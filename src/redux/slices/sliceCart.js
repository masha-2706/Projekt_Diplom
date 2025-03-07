import { createSlice } from '@reduxjs/toolkit';

// функция для загрузки корзины из localStorage
const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

// функция для сохранения корзины в localStorage
const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// начальное состояние (загружается из localStorage)
const initialState = {
    cart: loadCartFromLocalStorage(), // загружаем сохранённую корзину
    totalQuantity: 0, // Количество уникальных товаров в корзине
    totalSum: 0, // Общая сумма товаров в корзине
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
                existingItem.price = product.price;
                existingItem.discont_price = product.discont_price;
                existingItem.quantity += quantityToAdd;
            } else {
                state.cart.push({ ...product, quantity: quantityToAdd });
            }

            state.totalSum = state.cart.reduce((sum, item) => {
                const itemPrice = item.discont_price != null ? item.discont_price : item.price;
                return sum + itemPrice * item.quantity;
            }, 0);
            state.totalSum = +state.totalSum.toFixed(2);

            saveCartToLocalStorage(state.cart); // сохранение корзины в localStorage
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

            saveCartToLocalStorage(state.cart); // сохранение корзины в localStorage
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

            saveCartToLocalStorage(state.cart); // сохранение корзины в localStorage
        },
    },
});

export const { addToCart, removeOneFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
