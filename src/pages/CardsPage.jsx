import CardsContainer from "../components/CardsContainer/CardsContainer";

export default function CardsPage({ title = 'no title', quantity = 0, type, breadCrumbs = false, navButton = false, filter = false }) {
    // пояснения по пропсам
    // filter - нужно ли отображать интерфейс фильтрации и сортировки карточек (true/false)
    // остальные пропсы - см. в CardsContainer


    return (
        <div>
            {/* хлебные крошки */}
            <CardsContainer title='' type={'сategories'} />

        </div>
    )
}
