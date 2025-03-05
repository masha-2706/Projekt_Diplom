import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import { getAllCategories, getAllProducts } from "../../../services/baseBackEnd";

const staticRoutes = {
  categories: "Categories",
  products: "All Products",
  sales: "All Sales",
  favorites: "Favorites",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    Promise.all([getAllCategories(), getAllProducts()])
      .then(([categoriesData, productsData]) => {
        const categoryMap = categoriesData.reduce((acc, category) => {
          acc[category.id] = category.title;
          return acc;
        }, {});

        const productMap = productsData.reduce((acc, product) => {
          acc[product.id] = { title: product.title, categoryId: product.categoryId };
          return acc;
        }, {});

        setCategories(categoryMap);
        setProducts(productMap);
        setDataLoaded(true);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const pathnames = location.pathname.split("/").filter(Boolean);
  console.log("Current pathnames:", pathnames);

  if (!dataLoaded) {
    console.log("Data not loaded yet...");
    return null;
  }

  const crumbs = [{ label: "Main Page", link: "/" }];
  const isFromAllProducts = pathnames.length === 2 && pathnames[0] === "products";

  pathnames.forEach((value, index) => {
    const prevPath = index > 0 ? pathnames[index - 1] : "";
    const isLastSegment = index === pathnames.length - 1;
    const link = `/${pathnames.slice(0, index + 1).join("/")}`;

    let breadcrumbLabel = decodeURIComponent(value);

    if (value === "categories") {
      breadcrumbLabel = "Categories";
    } else if (prevPath === "categories" && categories[value]) {
      breadcrumbLabel = categories[value];
    } else if (value === "products") {
      breadcrumbLabel = "All Products";
    } else if (isFromAllProducts && isLastSegment && products[value]) {
      breadcrumbLabel = products[value].title;
    } else if (!isFromAllProducts && prevPath in categories && isLastSegment && products[value]) {
      breadcrumbLabel = products[value].title;
    }

    crumbs.push({ label: breadcrumbLabel, link });
  });

  console.log("Final Breadcrumbs:", crumbs);

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      <ul className={styles.breadcrumbList}>
        {crumbs.map((crumb, index) => {
          const lastCrumb = index === crumbs.length - 1;

          return (
            <React.Fragment key={crumb.link}>
              <li className={lastCrumb ? `${styles.breadcrumbItem} ${styles.activeCrumb}` : styles.breadcrumbItem}>
                {lastCrumb ? <span>{crumb.label}</span> : <Link to={crumb.link}>{crumb.label}</Link>}
              </li>

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

