import s from './ProductInfoModal.module.css'

export default function ProductInfoModal({ image, title, openCloseModal }) {
    return (
        <div className={s.modal} onClick={openCloseModal}>
            <img
                src={image}
                alt={title}
                onClick={(e) => e.stopPropagation()} //чтобы клик на изображении его не закрывал
            />
        </div>
    )
}
