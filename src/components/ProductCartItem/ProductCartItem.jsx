import React from "react";
import ProductCount from "../ui/productCount/ProductCount";
import s from "./ProductCartItem.module.css";
import { useAddToCart } from "../../hooks/useAddToCart";
import { useRemoveOne } from "../../hooks/useRemoveOne";
import { useNavigate } from "react-router";

const ProductCartItem = ({ product, quantity, onDelete }) => {
    const { id, categoryId, image, title, discont_price, price } = product;

    const addOne = useAddToCart();
    const removeOne = useRemoveOne();

    const handleIncrement = () => {// передаем весь продукт для добавления в массив
        // Передаем продукт с фиксированным количеством 1
        addOne({ ...product, quantity: 1 });
    };

    const handleDecrement = () => removeOne(id); // передаем только id и по нему уменьшаем количество
    
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/categories/${categoryId}/${id}`);
    };
    
    
    return (
        <div className={s.productItem}>
            <img className={s.productItem_image} src={image} alt={title} onClick={handleClick}/>

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
                        {discont_price ? (
                            <>
                                <p className={s.actual_price}>${discont_price}</p>
                                <p className={s.old_price}>${price}</p>
                            </>
                        ) : (
                            <p className={s.actual_price}>${price}</p>
                        )}
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default ProductCartItem;
