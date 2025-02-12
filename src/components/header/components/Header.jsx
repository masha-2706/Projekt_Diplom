import React from 'react'
import NavMenu from '../../navMenu/NavMenu'
import ThemeBtn from '../../ui/themeBtn/ThemeBtn'
import BlockIcons from '../../ui/blockIcons/BlockIcons'
import s from './Header.module.css'
import Container from '../../container/Container'

// Это наш Header в котором мы распологаем :
export default function Header() {
  return (
    <Container>

   <header className={s.header}>
    <div className={s.logo}>
    <img src="./logo/logo.png" alt="logo" width="66"/> 
    {/* логотип */}
    <ThemeBtn/>
    {/* кнопка для изменения темы (день /ночь) небходимы функции для переключения для этого необходимо ( в компонент icon кот находит в ui) необходимо передать  classname , id ) id -передано интерполяцией  */}
    </div>
    <NavMenu/>
    {/* навигация по сайту  */}
    <BlockIcons/>
    {/* блок иконок (лайк и корзина ) */}


    
   </header>

   </Container>
   
  )
}