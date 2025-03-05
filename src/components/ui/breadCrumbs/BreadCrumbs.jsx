import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import { getAllCategories, getAllProducts } from "../../../services/baseBackEnd";


// объект для статических маршрутов чтобы отображать нормальные названия страниц
const staticRoutes = {
  categories: "Categories", // `/categories` ===>  "Categories"
  products: "All Products", // `/products` ===> "All Products"
  sales: "All Sales",
  favorites: "Favorites",
  cart: "Shopping Cart",
};

const Breadcrumbs = () => {
  const location = useLocation(); // Получаем текущий URL из React Router

  // состояния для хранения загруженных категорий и продуктов
  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState({});

  //  загружаем данные о категориях и продуктах при монтировании компонента
  useEffect(() => {
    // Получаем список категорий
    getAllCategories()
    .then((data) => {
      // Преобразуем массив категорий в объект { id: название }
      const categoryMap = data.reduce((acc, category) => {
        acc[category.id] = category.title; // { "1": "Annuals", "2": "Nursery" }
        return acc;
      }, {});
      setCategories(categoryMap); // сохраняем в состояние     
    })
    // Обработка ошибки
    .catch((error) => {
      console.error("Ошибка при получении категорий (компонент BreadCrums/getAllCategories):", error);
      
      setCategories({});
    });

    // получаем список продуктов
    getAllProducts().then((data) => {
      // преобразуем массив продуктов в объект 
      const productMap = data.reduce((acc, product) => {
        acc[product.id] = product.title;
        return acc;
      }, {});
      setProducts(productMap); // сохраняем в состояние
    })

    // Обработка ошибки
    .catch((error) => {
      console.error("Ошибка при получении продуктов (компонент BreadCrums/getAllProducts):", error);
      setProducts({});
    });

  }, []); // пустой массив зависимостей загрузится 1 раз при монтировании

  //  разбиваем текущий URL на массив 
  const pathnames = location.pathname.split("/").filter(Boolean); 
  //  "/categories/1/5" =====> ["categories", "1", "5"]

  //  формируем массив хлебных крошек
  const crumbs = [
    { label: "Main Page", link: "/" }, // Главная страница всегда первая
    ...pathnames.map((value, index) => {
      const prevPath = index > 0 ? pathnames[index - 1] : ""; // Получаем предыдущий сегмент пути
      const link = `/${pathnames.slice(0, index + 1).join("/")}`; // Создаем ссылку до текущего сегмента

      let breadcrumbLabel;

      // проверяем, есть ли этот сегмент в статических маршрутах
      if (staticRoutes[value]) {
        breadcrumbLabel = staticRoutes[value];
      }
      // если предыдущий путь был `/categories`, значит `value` — это ID категории
      else if (prevPath === "categories" && categories[value]) {
        breadcrumbLabel = categories[value]; // Берем название категории
      }
      //  сли предыдущий путь был `/products`, значит `value` — это ID продукта
      else if (prevPath === "products" && products[value]) {
        breadcrumbLabel = products[value]; // Берем название продукта
      }
      // в остальных случаях просто отображаем сегмент пути
      else {
        breadcrumbLabel = decodeURIComponent(value);
      }

      return { label: breadcrumbLabel, link }; // Возвращаем объект для массива хлебных крошек
    }),
  ];

  return (
    // <nav> с aria-label="breadcrumb" скринридеры понимают, что это хлебные крошки
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      <ul className={styles.breadcrumbList}>
        {crumbs.map((crumb, index) => {
          const lastCrumb = index === crumbs.length - 1; // проверяем, является ли текущая крошка последней

          return (
            <React.Fragment key={crumb.link}>
              {/*ксли это последняя крошка, просто отображаем текст, иначе делаем ссылку */}
              <li className={lastCrumb ? `${styles.breadcrumbItem} ${styles.activeCrumb}` : styles.breadcrumbItem}>
                {lastCrumb ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link to={crumb.link}>{crumb.label}</Link>
                )}
              </li>

              {/*  разделительная полоска между крошками (не рендерится после последней крошки) */}
              {!lastCrumb && (
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

