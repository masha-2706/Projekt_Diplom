import s from './CategoriesContainer.module.css'
import { useEffect, useState } from "react"
import CategoryCard from '../CategoryCard/CategoryCard'

export default function CategoriesContainer({ quantity }) {

    const [array, setArray] = useState([])
    //Получение данных о категориях с сервера
    useEffect(() => {
        fetch(`http://localhost:3333/categories/all`)
            .then(response => response.json())
            .then(data => setArray(data))
    }, [])

    // Если quantity = 0, то отображаем все категории
    if (quantity === 0) {
        quantity = array.length
    }

    return (
        <div className={s.contentBlock_categoriesContainer}>
            {array
                .slice(0, quantity)
                .map(el => <CategoryCard
                    key={el.id}
                    title={el.title}
                    image={el.image} />)}
        </div>
    )
}
