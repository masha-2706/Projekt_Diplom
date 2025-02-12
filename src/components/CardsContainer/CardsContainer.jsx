import { useEffect, useState } from 'react'
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer'
import ProductContainer from '../ProductContainer/ProductContainer'
import s from './CardsContainer.module.css'

export default function CardsContainer({
    title = 'no title', // заголовок
    quantity = 0, // кол-во карточек для отображения. "0" чтобы отобразить всё
    type, // тип отображаемых данных
    navButton = false, // отображение кнопки навигации(true/false)
    filter = false // отображение интерфейса фильтрации и сортировки(true/false)
}) {
    // type - тип отображаемых данных. на текщий момент это могут быть:
    //      сategories - список категорий
    //      productsFrom - товары определенной категории
    //      productsAll - все товары 
    //      sales - товары со скидками

    const [apiData, setApiData] = useState([]) // какие данные будем отображать
    const [cardsType, setCardsType] = useState('') // тип карточек для отображения - категории или продукты

    useEffect(() => { }, [])


    return (
        <section className={s.CardsContainer}>
            {/* отрисовка заголовка и кнопки навигации */}
            <div className={s.CardsContainer_header}>
                <h2>{title}</h2>

                {/* если  navButton = true - отрисуется линия от заголовка и сам navButton */}
                {navButton && <div className={s.CardsContainer_header_line}></div>}

            </div>

            {/*отрисовка карточек в соответствии с типом */}
            {(type === 'categories')}

        </section>
    )
}
