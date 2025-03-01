import { useParams } from "react-router";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import BlockTitle from "../components/BlockTitle/BlockTitle";
import { useCategories } from "../hooks/useCategories";
import { useEffect, useState } from "react";
import { getAllCategories, getProductsByCategoryId } from "../services/baseBackEnd";
import { useProducts } from "../hooks/useProducts";
import Filter from "../components/ui/filter/Filter";
import { useFilters } from "../hooks/useFilters";
import { applyFilterLogic } from "../utils/applyFilterLogic";
import CardsContainer from "../components/CardsContainer/CardsContainer";

export default function ProductsInCategory() {
    const { category } = useParams();
    const categoryId = Number(category);
    const { setCategories } = useCategories();
    const [title, setTitle] = useState("No title");

    // обновляю слайса категорий и получение названия нужной категории
    useEffect(() => {
        getAllCategories()
            .then((data) => {
                setCategories(data);
                const currentCategory = data.find((item) => item.id === categoryId);
                setTitle(currentCategory ? currentCategory.title : "No title");
            })
            .catch((error) => console.error("Ошибка при получении категорий:", error));
    }, [categoryId, setCategories]);

    const { products, setProducts } = useProducts();
    const [array, setArray] = useState([]);

    // обновляю слайс продуктов
    useEffect(() => {
        getProductsByCategoryId(categoryId)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error("Ошибка при получении продуктов:", error));
    }, [categoryId, setProducts]);

    // получаю текущие фильтры из слайса filtersSlice и применяю их к продуктам
    const { filters } = useFilters();
    useEffect(() => {
        setArray(applyFilterLogic(products, filters));
    }, [products, filters]);

    return (
        <main>
            <Breadcrumbs />
            <BlockTitle title={title} />
            <Filter />
            <CardsContainer array={array} />
        </main>
    );
}
