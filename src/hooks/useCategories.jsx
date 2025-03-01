import { useDispatch, useSelector } from 'react-redux';
import { updateCategories } from '../redux/slices/sliceCategories';

export const useCategories = () => {
    const dispatch = useDispatch();

    // Получение списка категорий
    const categories = useSelector((state) => state.categories.categories);

    // Обновление списка категорий
    const setCategories = (newCategories) => {
        dispatch(updateCategories(newCategories));
    };

    return { categories, setCategories };
};
