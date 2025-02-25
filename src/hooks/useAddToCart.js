import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/cartSlice';

export function useAddToCart() {
    const dispatch = useDispatch();
    return (product) => dispatch(addProduct(product));
}
