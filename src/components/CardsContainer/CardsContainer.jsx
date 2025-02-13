import { useEffect, useState } from 'react'
import s from './CardsContainer.module.css'
import { getAllCategories, getAllProducts } from '../../services/baseBackEnd'
import CategoryCard from '../CategoryCard/CategoryCard'
import ProductCard from '../ProductCard/ProductCard'
import { getRandomArray } from '../../utils/GetRandomArray'

export default function CardsContainer({
    title = 'no title', // заголовок
    quantity = 0, // кол-во карточек для отображения. "0" чтобы отобразить всё
    type, // тип отображаемых данных
    navButton = false, // отображение кнопки навигации(true/false)
    filter = false, // отображение интерфейса фильтрации и сортировки(true/false)
    id = 0
}) {
    // type - тип отображаемых данных. на текщий момент это могут быть:
    //      сategories - список категорий
    //      productsFrom - товары определенной категории
    //      productsAll - все товары 
    //      sales - товары со скидками
    //      randomSales - случайные товары со скидками


    const [array, setArray] = useState([]) // массив данных для отображения

    // получение с сервера соответствующего массива данных в зависимости от типа
    useEffect(() => {
        if (type === 'categories') {
            getAllCategories()
                .then(data => {
                    if (quantity !== 0) {
                        setArray(data.slice(0, quantity))
                    } else {
                        setArray(data)
                    }
                })
        }

        else if (type === 'randomSales') {
            getAllProducts()
                .then(data => {
                    const sales = data.filter(item => item.discont_price !== null)
                    if (quantity !== 0) {
                        setArray(getRandomArray(sales, quantity))
                    } else {
                        setArray(sales)
                    }
                })
        }


        // добавить сюда логику получения других запросов



    }, [type, id, quantity])

    return (
        <section className={s.CardsContainer}>
            {/* отрисовка заголовка и кнопки навигации */}
            <div className={s.CardsContainer_header}>
                <h2>{title}</h2>

                {/* если  navButton = true - отрисуется линия от заголовка и сам navButton */}
                {navButton && <div className={s.CardsContainer_header_line}></div>}

            </div>
            {/* отрисовка карточек */}
            <div className={s.CardsContainer_container}>
                {type === 'categories' &&
                    array.map(item =>
                        <CategoryCard
                            key={item.id}
                            title={item.title}
                            image={item.image}
                        />)
                }

                {type === 'randomSales' &&
                    array.map(item =>
                        <ProductCard
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            discont_price={item.discont_price}
                        />)
                }
            </div>

        </section>
    )
}
