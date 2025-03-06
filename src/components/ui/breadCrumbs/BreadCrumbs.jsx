import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import { getAllCategories, getAllProducts } from "../../../services/baseBackEnd";

// статические маршруты с понятными названиями
const staticRoutes = {
  categories: "Categories",
  products: "All Products",
  sales: "All Sales",
  favorites: "Favorites",
};

const Breadcrumbs = () => {
  const location = useLocation(); // получаем текущий url из react router
  const [categories, setCategories] = useState({}); // храним категории (id ===> title)
  const [products, setProducts] = useState({}); // храним продукты (id ===> {title, categoryId})
  const [dataLoaded, setDataLoaded] = useState(false); // проверяем, загружены ли данные

  // загружаем данные о категориях и продуктах при монтировании компонента
  useEffect(() => {
    Promise.all([getAllCategories(), getAllProducts()])
      .then(([categoriesData, productsData]) => {
        // преобразуем массив категорий в объект { id: title }
        const categoryMap = categoriesData.reduce((acc, category) => {
          acc[category.id] = category.title;
          return acc;
        }, {});

        // преобразуем массив продуктов в объект { id: { title, categoryId } }
        const productMap = productsData.reduce((acc, product) => {
          acc[product.id] = { title: product.title, categoryId: product.categoryId };
          return acc;
        }, {});

        setCategories(categoryMap); // сохраняем категории в состояние
        setProducts(productMap); // сохраняем продукты в состояние
        setDataLoaded(true); // отмечаем, что данные загружены
      })
      .catch((error) => console.error("error loading data:", error)); // обработка ошибок
  }, []); // пустой массив зависимостей ===> запрос выполняется только один раз при монтировании

  if (!dataLoaded) return null; // если данные ещё не загружены, не рендерим компонент

  // разбиваем текущий url на массив сегментов ("/categories/1/5" ==> ["categories", "1", "5"])
  const pathnames = location.pathname.split("/").filter(Boolean);

  // проверяем, является ли текущий маршрут страницей продукта
  const isProductPage = pathnames.length >= 2 && products[pathnames[pathnames.length - 1]];

  // проверяем, пришёл ли пользователь из "all products"
  const isFromAllProducts = location.state?.fromAllProducts || pathnames.includes("products");

  // формируем хлебные крошки, добавляя "main page"
  const crumbs = [{ label: "Main Page", link: "/" }];

  // проходим по каждому сегменту пути и формируем крошки
  pathnames.forEach((value, index) => {
    const prevPath = index > 0 ? pathnames[index - 1] : ""; // получаем предыдущий сегмент пути
    const isLastSegment = index === pathnames.length - 1; // проверяем, является ли текущий сегмент последним
    const link = `/${pathnames.slice(0, index + 1).join("/")}`; // формируем ссылку для крошки

    let breadcrumbLabel = decodeURIComponent(value); // декодируем url (если в нём были спецсимволы)

    // если это статическая страница
    if (staticRoutes[value]) {
      breadcrumbLabel = staticRoutes[value];
    } 
    // если предыдущий путь был "/categories", значит, это id категории ==> ищем её название
    else if (prevPath === "categories" && categories[value]) {
      breadcrumbLabel = categories[value];
    } 
    // если это страница продукта ===> берём название товара
    else if (isProductPage && isLastSegment && products[value]) {
      breadcrumbLabel = products[value].title;
    }

    // добавляем хлебную крошку в массив
    crumbs.push({ label: breadcrumbLabel, link });
  });

  console.log("final breadcrumbs:", crumbs); // выводим итоговые крошки в консоль для отладки

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      <ul className={styles.breadcrumbList}>
        {crumbs.map((crumb, index) => {
          const lastCrumb = index === crumbs.length - 1; // проверяем, является ли текущая крошка последней

          return (
            <React.Fragment key={crumb.link}>
              {/* если это последняя крошка ===> отображаем просто текст, иначе создаём ссылку */}
              <li className={lastCrumb ? `${styles.breadcrumbItem} ${styles.activeCrumb}` : styles.breadcrumbItem}>
                {lastCrumb ? <span>{crumb.label}</span> : <Link to={crumb.link}>{crumb.label}</Link>}
              </li>
              {/* разделительная линия между крошками (не рендерится после последней крошки) */}
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
