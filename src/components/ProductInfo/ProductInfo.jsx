import { useState } from "react";
import ProductInfoModal from "../ProductInfoModal/ProductInfoModal";
import s from "./ProductInfo.module.css";
import IconButton from "../ui/IconButton/IconButton";
import { getDiscount } from "../../utils/cardRenderLogic";
import ProductCount from "../ui/productCount/ProductCount";
import Button from "../ui/button/Button";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";
import { BASE_URL } from "../../services/baseBackEnd";

export default function ProductInfo({
  id,
  title,
  price,
  discont_price,
  description,
  image
}) {
  const [showModal, setShowModal] = useState(false);
  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  // состояние и функция скрытия части текста описания
  const [isTextHidden, setIsTextHidden] = useState(true);
  const readMoreClickHandler = () => setIsTextHidden(!isTextHidden);

  const discontAmount = getDiscount(price, discont_price);

  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const quantityIncrement = () => setQuantityToAdd(quantityToAdd + 1);
  const quantityDecrement = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(quantityToAdd - 1);
    }
  };

  // отправляем товары в корзину
  const { addProductToCart } = useCart();
  const handleAddToCart = () => {
    addProductToCart({
      id,
      title,
      price,
      discont_price,
      image,
      quantity: quantityToAdd
    });
  };

  // проверка, есть ли товар в избранном
  const { favorites } = useFavorites();
  const isFavorite = favorites.find((item) => item.id === id) ? true : false;

  return (
    <section className={s.productInfo_container}>
      {/* бокс с картинкой */}
      <div className={s.productInfo_image}>
        <img
          src={`${BASE_URL}${image}`}
          alt={`Product ${title}`}
          onClick={openCloseModal}
        />
      </div>

      <div className={s.productInfo_infoBlock}>
        {/* бокс с названием и сердечком*/}
        <div className={s.productInfo_title}>
          <h2>{title}</h2>
          <IconButton
            type="like"
            variant="product"
            isActive={isFavorite}
            id={id}
            product={{ id, title, image, price, discont_price }}
          />
        </div>

        {/* бокс с ценой и интерфейсом добавления в корзину */}
        <div className={s.productInfo_priceBlock_wrapper}>
          <div className={s.productInfo_priceBlock}>
            {!discont_price ? (
              <p className={s.productInfo_priceBlock_price}>{`$${price}`}</p>
            ) : (
              <>
                <p
                  className={s.productInfo_priceBlock_price}
                >{`$${discont_price}`}</p>
                <p
                  className={s.productInfo_priceBlock_oldPrice}
                >{`$${price}`}</p>
                {/* % скидки для экранов шириной БОЛЬШЕ 480px */}
                <div className={s.discountAmount}>
                  <p>{`-${discontAmount}%`}</p>
                </div>
              </>
            )}
          </div>

          <div className={s.productInfo_addToCartBlock}>
            <div className={s.addToCartBlock_ProductCount}>
              <ProductCount
                quantity={quantityToAdd}
                increment={quantityIncrement}
                decrement={quantityDecrement}
              />
            </div>
            <div className={s.addToCartBlock_button}>
              <Button
                text="Add to cart"
                variant="productInfo"
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>

       {/* бокс для описания */}
       <div className={`${s.description} ${s.box} `}>
          <div className={s.hidden_desc}>
          <h3>Description</h3>
          <p className={`${s.text} ${isTextHidden ? s.hidden : ""}`}>
            {description}
          </p>
          <p className={s.readMore} onClick={readMoreClickHandler}>
            {isTextHidden ? "Read more" : "Hide text"}
          </p>
          </div>
        </div>
      </div>


        {/* бокс для описания для экранов шириной МЕНЬШЕ 768px*/}
        <div className={`${s.description} ${s.box} `}>
          <div className={s.desc_media}>
          <h3>Description</h3>
          <p className={`${s.text} ${isTextHidden ? s.hidden : ""}`}>
            {description}
          </p>
          <p className={s.readMore} onClick={readMoreClickHandler}>
            {isTextHidden ? "Read more" : "Hide text"}
          </p>
          </div>
        </div>


      {showModal && (
        <ProductInfoModal
          image={image}
          title={title}
          openCloseModal={openCloseModal}
        />
      )}

      {/* % скидки для экранов шириной МЕНЬШЕ 480px */}
      {/* {discont_price && (
                  <div className={`${s.discountAmount}`}>
                    <p>{`-${discontAmount}%`}</p>
                  </div>
                )} */}
    </section>
  );
}
