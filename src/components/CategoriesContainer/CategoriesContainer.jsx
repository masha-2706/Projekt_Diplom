import s from './CategoriesContainer.module.css'
import { useEffect, useState } from "react"
import CategoryCard from '../CategoryCard/CategoryCard'
import { getAllCategories } from '../../services/baseBackEnd';

export default function CategoriesContainer({ quantity }) {

    const [array, setArray] = useState([])
    //Получение данных о категориях с сервера
    useEffect(() => { getAllCategories().then(data => setArray(data)) }, []);

    // Если quantity = 0, то отображаем все категории
    if (quantity === 0) {
        quantity = array.length
    }

    return (
        <div className={s.CardsContainer_categoriesContainer}>
            {array
                .slice(0, quantity)
                .map(el => <CategoryCard
                    key={el.id}
                    title={el.title}
                    image={el.image} />)}
        </div>
    )
}
