import React from "react";
import NavMenu from "../navMenu/NavMenu";
import ThemeBtn from "../ui/themeBtn/ThemeBtn";
import BlockIcons from "../ui/blockIcons/BlockIcons";
import s from "./Header.module.css";
import { NavLink } from "react-router";

// Это наш Header в котором мы распологаем :
export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        {/* Обернули логотип в нав линк для обеспечения навигации при клике на линк */}
        <NavLink className={s.link} to="/">
          <img className={s.logo} src="./logo/logo.png" alt="logo" />
        </NavLink>

        {/* логотип */}
        <ThemeBtn />
        {/* кнопка для изменения темы (день /ночь) небходимы функции для переключения для этого необходимо ( в компонент icon кот находит в ui) необходимо передать  classname , id ) id -передано интерполяцией  */}
      </div>
      <NavMenu />
      {/* навигация по сайту  */}
      <BlockIcons />
      {/* блок иконок (лайк и корзина ) */}
    </header>
  );
}
