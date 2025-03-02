import ProductCard from '../ProductCard/ProductCard'
import s from './CardsContainer.module.css'

export default function CardsContainer({ array }) {
  // Контейнер для отрисовки карточек

  return (
    <div className={s.CardsContainer}>
      {array.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
