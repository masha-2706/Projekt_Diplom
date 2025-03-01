import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ text, link, variant = "", onClick, type = "" }) => {
  const variantStyle = styles[variant] || ""; // есть ли такой стиль в CSS

  if (link) {
    return (
      <Link
        to={link}
        className={` ${styles.baseButton} ${variantStyle} `}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${styles.baseButton} ${variantStyle} `}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;