import CategoriesContainer from '../CategoriesContainer/CategoriesContainer'
import NavigationButton from '../NavigationButton/NavigationButton'
import ProductContainer from '../ProductContainer/ProductContainer'
import s from './ContentBlock.module.css'

export default function ContentBlock({ title, quantity, type, navigationButtonLabel }) {
    // quantity - кол-во карточек для отображения. "0" чтобы отобразить всё
    // type - тип отображаемых данных. на текщий момент это могут быть:
    //      сategories - список категорий
    //      sales - товары со скидками
    // navigationButtonLabel - название кнопки справа от заголовка




    return (
        <section className={s.contentBlock}>
            {/* отрисовка заголовка и кнопки навигации */}
            <div className={s.contentBlock_header}>
                <h2>{title}</h2>
                <div className={s.contentBlock_header_line}></div>
                <NavigationButton title={navigationButtonLabel} />
            </div>

            {/*отрисовка контейнера в соответствии с типом */}
            {type === 'сategories' && <CategoriesContainer quantity={quantity} />}
            {type === 'sales' && <ProductContainer category='sales' quantity={quantity} />}
            {typeof type === 'number' && <ProductContainer category={type} quantity={quantity} />}

        </section>
    )
}
