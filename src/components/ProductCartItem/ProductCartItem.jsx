import React from "react";
import ProductCount from "../ui/productCount/ProductCount";
import s from "./ProductCartItem.module.css";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../services/baseBackEnd";

const ProductCartItem = ({ product, quantity, onDelete }) => {
    const { id, categoryId, image, title, discont_price, price } = product;

    const { addProductToCart, removeOneProductFromCart } = useCart();

    const handleIncrement = () => {// передаем весь продукт для добавления в массив
        // Передаем продукт с фиксированным количеством 1
        addProductToCart({ ...product, quantity: 1 });
    };

    const handleDecrement = () => removeOneProductFromCart(id); // передаем только id и по нему уменьшаем количество


    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/categories/${categoryId}/${id}`);
    };

    const actual_price = discont_price != null
        ? Number(discont_price).toFixed(2)
        : Number(price).toFixed(2);

    return (
        <div className={s.productItem}>
            <img className={s.productItem_image} src={`${BASE_URL}${image}`} alt={title} onClick={handleClick} />

            <div className={s.productItem_description}>
                <div className={s.productItem_title}>
                    <p onClick={handleClick}>{title}</p>
                    <button onClick={() => onDelete(id)} className={s.productItem_closeBtn}>
                        ✖
                    </button>
                </div>
                <div className={s.productItem_container}>
                    {/* Отрисовка количества товара */}
                    <ProductCount quantity={quantity} increment={handleIncrement} decrement={handleDecrement} />
                    <div className={s.productItem_price}>
                        <>
                            <p className={s.actual_price}>${+actual_price}</p>
                            {discont_price && <p className={s.old_price}>${+price}</p>}
                        </>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCartItem;
