import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../redux/slices/sliceProducts';
import { useCallback } from 'react';
import { getAllDiscounts, getAllProducts } from '../services/baseBackEnd';

export const useProducts = () => {
    const dispatch = useDispatch();

    // Получение списка продуктов
    const products = useSelector((state) => state.products.products);

    // Обновление списка продуктов
    const setProducts = useCallback((productsList) => {
        dispatch(updateProducts(productsList));
    }, [dispatch]);

    // добавляюм в слайс все продукты
    const fetchAllProducts = useCallback(() => {
        getAllProducts()
            .then((data) => {
                dispatch(updateProducts(data));
            })
            .catch((error) => console.error("Ошибка при получении продуктов:", error));
    }, [dispatch]);

    // добавляюм в слайс все продукты со скидкой
    const fetchAllSales = useCallback(() => {
        getAllDiscounts()
            .then((data) => {
                dispatch(updateProducts(data));
            })
            .catch((error) => console.error("Ошибка при получении продуктов:", error));
    }, [dispatch]);

    return { products, setProducts, fetchAllProducts, fetchAllSales };
};
