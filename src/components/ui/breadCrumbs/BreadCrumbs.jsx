import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

const breadcrumbNameMap = {
  categories: "Categories",
  products: "All products",
  sales: "All sales",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Скрываем хлебные крошки на главной странице
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      <ul className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/">Main Page</Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const breadcrumbLabel =
            breadcrumbNameMap[value] || decodeURIComponent(value);

          return (
            <li
              key={to}
              // Если это последняя крошка, добавляем класс .activeCrumb
              className={
                isLast
                  ? `${styles.breadcrumbItem} ${styles.activeCrumb}`
                  : styles.breadcrumbItem
              }
            >
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
