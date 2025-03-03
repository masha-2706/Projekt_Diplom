import { useState } from "react";
import s from "./IconButton.module.css";
import { useNavigate } from "react-router";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { useRemoveAll } from "../../../hooks/useRemoveAll";

export default function IconButton({
  id,
  type,
  variant,
  count = 0,
  isActive,
  product,
  className
}) {
  // type - тип иконки (cart, like)
  // variant - вариант отображения (header, product)
  // count - количество товаров в корзине
  // isActive - активность иконки
  // onClick - обработчик клика

  // если компонент уже в корзине или избранном, то isActive = true.
  // В этом случае иконка окрашивается в зелёный цвет

  // defaultState нужен для хранения этого исходного состояния. в будущем будем получать информацию из состояния
  const [defaultState, setDefaultState] = useState(
    isActive ? s.active : s.default
  );

  // отслеживание наведения мыши (актуально только для variant "product")
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate(); // инициализация navigate для переходов

  // * Определяем базовый класс в зависимости от варианта отображения
  const baseClass = variant === "header" ? s.header : s.product;

  // Если иконка используется в продукте - изменение состояния НЕАКТИВНОГО элемента при наведении мыши
  let stateClass;
  if (variant === "product") {
    if (defaultState === s.active) {
      stateClass = s.active; // Если иконка активна, используем класс active
    } else {
      if (hovered) {
        stateClass = s.hovered; // Если иконка неактивна и наведена мышь, используем класс hovered
      } else {
        stateClass = s.default; // Если иконка неактивна и мышь не наведена, используем класс default
      }
    }
  } else {
    // Если иконка используется в header, просто используем стандартный класс
    stateClass = s.default;
  }

  // для header достаточно базового класса
  // для product комбинируем базовый класс с классом состояния
  const combinedClass =
    variant === "header" ? baseClass : `${baseClass} ${stateClass}`;

  // Инициализируем хуки для добавления и полного удаления товара из корзины
  const addOne = useAddToCart();
  const removeAll = useRemoveAll();

  const svgClickHandler = () => {
    if (variant === "product") {
      if (type === "like") {
      } else if (type === "cart") {
        // При клике на продукт добавляем 1 единицу товара в корзину
        // если товар уже есть в корзине,
        // то клик удаляет все единицы этого товара из корзины
        if (!isActive) {
          addOne(product);
          setDefaultState(s.active);
        } else {
          removeAll(id);
          setDefaultState(s.default);
        }
      }
    } else if (variant === "header") {
      // для header, клик перенаправляет на нужную страницу
      navigate(type === "like" ? "/favorites" : "/cart");
    }
  };

  // определяем, какую иконку отрисовать в зависимости от типа (like или cart)
  const renderIcon = () => {
    if (type === "like") {
      return (
        <svg
          viewBox="0 0 48 48"
          className={combinedClass}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path // сердце внутри иконки
            d="M39.4 32.2222C42.678 29.14 46 25.4456 46 20.6111C46 17.5317 44.7252 14.5783 42.456 12.4008C40.1868 10.2233 37.1091 9 33.9 9C30.028 9 27.3 10.0556 24 13.2222C20.7 10.0556 17.972 9 14.1 9C10.8909 9 7.8132 10.2233 5.54401 12.4008C3.27482 14.5783 2 17.5317 2 20.6111C2 25.4667 5.3 29.1611 8.6 32.2222L24 47L39.4 32.2222Z"  
          />
        </svg>
      );
    } else if (type === "cart") {
      return (
        <svg
          viewBox="0 0 48 48"
          className={combinedClass} 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            
            d="M26 0C20.4961 0 16.0565 4.37372 16.0565 9.79592V11.7551H8.19492L8.10169 12.6122L4.12429 46.898L4 48H48L47.8757 46.898L43.8983 12.6122L43.8051 11.7551H35.9435V9.79592C35.9435 4.37372 31.5039 0 26 0ZM26 1.95918C30.4396 1.95918 33.9548 5.42219 33.9548 9.79592V11.7551H18.0452V9.79592C18.0452 5.42219 21.5604 1.95918 26 1.95918ZM9.99717 13.7143H16.0565V15.949C15.4622 16.2895 15.0621 16.9094 15.0621 17.6327C15.0621 18.7156 15.9516 19.5918 17.0508 19.5918C18.1501 19.5918 19.0395 18.7156 19.0395 17.6327C19.0395 16.9094 18.6395 16.2895 18.0452 15.949V13.7143H33.9548V15.949C33.3605 16.2895 32.9605 16.9094 32.9605 17.6327C32.9605 18.7156 33.8499 19.5918 34.9492 19.5918C36.0484 19.5918 36.9379 18.7156 36.9379 17.6327C36.9379 16.9094 36.5378 16.2895 35.9435 15.949V13.7143H42.0028L45.7627 46.0408H6.23729L9.99717 13.7143Z"
            fill="currentColor"
            strokeWidth={0}
          /> */}

          <path 
          className={s.cartContour}
           d="M40.5 13H7L3 47H44.5L40.5 13Z" 
         
           /> 
          <path 
           className={s.cartContour}
                         d="M24 0C18.4961 0 14.0565 4.37372 14.0565 9.79592V11.7551H6.19492L6.10169 12.6122L2.12429 46.898L2 48H46L45.8757 46.898L41.8983 12.6122L41.8051 11.7551H33.9435V9.79592C33.9435 4.37372 29.5039 0 24 0ZM24 1.95918C28.4396 1.95918 31.9548 5.42219 31.9548 9.79592V11.7551H16.0452V9.79592C16.0452 5.42219 19.5604 1.95918 24 1.95918ZM7.99717 13.7143H14.0565V15.949C13.4622 16.2895 13.0621 16.9094 13.0621 17.6327C13.0621 18.7156 13.9516 19.5918 15.0508 19.5918C16.1501 19.5918 17.0395 18.7156 17.0395 17.6327C17.0395 16.9094 16.6395 16.2895 16.0452 15.949V13.7143H31.9548V15.949C31.3605 16.2895 30.9605 16.9094 30.9605 17.6327C30.9605 18.7156 31.8499 19.5918 32.9492 19.5918C34.0484 19.5918 34.9379 18.7156 34.9379 17.6327C34.9379 16.9094 34.5378 16.2895 33.9435 15.949V13.7143H40.0028L43.7627 46.0408H4.23729L7.99717 13.7143Z" 
fill="currentColor"
          strokeWidth={0}
          />
        </svg>
      );
    }
    return null; // * Возвращаем null, если вдруг type не соответствует "like" или "cart"
  };

  return (
    <div
      className={s.icon}
      onClick={svgClickHandler}
      onMouseEnter={() => variant === "product" && setHovered(true)} // если variant равен "product", то при наведении мыши меняем состояние hovered на true
      onMouseLeave={() => variant === "product" && setHovered(false)} // если variant равен "product", то при уходе мыши меняем состояние hovered на false
    >
      {renderIcon()}
      {variant === "header" && count > 0 && (
        <div className={s.counter}>{count}</div>
      )}
    </div>
  );
}
