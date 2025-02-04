import React from 'react'
import NavMenu from '../navMenu/NavMenu'
import ThemeBtn from './components/themeBtn/ThemeBtn'
import BlockIcons from './components/blockIcons/BlockIcons'
import s from './Header.module.css'
import Container from '../container/Container'


export default function Header() {
  return (
    <Container>

   <header className={s.header}>
    <div className={s.logo}>
    <img src="./logo/logo.png" alt="logo" width="70"/>
    <ThemeBtn/>
    </div>
    <NavMenu/>
    <BlockIcons/>
    
   </header>

   </Container>
   
  )
}