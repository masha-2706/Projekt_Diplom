import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import s from "./ProductContainer.module.css";
import { getRandomArray } from "../../utils/cardRenderLogic";

export default function ProductContainer({ category, quantity }) {
    // category - категория товаров, которую нужно отобразить
    // Если category = 'sales', то отображаем товары со скидками
    // Если указан id категории, то отображаем товары этой категории

    const [products, setProducts] = useState([]); // исходные данные
    const [filteredProducts, setFilteredProducts] = useState([]); // отфильтрованные данные

    //Получение данных о всех продуктах с сервера
    useEffect(() => {
        getAllProducts().then(data => setProducts(data));
    }, []);




    // фильтрация массива в зависимости от категории 
    // (товары со скидкой или товары по id категории)
    useEffect(() => {
        let filtered = products;

        if (category === 'sales') {
            filtered = products.filter(product => product.discont_price != null);
        } else if (parseInt(category)) {
            filtered = products.filter(product => product.categoryId === parseInt(category));
        }


        // Если quantity = 0, то отображаем все категории
        if (quantity === 0) {
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(getRandomArray(filtered, quantity));
        }
    }, [products, category, quantity]);

    return (
        <div className={s.productContainer}>
            {filteredProducts.map(product => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    discont_price={product.discont_price}
                />
            ))}
        </div>
    );
}
