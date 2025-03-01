import { useParams } from "react-router";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import BlockTitle from "../components/BlockTitle/BlockTitle";
import { useEffect, useState } from "react";
import { getProductsByCategoryId } from "../services/baseBackEnd";
import { useProducts } from "../hooks/useProducts";
import Filter from "../components/ui/filter/Filter";
import { useFilters } from "../hooks/useFilters";
import { applyFilterLogic } from "../utils/applyFilterLogic";
import CardsContainer from "../components/CardsContainer/CardsContainer";

export default function ProductsInCategory() {
    const { category } = useParams();
    const categoryId = Number(category);
    const [title, setTitle] = useState("No title");

    // обновляю слайс продуктов
    const { products, setProducts } = useProducts();
    const [array, setArray] = useState([]);
    useEffect(() => {
        getProductsByCategoryId(categoryId)
            .then((data) => {
                setProducts(data.data);
                setTitle(data.category.title);
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
