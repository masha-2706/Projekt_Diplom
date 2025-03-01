import { useLocation } from "react-router";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import Filter from "../components/ui/filter/Filter";
import { useEffect, useState } from "react";
import BlockTitle from "../components/BlockTitle/BlockTitle";
import { useProducts } from "../hooks/useProducts";
import { useFavorites } from "../hooks/useFavorites";

export default function CardsPage() {
    const path = useLocation().pathname.slice(1);
    const [checkbox, setCheckbox] = useState();
    const [title, setTitle] = useState('');
    const [array, setArray] = useState([]);
    const { products, fetchAllProducts, fetchAllSales } = useProducts();
    const { favorites } = useFavorites();


    useEffect(() => {
        switch (path) {
            case 'products':
                setTitle('All products');
                setCheckbox(true);
                fetchAllProducts();

                break;
            case 'sales':
                setTitle('Discounted items');
                setCheckbox(false);
                fetchAllSales();
                break;
            case 'favorites':
                setTitle('Liked products');
                setCheckbox(false);
                setArray(favorites);
                break;
            default:
                break;
        }
    }, [path, fetchAllProducts, fetchAllSales, favorites]);

    useEffect(() => {
        setArray(products);
        console.log(products);

    }, [products]);


    return (
        <main>
            {/* хлебные крошки */}
            <Breadcrumbs />
            <BlockTitle title={title} />
            <Filter checkbox={checkbox} />
            <CardsContainer array={array} />

        </main>
    )
}
