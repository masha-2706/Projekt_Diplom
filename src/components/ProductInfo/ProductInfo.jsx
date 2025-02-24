import { useState } from "react"
import ProductInfoModal from "../ProductInfoModal/ProductInfoModal"
import s from './ProductInfo.module.css'

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
                    onClick={openCloseModal} />
            </div>
            <div className={`${s.title} ${s.box}`}>
                <h3>{title}</h3>
            </div>
            <div className={`${s.cart} ${s.box}`}>
                <p>{price}</p>
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
