import s from './CategoryCard.module.css';

export default function CategoryCard({ title, image }) {
    return (
        <div className={s.categoryCard}>
            <img src={`http://localhost:3333${image}`} alt={`Category ${title}`} />
            <h3>{title}</h3>
        </div>
    )
}
