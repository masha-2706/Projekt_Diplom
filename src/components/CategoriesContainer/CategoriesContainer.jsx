import CategoryCard from "../CategoryCard/CategoryCard";
import s from './CategoriesContainer.module.css';

export default function CategoriesContainer({ array }) {
    return (
        <div className={s.categoriesContainer}>
            {array.map((item) => (
                <CategoryCard key={item.id} {...item} />
            ))}
        </div>
    )
}
