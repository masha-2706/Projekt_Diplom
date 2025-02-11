import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css"; // Импортируем модульные стили

const breadcrumbNames = {
  "categories": "Categories",
  "all-products": "All Products",
  "all-sales": "All Sales",
  "tools-and-equipment": "Tools and Equipment",
  "contact": "Contact",
};

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  let accumulatedPath = "";

  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/" className={styles.breadcrumbLink}>Main Page</Link>
        </li>
        {pathnames.map((value, index) => {
          accumulatedPath += `/${value}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbNames[value] || decodeURIComponent(value);

          return (
            <li key={accumulatedPath} className={styles.breadcrumbItem}>
              {isLast ? (
                <span className={styles.breadcrumbCurrent}>{displayName}</span>
              ) : (
                <Link to={accumulatedPath} className={styles.breadcrumbLink}>{displayName}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;