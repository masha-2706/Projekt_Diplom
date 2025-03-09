import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeOneFromCart, removeAllFromCart } from '../redux/slices/sliceCart';

export const useCart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.cart);
    const totalQuantity = cart.length;
    const totalSum = useSelector(state => state.cart.totalSum);

    const addProductToCart = (product) => {
        dispatch(addToCart(product));
    };

    const removeOneProductFromCart = (productId) => {
        dispatch(removeOneFromCart(productId));
    };

    const removeAllProductFromCart = (productId) => {
        dispatch(removeAllFromCart(productId));
    };

    return { cart, totalQuantity, totalSum, addProductToCart, removeOneProductFromCart, removeAllProductFromCart };
};
