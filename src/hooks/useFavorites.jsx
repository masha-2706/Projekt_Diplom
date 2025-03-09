import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/sliceFavorites';

export const useFavorites = () => {
    const dispatch = useDispatch();

    // Получение избранных продуктов
    const favorites = useSelector(state => state.favorites.favorites);

    // Получение количества избранных продуктов
    const favoritesQuantity = useSelector(state => state.favorites.quantity);

    // Добавление продукта в избранное
    const addToFavorites = (product) => {
        dispatch(addFavorite(product));
    };

    // Удаление продукта из избранного
    const removeFromFavorites = (productId) => {
        dispatch(removeFavorite(productId));
    };

    return { favorites, favoritesQuantity, addToFavorites, removeFromFavorites };
};
