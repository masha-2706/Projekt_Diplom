import { BASE_URL } from '../../services/baseBackEnd';
import s from './CategoryCard.module.css';

export default function CategoryCard({ title, image }) {
    return (
        <div className={s.categoryCard}>
            <img src={`${BASE_URL}${image}`} alt={`Category ${title}`} />
            <h3>{title}</h3>
        </div>
    )
}
