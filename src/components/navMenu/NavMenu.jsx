import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavMenu.module.css'
import GreenButton from '../ui/GreenButton'


function NavMenu() {
  return (
    <div className={s.navMenuContainer}>
   

      {/* Кнопка 1 day discount */}
      <GreenButton text={"1 day discount!"} className={s.btn} />

      {/* Статические ссылки, если они нужны параллельно */}
      <div className={s.nav}>
        <NavLink className={s.link} to='/'>Main Page</NavLink>
        <NavLink className={s.link} to='/categories'>Categories</NavLink>
        <NavLink className={s.link} to='/products'>All products</NavLink>
        <NavLink className={s.link} to='/sales'>All sales</NavLink>
     </div>
    </div>
  )
}

export default NavMenu