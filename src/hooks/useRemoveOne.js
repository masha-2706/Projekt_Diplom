import { useDispatch } from 'react-redux';
import { removeOneProduct } from '../redux/slices/cartSlice';

export function useRemoveOne() {
    const dispatch = useDispatch();
    return (id) => dispatch(removeOneProduct(id));
}
