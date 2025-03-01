import { useParams } from "react-router";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import BlockTitle from "../components/BlockTitle/BlockTitle";
import { useCategories } from "../hooks/useCategories";
import { useEffect, useState } from "react";
import { getAllCategories, getProductsByCategoryId } from "../services/baseBackEnd";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "../components/ui/filter/Filter";

export default function ProductsInCategory() {
    const { category } = useParams();
    const categoryId = Number(category);
    const { setCategories } = useCategories();
    const [title, setTitle] = useState("No title");

    // обновляю слайс категорий и получаю название нужной категории
    useEffect(() => {
        getAllCategories()
            .then((data) => {
                setCategories(data); // обновляю слайс категорий
                const currentCategory = data.find((item) => item.id === categoryId); // нахожу нужную категорию
                setTitle(currentCategory ? currentCategory.title : "No title"); // устанавливаю название категории
            })
            .catch((error) => console.error("Ошибка при получении категорий:", error));
    }, [categoryId, setCategories]);

    const { setProducts } = useProducts();
    const [array, setArray] = useState([]);
    // обновляю слайс продуктов, отправляя в него продукты нужной категории
    useEffect(() => {
        getProductsByCategoryId(categoryId)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error("Ошибка при получении продуктов:", error));
    }, [categoryId, setProducts]);




    return (
        <main>
            <Breadcrumbs />
            <BlockTitle title={title} />
            <Filter setArray={setArray} />
            {array.map((product) => (<ProductCard key={product.id} {...product} />))}
        </main>
    );
}
