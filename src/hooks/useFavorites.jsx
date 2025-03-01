import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, selectFavorites, selectFavoritesQuantity } from '../redux/slices/sliceFavorites';

export const useFavorites = () => {
    const dispatch = useDispatch();

    // Получение избранных продуктов
    const favorites = useSelector(selectFavorites);

    // Получение количества избранных продуктов
    const favoritesQuantity = useSelector(selectFavoritesQuantity);

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
