import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilters } from '../redux/slices/sliceFilters';

export const useFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filter);

    const updateFilter = (filterObj) => {
        dispatch(setFilter(filterObj));
    };

    const reset = () => {
        dispatch(resetFilters());
    };

    return { filters, updateFilter, reset };
};
