import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationButton.module.css";

const NavigationButton = ({ text, link }) => {
  return (
    <Link to={link} className={styles.navigationButton}>
      {text}
    </Link>
  );
};

export default NavigationButton;
