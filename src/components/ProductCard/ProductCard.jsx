import { BASE_URL } from '../../services/baseBackEnd';
import { getDiscount } from '../../utils/cardRenderLogic';
import ProductIcons from '../ProductIcons/ProductIcons'
import s from './ProductCard.module.css'

export default function ProductCard({ title, image, price, discont_price }) {
    // Карточка товара
    // title - название товара
    // image - путь к изображению товара
    // price - цена товара
    // discont_price - цена со скидкой. Если не указана, то не отрисовывается оранжевый блок с % скидки

    // если есть скидка, то отображаем цену со скидкой
    const actualPrice = discont_price ? discont_price : price;

    return (
        <div className={s.productCard}>
            <div className={s.productCard_image}>
                <img src={`${BASE_URL}${image}`} alt={`Product ${title}`} />
            </div>
            <div className={s.productCard_icons}>
                <ProductIcons type={'like'} />
                <ProductIcons type={'cart'} />
            </div>

            {/* если есть скидка - отображаем блок скидки */}
            {discont_price && <div className={s.productCard_discount}><p>{`-${getDiscount(price, discont_price)}%`}</p></div>}

            {/* Блок заголовка и цены */}
            <div className={s.productCard_text}>
                <h3>{title}</h3>
                <div className={s.productCard_text_priceBlock}>
                    <p className={s.productCard_text_actualPrice}>{'$' + actualPrice}</p>
                    {/* если есть скидка - отображаем старую цену */}
                    {discont_price ? <p className={s.productCard_text_regularPrice}>{'$' + price}</p> : null}
                </div>

            </div>
        </div>
    )


}


