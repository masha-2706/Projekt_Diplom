import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategoriesList, setProductsList } from "../redux/slices/categoriesAndProductsList";
import { getAllCategories, getAllProducts } from "../services/baseBackEnd";

export const useInitializeData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadData() {
            const dataCategories = await getAllCategories();
            const categoriesList = dataCategories.map(category => ({ id: category.id, title: category.title }));
            dispatch(setCategoriesList(categoriesList));

            const dataProducts = await getAllProducts();
            const productsList = dataProducts.map(product => ({ id: product.id, title: product.title }));
            dispatch(setProductsList(productsList));
            console.log(productsList);
        }
        loadData();
    }, [dispatch]);
};
