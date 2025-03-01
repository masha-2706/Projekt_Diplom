import { useDispatch, useSelector } from 'react-redux';
import { updateProducts, selectProducts, selectCategoryTitle } from '../redux/slices/sliceProducts';

export const useProducts = () => {
    const dispatch = useDispatch();

    // Получение списка продуктов
    const products = useSelector(selectProducts);

    // Получение заголовка категории
    const categoryTitle = useSelector(selectCategoryTitle);

    // Обновление списка продуктов
    const setProducts = (productsList) => {
        dispatch(updateProducts(productsList));
    };

    return { products, categoryTitle, setProducts };
};
