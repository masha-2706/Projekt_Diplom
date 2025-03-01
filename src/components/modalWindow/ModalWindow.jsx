import React, { useState, useEffect } from "react";
import styles from "./ModalWindow.module.css";
import { useDispatch } from "react-redux";
import { BASE_URL, getAllProducts } from "../../services/baseBackEnd";
import { getRandomArray } from "../../utils/cardRenderLogic";
import { addProduct } from "../../redux/slices/cartSlice";
import IconButton from "../ui/IconButton/IconButton";
import Button from "../ui/button/Button";


const RandomProductModal = ({ onClose }) => {
    // состояние для хранения случайного продукта
    const [randomProduct, setRandomProduct] = useState(null);
    // состояние для хранения списка всех продуктов
    const [products, setProducts] = useState([]);
    // инициализируем dispatch для работы с Redux
    const dispatch = useDispatch(); 

    // путь к иконке закрытия модального окна
    const closeIcon = "/media/closeIcon/closeIcon.png";

    // загружаем список всех продуктов при монтировании компонента
    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    // выбираем случайный продукт после загрузки списка
    useEffect(() => {
        if (products.length > 0) {
            const [product] = getRandomArray(products, 1); // выбираем один случайный продукт
            setRandomProduct(product);
        }
    }, [products]);

    // обработчик добавления товара в корзину
    const handleAddToCart = () => {
        if (!randomProduct) return;
        dispatch(addProduct({
            id: randomProduct.id,
            title: randomProduct.title,
            price: randomProduct.price,
            discont_price: (randomProduct.price / 2).toFixed(2), // применяем скидку 50%
            image: randomProduct.image,
            quantity: 1, // добавляем 1 единицу товара в корзину
        }));
    };

    return (
        randomProduct && (
            <div className={styles.modal}>
                <div className={styles.modal__container}>
                    {/* кнопка закрытия модального окна */}
                    <button className={styles.modal__closeButton} onClick={onClose}>
                        <img src={closeIcon} alt="Close" className={styles.modal__closeIcon} />
                    </button>

                    {/* заголовок модального окна */}
                    <h2 className={styles.modal__title}>50% discount on product of the day!</h2>

                    <div className={styles.modal__content}>
                        <div className={styles.modal__topRow}>
                            {/* стикер со скидкой */}
                            <div className={`${styles.modal__discount} ${styles.modal__discountOrange}`}>
                                -50%
                            </div>
                            {/* кнопка "лайк" для продукта */}
                            <div className={styles.modal__like}>
                                <IconButton id={randomProduct.id} type="like" variant="product" isActive={false} />
                            </div>
                        </div>

                        {/* изображение продукта */}
                        <img
                            src={`${BASE_URL}${randomProduct.image}`}
                            alt={randomProduct.title || "No Title"}
                            className={styles.modal__image}
                        />

                        {/* разделительная линия */}
                        <div className={styles.modal__divider}></div>

                        {/* название продукта */}
                        <h2 className={styles.modal__productName}>{randomProduct.title || "No Title"}</h2>

                        {/* блок с ценами */}
                        <div className={styles.modal__priceContainer}>
                            <p className={styles.modal__priceNew}>${(randomProduct.price / 2).toFixed(2)}</p>
                            <p className={styles.modal__priceOld}>${randomProduct.price}</p>
                        </div>
                    </div>

                    {/* кнопка добавления товара в корзину */}
                    <div className={styles.modal__buttonContainer}>
                        <Button text="Add to cart" variant="modulWindowBtn" onClick={handleAddToCart} />
                    </div>
                </div>
            </div>
        )
    );
};

export default RandomProductModal;

