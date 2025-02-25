import { useState } from "react"
import ProductInfoModal from "../ProductInfoModal/ProductInfoModal"
import s from './ProductInfo.module.css'
import IconButton from "../ui/IconButton/IconButton"
import { getDiscount } from "../../utils/cardRenderLogic"
import ProductCount from "../ui/productCount/ProductCount"
import Button from "../ui/button/Button"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/slices/cartSlice"

export default function ProductInfo({ id, title, price, discont_price, description, image }) {
    const [showModal, setShowModal] = useState(false)
    const openCloseModal = () => {
        setShowModal(!showModal)
    }


    // состояние и функция скрытия части текста описания
    const [isTextHidden, setIsTextHidden] = useState(true)
    const readMoreClickHandler = () => setIsTextHidden(!isTextHidden)

    const discontAmount = getDiscount(price, discont_price)

    const [quantityToAdd, setQuantityToAdd] = useState(1)
    const quantityIncrement = () => setQuantityToAdd(quantityToAdd + 1)
    const quantityDecrement = () => { if (quantityToAdd > 1) { setQuantityToAdd(quantityToAdd - 1) } }

    // отправляем товары в корзину
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addProduct({
            id,
            title,
            price,
            discont_price,
            image,
            quantity: quantityToAdd,
        }));
    };

    // ожидается, что action.payload содержит: id, title, price, discont_price, image, и опционально quantity


    return (
        <section className={s.productInfoContainer}>

            {/* бокс с картинкой */}
            <div className={`${s.imageContainer} ${s.box}`}>
                <img
                    src={image}
                    alt={`Product ${title}`}
                    onClick={openCloseModal}
                />
                {/* % скидки для экранов шириной МЕНЬШЕ 480px */}
                {discont_price && (<div className={`${s.discountAmount}`}>
                    <p>{`-${discontAmount}%`}</p>
                </div>)}
            </div>

            {/* бокс с названием */}
            <div className={`${s.title} ${s.box}`}>
                <h2>{title}</h2>
                <IconButton type={'like'} variant={'product'} />
            </div>

            {/* бокс с ценой и интерфейсом добавления в корзину */}
            <div className={`${s.cart} ${s.box}`}>
                <div className={s.priceBlock}>
                    {!discont_price ?
                        (
                            <p className={s.price}>{`$${price}`}</p>
                        ) :
                        (
                            <>
                                <p className={s.price}>{`$${discont_price}`}</p>
                                <p className={s.oldPrice}>{`$${price}`}</p>
                                {/* % скидки для экранов шириной БОЛЬШЕ 480px */}
                                <div className={s.discountAmount}>
                                    <p>{`-${discontAmount}%`}</p>
                                </div>
                            </>
                        )}
                </div>
                <div className={s.addToCartBlock}>
                    <div className={s.ProductCount}>
                        <ProductCount quantity={quantityToAdd} increment={quantityIncrement} decrement={quantityDecrement} />
                    </div>
                    <div className={s.Button}>
                        <Button text='Add to cart' variant="shoppingCartOrder" onClick={handleAddToCart} />
                    </div>

                </div>
            </div>

            {/* бокс для описания */}
            <div className={`${s.description} ${s.box}`}>
                <h3>Description</h3>
                <p className={`${s.text} ${isTextHidden ? s.hidden : ''}`}>{description}</p>
                <p className={s.readMore} onClick={readMoreClickHandler}>{isTextHidden ? 'Read more' : 'Hide text'}</p>
            </div>

            {showModal && <ProductInfoModal
                image={image}
                title={title}
                openCloseModal={openCloseModal} />}

        </section>
    )
}
