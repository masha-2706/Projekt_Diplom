import React from 'react';
import NavMenu from '../navMenu/NavMenu';
import ThemeBtn from './components/themeBtn/ThemeBtn';
import BlockIcons from './components/blockIcons/BlockIcons';
import s from './Header.module.css';

// Это наш Header в котором мы распологаем :
export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <img className={s.logo} src="./logo/logo.png" alt="logo" />
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
