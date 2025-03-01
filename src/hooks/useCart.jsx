import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeOneFromCart, removeAllFromCart } from '../redux/slices/sliceCart';

export const useCart = () => {
    const dispatch = useDispatch();

    // Получение данных корзины из хранилища
    const cart = useSelector(state => state.cart.cart);

    // Получение общей стоимости корзины из хранилища
    const total = useSelector(state => state.cart.total);

    // Получение количества уникальных продуктов в корзине из хранилища
    const quantity = useSelector(state => state.cart.quantity);

    // Добавление продукта в корзину
    const addProductToCart = (product) => {
        dispatch(addToCart(product));
    };

    // Удаление одного продукта из корзины
    const removeOneProductFromCart = (productId) => {
        dispatch(removeOneFromCart(productId));
    };

    // Удаление всех продуктов из корзины
    const removeAllProductFromCart = (productId) => {
        dispatch(removeAllFromCart(productId));
    };

    return { cart, total, quantity, addProductToCart, removeOneProductFromCart, removeAllProductFromCart };
};
