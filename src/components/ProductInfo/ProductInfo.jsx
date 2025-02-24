import { useState } from "react"
import ProductInfoModal from "../ProductInfoModal/ProductInfoModal"
import s from './ProductInfo.module.css'
import IconButton from "../ui/IconButton/IconButton"
import { getDiscount } from "../../utils/cardRenderLogic"

export default function ProductInfo({ title, price, discont_price, description, image }) {
    const [showModal, setShowModal] = useState(false)
    const openCloseModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div className={s.productInfoContainer}>

            <div className={`${s.imageContainer} ${s.box}`}>
                <img
                    src={image}
                    alt={`Product ${title}`}
                    onClick={openCloseModal}
                />
                <div className={`${s.discountAmountOnImage} ${s.discountAmount}`}>
                    <p>{`-${getDiscount(price, discont_price)}%`}</p>
                </div>
            </div>

            <div className={`${s.title} ${s.box}`}>
                <h2>{title}</h2>
                <IconButton type={'like'} variant={'product'} />
            </div>

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
                                <div className={s.discountAmount}>
                                    <p>{`-${getDiscount(price, discont_price)}%`}</p>
                                </div>
                            </>
                        )}
                </div>
                <div className={s.addToCartBlock}>

                </div>
            </div>

            <div className={`${s.description} ${s.box}`}>
                <p>{description}</p>
            </div>

            {showModal && <ProductInfoModal
                image={image}
                title={title}
                openCloseModal={openCloseModal} />}

        </div>
    )
}
