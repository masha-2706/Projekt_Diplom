import { useDispatch } from 'react-redux';
import { removeAllProduct } from '../redux/slices/cartSlice';

export function useRemoveAll() {
    const dispatch = useDispatch();
    return (id) => dispatch(removeAllProduct(id));
}
