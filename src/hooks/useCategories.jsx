import { useDispatch, useSelector } from 'react-redux';
import { updateCategories, selectCategories } from '../redux/slices/sliceCategories';

export const useCategories = () => {
    const dispatch = useDispatch();

    // Получение списка категорий
    const categories = useSelector(selectCategories);

    // Обновление списка категорий
    const setCategories = (newCategories) => {
        dispatch(updateCategories(newCategories));
    };

    return { categories, setCategories };
};
