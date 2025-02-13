import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

// Объект для "человеческих" названий страниц.
// Если в URL встречается, например, /products, то в хлебных крошках будет "All products".
const breadcrumbNameMap = {
  categories: "Categories",
  products: "All products",
  sales: "All sales",
};

const Breadcrumbs = () => {
  // Хук React Router, возвращает информацию о текущем маршруте.
  // Отсюда получаем location.pathname.
  const location = useLocation();

  // Разбиваем строку пути на массив (например, "/categories/products" -> ["categories", "products"]).
  // filter(Boolean) убирает пустые значения ("/").
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Если пользователь на главной странице ("/"), хлебные крошки не показываем.
  if (location.pathname === "/") {
    return null;
  }

  return (
    // Тег <nav> с атрибутом aria-label="breadcrumb" нужен, чтобы "доступные" технологии (читалки) 
    // понимали, что это навигационное меню для хлебных крошек.
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      {/* Список хлебных крошек */}
      <ul className={styles.breadcrumbList}>
        {/* Первая "крошка" всегда ведет на главную страницу */}
        <li className={styles.breadcrumbItem}>
          <Link to="/">Main Page</Link>
        </li>

        {/* Далее идёт блок для горизонтальной линии или разделителя между первой "крошкой" и остальными */}
        <div className={styles.breadcrumbItemLineBlock}>
          <div className={styles.breadcrumbItemLine}></div>
        </div>

        {/* Перебираем все части пути и формируем для каждой часть хлебных крошек */}
        {pathnames.map((value, index) => {
          // Собираем путь, по которому будет переход, например:
          // при index=0 -> /categories
          // при index=1 -> /categories/products
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Проверяем, является ли текущий элемент последним:
          // если да, то "крошка" не будет ссылкой, а лишь визуальным обозначением текущей страницы
          const isLast = index === pathnames.length - 1;

          // Смотрим, есть ли в объекте breadcrumbNameMap "человеческое" название для этого пути;
          // если нет - берём значение из URL, декодируя спецсимволы.
          const breadcrumbLabel =
            breadcrumbNameMap[value] || decodeURIComponent(value);

          return (
            <li
              key={to}
              // Если элемент последний, добавляем класс .activeCrumb
              className={
                isLast
                  ? `${styles.breadcrumbItem} ${styles.activeCrumb}`
                  : styles.breadcrumbItem
              }
            >
              {/* Если последний элемент - рендерим просто текст, иначе ссылку */}
              {isLast ? (
                <span>{breadcrumbLabel}</span>
              ) : (
                <Link to={to}>{breadcrumbLabel}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;

