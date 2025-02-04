import React from 'react'
import NavMenu from '../navMenu/NavMenu'
import ThemeBtn from './components/themeBtn/ThemeBtn'
import BlockIcons from './components/blockIcons/BlockIcons'
import s from './Header.module.css'


export default function Header() {
  return (
   <header>
    <img src="./logo/logo.png" alt="logo" width="70"/>
    <ThemeBtn/>
    <NavMenu/>
    <BlockIcons/>
   </header>
   
  )
}