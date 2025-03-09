import { useNavigate, useLocation } from "react-router";
import { BASE_URL } from "../../services/baseBackEnd";
import { getDiscount } from "../../utils/cardRenderLogic";
import IconButton from "../ui/IconButton/IconButton";
import s from "./ProductCard.module.css";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";

export default function ProductCard({
    title,
    image,
    price,
    discont_price,
    id,
    categoryId
}) {
    // Карточка товара
    // title - название товара
    // image - путь к изображению товара
    // price - цена товара
    // discont_price - цена со скидкой. Если не указана, то не отрисовывается оранжевый блок с % скидки

    // если есть скидка, то отображаем цену со скидкой
    const actualPrice = discont_price ? discont_price : price;

    // При клике на карточку категории происходит переход
    // на страницу с карточками товаров этой категории
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {
        const isFromAllProducts = location.pathname.startsWith("/products");
    //проверка на переход 
        navigate(
            isFromAllProducts ? `/products/${id}` : `/categories/${categoryId}/${id}`,
            { state: { fromAllProducts: isFromAllProducts } }
        );
    };
    
    // проверка, есть ли товар в корзине
    const { cart } = useCart();
    const isInCart = cart.find((item) => item.id === id);

    // проверка, есть ли товар в избранном
    const { favorites } = useFavorites();
    const isFavorite = favorites.find((item) => item.id === id);

    return (
        <div className={s.productCard}>
            <div className={s.productCard_image} onClick={handleClick}>
                <img src={`${BASE_URL}${image}`} alt={`Product ${title}`} />
            </div>
            <div className={s.productCard_icons}>
                <IconButton
                    type="like"
                    variant="product"
                    isActive={isFavorite}
                    id={id}
                    product={{ id, title, image: image, price, discont_price }}
                />
                <IconButton
                    type="cart"
                    variant={"product"}
                    isActive={isInCart}
                    id={id}
                    product={{ id, title, image, price, discont_price }} />
            </div>

            {/* если есть скидка - отображаем блок скидки */}
            {discont_price && (
                <div className={s.productCard_discount}>
                    <p>{`-${getDiscount(price, discont_price)}%`}</p>
                </div>
            )}

            {/* Блок заголовка и цены */}
            <div className={s.productCard_text} onClick={handleClick}>
                <h3>{title}</h3>
                <div className={s.productCard_text_priceBlock}>
                    <p className={s.productCard_text_actualPrice}>{"$" + actualPrice}</p>
                    {/* если есть скидка - отображаем старую цену */}
                    {discont_price ? (
                        <p className={s.productCard_text_regularPrice}>{"$" + price}</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
