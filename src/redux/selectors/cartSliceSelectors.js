// есть ли товар с этим id в корзине
export const selectIsProductInCart = (state, productId) =>
    state.cartItems.items.map(item => item.id).includes(productId);

// получить массив объектов в корзине
export const selectCartItems = state => state.cartItems.items;

// получить количество товаров в корзине
export const selectCartTotalQuantity = state => state.cartItems.totalQuantity;

// получить общую сумму товаров в корзине
export const selectCartTotalSum = state => state.cartItems.totalSum;