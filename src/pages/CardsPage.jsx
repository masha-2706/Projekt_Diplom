import { useParams } from "react-router-dom";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";

export default function CardsPage({
    title = 'no title',
    quantity = 0,
    type,
    breadCrumbs = false,
    navButton = false,
    filter = false
}) {
    // пояснения по пропсам
    // filter - нужно ли отображать интерфейс фильтрации и сортировки карточек (true/false)
    // остальные пропсы - см. в CardsContainer

    const { category } = useParams();

    return (
        <main>
            {/* хлебные крошки */}
            {breadCrumbs && <Breadcrumbs />}

            {/* контейнер с карточками */}

            <CardsContainer
                title={title}
                quantity={quantity}
                type={type}
                breadCrumbs={breadCrumbs}
                navButton={navButton}
                filter={filter}
                id={category}

            />

        </main>
    )
}
