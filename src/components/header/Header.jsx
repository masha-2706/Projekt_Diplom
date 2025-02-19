import React from 'react';
import NavMenu from '../navMenu/NavMenu';
import ThemeBtn from '../ui/themeSwitchElement/themeBtn/ThemeBtn';
import s from './Header.module.css';
import IconButton from '../ui/IconButton/IconButton';
import { NavLink } from "react-router";
import BurgerIcon from '../ui/burgerIcon/BurgerIcon'

// Это наш Header в котором мы распологаем :
export default function Header() {

const logoImage = '/media/logo/logo.png';

  return (
    <header className={s.header}>


          {/* логотип */}
      <div className={s.logoContainer}> 
          {/* Обернули логотип в нав линк для обеспечения навигации при клике на линк */}
        <NavLink className={s.link} to="/">
          <img className={s.logo} src={logoImage} alt="logo" />
        </NavLink>
        {/* кнопка для изменения темы (день /ночь) небходимы функции для переключения для этого необходимо ( в компонент icon кот находит в ui) необходимо передать  classname , id ) id -передано интерполяцией  */}
        <ThemeBtn />   
      </div>

      
      <NavMenu />   {/* навигация по сайту  */}



        {/* блок иконок (лайк и корзина ) */}
      <div className={s.iconsContainer}>
        <IconButton type="like" variant={'header'} count={3} /> {/* передаем количество товаров в корзине через count */}
        <IconButton type="cart" variant={'header'} count={0} />

        <BurgerIcon/>
      </div>

      
    </header>
  );
}





