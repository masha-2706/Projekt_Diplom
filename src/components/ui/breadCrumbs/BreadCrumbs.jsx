import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

// Объект для "человеческих" названий страниц.
// Если в URL встречается, например, "/products", то в хлебных крошках будет отображаться "All products".
const breadcrumbNameMap = {
  categories: "Categories",
  products: "All products",
  sales: "All sales",
};

const Breadcrumbs = () => {
  // Хук useLocation позволяет получить текущий URL
  const location = useLocation();

  // Разбиваем строку пути на массив, например:
  // "/categories/products" -> ["categories", "products"]
  // filter(Boolean) убирает пустые элементы (если путь начинается с "/").
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Если пользователь находится на главной странице ("/"), хлебные крошки не отображаем
  if (location.pathname === "/") {
    return null;
  }

  // Формируем массив хлебных крошек, включая главную страницу "Main Page"
  const crumbs = [
    {
      label: "Main Page", // Отображаемый текст
      to: "/", // Ссылка на главную страницу
    },
    ...pathnames.map((value, index) => {
      // Формируем URL для каждой крошки
      // Например, если текущий путь: "/categories/products", то создаются:
      // - "/categories"
      // - "/categories/products"
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;

      // Если в объекте breadcrumbNameMap есть человекочитаемое название - используем его,
      // иначе просто декодируем URL-значение
      const breadcrumbLabel =
        breadcrumbNameMap[value] || decodeURIComponent(value);

      return {
        label: breadcrumbLabel, // Отображаемый текст
        to, // Ссылка
      };
    }),
  ];

  return (
    // <nav> с aria-label="breadcrumb" помогает доступным технологиям (скринридерам) понимать, что это навигация
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      {/* Список хлебных крошек */}
      <ul className={styles.breadcrumbList}>
        {crumbs.map((crumb, index) => {
          // Проверяем, является ли текущая крошка последней (активной страницей)
          const isLast = index === crumbs.length - 1;

          return (
            // React.Fragment позволяет вернуть несколько элементов без создания лишнего тега-обёртки
            <React.Fragment key={crumb.to}>
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
                  <Link to={crumb.to}>{crumb.label}</Link>
                )}
              </li>

              {/* Разделительная линия, рендерится после каждой крошки, кроме последней */}
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
