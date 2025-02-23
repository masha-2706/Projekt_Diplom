import { useParams } from "react-router";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import { useSelector } from "react-redux";

export default function ProductsInCategory({
    breadCrumbs,
}) {
    // записал в category идентификатор из адреса
    const { category } = useParams();
    // достал список категорий из состояния
    const categoriesList = useSelector((state) => state.categories)
    // взял нужную категорию из списка и вписал название оттуда в title
    const title = categoriesList.filter(el => el.id === Number(category)).map(el => el.title)[0]

    return (
        <main>
            {/* хлебные крошки */}
            {breadCrumbs && <Breadcrumbs />}

            <CardsContainer
                title={title}
                type="productsFromCategory"
                filter={true}
                id={category}
            />
        </main>
    )
}
