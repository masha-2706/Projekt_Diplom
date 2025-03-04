import { useDispatch, useSelector } from "react-redux";
import { updateCategories } from "../redux/slices/sliceCategories";
import { getAllCategories } from "../services/baseBackEnd";
import { useCallback } from "react";

export const useCategories = () => {
  const dispatch = useDispatch();

  // Получение списка категорий
  const categories = useSelector((state) => state.categories.categories);

  //если не обернуть в useCallback, то
  // fetchCategories вызывается бесконечным циклом
  const fetchCategories = useCallback(() => {
    getAllCategories()
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error(
            "Получен некорректный формат данных. (hook useCategories)"
          );
        }
        dispatch(updateCategories(data));
      })
      .catch((error) =>
        console.error("Ошибка при получении категорий:", error)
      );
  }, [dispatch]);

  return { categories, fetchCategories };
};
