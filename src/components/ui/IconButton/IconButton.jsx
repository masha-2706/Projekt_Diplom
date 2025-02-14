import { useEffect, useState } from "react";
import s from "./IconButton.module.css";
import { useNavigate } from "react-router";

// Original comments are preserved; my additional comments are marked with “// *”
export default function IconButton({ type, variant, count = 0, isActive = false }) {
    // type - тип иконки (cart, like)
    // variant - вариант отображения (navbar, product)
    // count - количество товаров в корзине
    // isActive - активность иконки
    // onClick - обработчик клика

    // если компонент уже в корзине или избранном, то isActive = true. 
    // В этом случае иконка окрашивается в зелёный цвет
    // defaultState нужен для хранения этого исходного состояния. в будущем будем получать информацию из состояния
    // * Используем значения из CSS-модуля напрямую, а не строковые литералы
    const [defaultState, setDefaultState] = useState(isActive ? s.active : s.default);

    // * Состояния для базового класса и модификатора (hover или состояние)
    const [baseClass, setBaseClass] = useState("");
    const [classModifier, setClassModifier] = useState("");
    const [combinedClass, setCombinedClass] = useState("");

    useEffect(() => {
        // * Устанавливаем базовый класс в зависимости от variant
        if (variant === "navbar") {
            setBaseClass(s.navbar);
        } else if (variant === "product") {
            setBaseClass(s.product);
        }

        // * Устанавливаем модификатор на основе defaultState
        if (defaultState === s.active) {
            setClassModifier(s.active);
        } else if (defaultState === s.default) {
            setClassModifier(s.default);
        }

        // * Объединяем базовый класс и модификатор
        setCombinedClass(`${baseClass} ${classModifier}`);
    }, [variant, defaultState, baseClass, classModifier]);
    // * Замечание: включение baseClass и classModifier в зависимости может привести к лишним перерисовкам

    const navigate = useNavigate(); // * Инициализация navigate для переходов

    const svgClickHandler = () => {
        if (variant === "product") {
            // * При клике на продукт переключаем состояние: если было default, то делаем active, иначе наоборот
            setDefaultState(defaultState === s.default ? s.active : s.default);
        } else if (variant === "navbar") {
            // * Для navbar, клик перенаправляет на нужную страницу
            navigate(type === "like" ? "/favorites" : "/cart");
        }
    };

    const renderIcon = () => {
        if (type === "like") {
            return (
                <svg
                    onClick={svgClickHandler}
                    // * При наведении устанавливаем модификатор hovered, при уходе возвращаем default
                    onMouseEnter={() => setClassModifier(s.hovered)}
                    onMouseLeave={() => setClassModifier(s.default)}
                    className={combinedClass}
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_5252_15571)">
                        <path
                            d="M39.4 32.2222C42.678 29.14 46 25.4456 46 20.6111C46 17.5317 44.7252 14.5783 42.456 12.4008C40.1868 10.2233 37.1091 9 33.9 9C30.028 9 27.3 10.0556 24 13.2222C20.7 10.0556 17.972 9 14.1 9C10.8909 9 7.8132 10.2233 5.54401 12.4008C3.27482 14.5783 2 17.5317 2 20.6111C2 25.4667 5.3 29.1611 8.6 32.2222L24 47L39.4 32.2222Z"
                            stroke="#424436"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_5252_15571">
                            <rect width="48" height="48" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        } else if (type === "cart") {
            return (
                <svg
                    onClick={svgClickHandler}
                    onMouseEnter={() => setClassModifier(s.hovered)}
                    onMouseLeave={() => setClassModifier(s.default)}
                    className={combinedClass}
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M40.5 13H7L3 47H44.5L40.5 13Z" fill="none" />
                    <path
                        d="M24 0C18.4961 0 14.0565 4.37372 14.0565 9.79592V11.7551H6.19492L6.10169 12.6122L2.12429 46.898L2 48H46L45.8757 46.898L41.8983 12.6122L41.8051 11.7551H33.9435V9.79592C33.9435 4.37372 29.5039 0 24 0ZM24 1.95918C28.4396 1.95918 31.9548 5.42219 31.9548 9.79592V11.7551H16.0452V9.79592C16.0452 5.42219 19.5604 1.95918 24 1.95918ZM7.99717 13.7143H14.0565V15.949C13.4622 16.2895 13.0621 16.9094 13.0621 17.6327C13.0621 18.7156 13.9516 19.5918 15.0508 19.5918C16.1501 19.5918 17.0395 18.7156 17.0395 17.6327C17.0395 16.9094 16.6395 16.2895 16.0452 15.949V13.7143H31.9548V15.949C31.3605 16.2895 30.9605 16.9094 30.9605 17.6327C30.9605 18.7156 31.8499 19.5918 32.9492 19.5918C34.0484 19.5918 34.9379 18.7156 34.9379 17.6327C34.9379 16.9094 34.5378 16.2895 33.9435 15.949V13.7143H40.0028L43.7627 46.0408H4.23729L7.99717 13.7143Z"
                        fill="#424436"
                    />
                </svg>
            );
        }
        return null;
    };

    return <div>{renderIcon()}</div>;
}
