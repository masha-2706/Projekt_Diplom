import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { useTheme } from "../../../context/ThemeContext";


const Button = ({ className,text, link, variant = "", onClick, type = "" }) => {
  const variantStyle = styles[variant] || ""; // есть ли такой стиль в CSS
  const { isDarkTheme } = useTheme();
  console.log(variantStyle)
  if (link) {
    return (
      <Link
        to={link}
        className={className}>
        {text}
      </Link>
    );
  }
  else {
  return (
    <button
      type={type}
      className={` ${styles.btn}  ${variantStyle}
      ${isDarkTheme ? styles.darkBtn : styles.lightBtn}`}
      onClick={onClick}>
      {text}
    </button>
  );
}
};

export default Button;


