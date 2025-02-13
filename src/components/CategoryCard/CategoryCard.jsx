import { useNavigate } from 'react-router';
import { BASE_URL } from '../../services/baseBackEnd';
import s from './CategoryCard.module.css';

export default function CategoryCard({ title, image, id }) {

    // При клике на карточку категории происходит переход 
    // на страницу с карточками товаров этой категории
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/category/${id}`)
    }


    return (
        <div className={s.categoryCard} onClick={handleClick}>
            <img src={`${BASE_URL}${image}`} alt={`Category ${title}`} />
            <h3>{title}</h3>
        </div>
    )
}
