export const selectIsFavorite = (state, productId) =>
    state.favoriteItems.items.some(item => item.id === productId);
export const selectFavoriteItems = state => state.favoriteItems.items;
