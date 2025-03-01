import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../redux/slices/sliceProducts';

export const useProducts = () => {
    const dispatch = useDispatch();

    // Получение списка продуктов
    const products = useSelector((state) => state.products.products);

    // Обновление списка продуктов
    const setProducts = (productsList) => {
        dispatch(updateProducts(productsList));
    };

    return { products, setProducts };
};
