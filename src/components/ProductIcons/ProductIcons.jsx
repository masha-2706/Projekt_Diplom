import { useRef, useState } from 'react';

export default function ProductIcons({ type }) {
    // type - тип иконки (like, cart)

    // basicState - состояние по умолчанию, в будущем будет приходить из менеджера состояний
    const basicState = useRef('none');
    const [currentModifier, setCurrentModifier] = useState(basicState.current);

    // обработчики событий для изменения цвета иконки
    const handleMouseOver = () => {
        setCurrentModifier('hover');
    };

    const handleMouseOut = () => {
        setCurrentModifier(basicState.current);
    };

    const handleClickLike = () => {
        // тут будет диспатч состояния liked/unliked
    }

    const handleClickCart = () => {
        // тут будет диспатч состояния добавлено/удалено из корзины
    }

    // логика определения цвета иконки, оптимизирована с учетом особенностей формата SVG
    const getFillColor = () => {
        switch (currentModifier) {
            case 'hover':
                return '#424436';
            case 'active':
                return '#92A234';
            default:
                return 'white';
        }
    };

    // отрисовка символа в зависимости от типа иконки
    switch (type) {
        case 'like':
            return (
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleClickLike}
                >
                    <path
                        d="M39.4 25.2222C42.678 22.14 46 18.4456 46 13.6111C46 10.5317 44.7252 7.57832 42.456 5.40082C40.1868 3.22331 37.1091 2 33.9 2C30.028 2 27.3 3.05556 24 6.22222C20.7 3.05556 17.972 2 14.1 2C10.8909 2 7.8132 3.22331 5.54401 5.40082C3.27482 7.57832 2 10.5317 2 13.6111C2 18.4667 5.3 22.1611 8.6 25.2222L24 40L39.4 25.2222Z"
                        fill={getFillColor()}
                        stroke={currentModifier === 'none' ? '#424436' : getFillColor()}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'cart':
            return (
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleClickCart}
                >
                    <path
                        d="M40.5 13H7L3 47H44.5L40.5 13Z"
                        fill={getFillColor()}
                        stroke={currentModifier === 'none' ? '#424436' : getFillColor()}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24 0C18.4961 0 14.0565 4.37372 14.0565 9.79592V11.7551H6.19492L6.10169 12.6122L2.12429 46.898L2 48H46L45.8757 46.898L41.8983 12.6122L41.8051 11.7551H33.9435V9.79592C33.9435 4.37372 29.5039 0 24 0ZM24 1.95918C28.4396 1.95918 31.9548 5.42219 31.9548 9.79592V11.7551H16.0452V9.79592C16.0452 5.42219 19.5604 1.95918 24 1.95918ZM7.99717 13.7143H14.0565V15.949C13.4622 16.2895 13.0621 16.9094 13.0621 17.6327C13.0621 18.7156 13.9516 19.5918 15.0508 19.5918C16.1501 19.5918 17.0395 18.7156 17.0395 17.6327C17.0395 16.9094 16.6395 16.2895 16.0452 15.949V13.7143H31.9548V15.949C31.3605 16.2895 30.9605 16.9094 30.9605 17.6327C30.9605 18.7156 31.8499 19.5918 32.9492 19.5918C34.0484 19.5918 34.9379 18.7156 34.9379 17.6327C34.9379 16.9094 34.5378 16.2895 33.9435 15.949V13.7143H40.0028L43.7627 46.0408H4.23729L7.99717 13.7143Z"
                        fill='#424436'
                    />
                </svg>
            );

        default:
            break;
    }

}
