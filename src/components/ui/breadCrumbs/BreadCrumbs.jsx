import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

// Объект для "человеческих" названий страниц
// Если в URL встречается, например, "/products", то в хлебных крошках будет отображаться "All products".
const breadcrumbNameMap = {
  categories: "Categories",
  products: "All products",
  sales: "All sales",
  favorites: "Favorites",
  cart: "Cart",
  1: "Annuals",
  2: "Nursery",
  3: "Garden Art",
  4: "Plant Care"
};

const Breadcrumbs = () => {
  // Хук useLocation позволяет получить текущий URL из браузерв
  const location = useLocation();

  // создаем массив из pathname`сов
  // split("/") делает из "/categories/products" -> ['',"categories", "products"]
  // filter(Boolean) убирает пустые элементы
  const pathnames = location.pathname.split("/").filter(Boolean);
  console.log(pathnames);

  // Если пользователь находится на главной странице ("/"), хлебные крошки не отображаем
  // if (location.pathname === "/") {
  //   return null;
  // }

  // Формируем массив хлебных крошек, включая главную страницу "Main Page"
  const crumbs = [
    {
      label: "Main Page", // Отображаемый текст
      link: "/", // Ссылка на главную страницу
    },
    ...pathnames.map((value, index) => {
      // Формируем URL для каждой крошки
      // c помощью методп slice возвращаемновый массив, содержащий элементы с индексом 0 до index + 1 (не включая элемент с индексом index + 1!!!!)
      // ставим '/' вначале тк join добавит только между элементами

      const link = `/${pathnames.slice(0, index + 1).join("/")}`;

      // Если в объекте breadcrumbNameMap есть человеческое название - используем его,
      // иначе просто декодируем URL, чтоб не выдало undefined
      const breadcrumbLabel = breadcrumbNameMap[value] || decodeURIComponent(value);

      return {
        label: breadcrumbLabel, // Отображаемый текст
        link, // Ссылка
      };
    }),
  ];

  return (
    // <nav> с aria-label="breadcrumb" дает понять людям с ограниченными возможностями, которіе используют скринридеры, что это хлебные крошки
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      {/* Список хлебных крошек */}
      <ul className={styles.breadcrumbList}>
        {crumbs.map((crumb, index) => {
          // Проверяем, является ли текущая крошка последней (активной страницей)
          const isLast = index === crumbs.length - 1;

          return (
            // React.Fragment используем из-за key={crumb.link}, тк в <> </> нельзя прописать key
            <React.Fragment key={crumb.link}>
              {/* Отдельный элемент хлебных крошек */}
              <li
                className={
                  isLast
                    ? `${styles.breadcrumbItem} ${styles.activeCrumb}`
                    : styles.breadcrumbItem
                }
              >
                {/* Если это последняя крошка, просто отображаем текст (без ссылки), иначе - ссылка */}
                {isLast ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link to={crumb.link}>{crumb.label}</Link>
                )}
              </li>

              {/* полоска, рендерится после каждой крошки, КРОМЕ последней */}
              {!isLast && (
                <div className={styles.breadcrumbItemLineBlock}>
                  <div className={styles.breadcrumbItemLine}></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
