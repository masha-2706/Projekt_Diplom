import React, { useState, useEffect } from "react";
import styles from "./ModalWindow.module.css";
import { useDispatch } from "react-redux";
import { BASE_URL, getAllProducts } from "../../services/baseBackEnd";
import { getRandomArray } from "../../utils/cardRenderLogic";
import { addProduct } from "../../redux/slices/cartSlice";
import IconButton from "../ui/IconButton/IconButton";
import Button from "../ui/button/Button";


const RandomProductModal = ({ onClose }) => {
    const [randomProduct, setRandomProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch(); 

    const closeIcon = "/media/closeIcon/closeIcon.png";

    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const [product] = getRandomArray(products, 1);
            setRandomProduct(product);
        }
    }, [products]);

    const handleAddToCart = () => {
        if (!randomProduct) return;
        dispatch(addProduct({
            id: randomProduct.id,
            title: randomProduct.title,
            price: randomProduct.price,
            discont_price: (randomProduct.price / 2).toFixed(2),
            image: randomProduct.image,
            quantity: 1, 
        }));
    };

    return (
        randomProduct && (
            <div className={styles.modal}>
                <div className={styles.modal__container}>
                    <button className={styles.modal__closeButton} onClick={onClose}>
                        <img src={closeIcon} alt="Close" className={styles.modal__closeIcon} />
                    </button>

                    <h2 className={styles.modal__title}>50% discount on product of the day!</h2>

                    <div className={styles.modal__content}>
                        <div className={styles.modal__topRow}>
                            <div className={`${styles.modal__discount} ${styles.modal__discountOrange}`}>
                                -50%
                            </div>
                            <div className={styles.modal__like}>
                                <IconButton id={randomProduct.id} type="like" variant="product" isActive={false} />
                            </div>
                        </div>

                        <img
                            src={`${BASE_URL}${randomProduct.image}`}
                            alt={randomProduct.title || "No Title"}
                            className={styles.modal__image}
                        />

                        <div className={styles.modal__divider}></div>

                        <h2 className={styles.modal__productName}>{randomProduct.title || "No Title"}</h2>

                        <div className={styles.modal__priceContainer}>
                            <p className={styles.modal__priceNew}>${(randomProduct.price / 2).toFixed(2)}</p>
                            <p className={styles.modal__priceOld}>${randomProduct.price}</p>
                        </div>
                    </div>

                    <div className={styles.modal__buttonContainer}>
                        <Button text="Add to cart" variant="modulWindowBtn" onClick={handleAddToCart} />
                    </div>
                </div>
            </div>
        )
    );
};

export default RandomProductModal;

