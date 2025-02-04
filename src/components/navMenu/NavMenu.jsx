import React from 'react'
import { Link } from 'react-router'
import s from './NavMenu.module.css'
import GreenButton from '../ui/GreenButton'

function NavMenu() {
  return (
    <div><GreenButton text= {"1 day discount!"} className={s.btn}/>
    <div className={s.nav}>
     <Link className={s.link} to='/'>Main Page</Link> 
     <Link className={s.link} to='/categories'>Categories</Link> 
     <Link className={s.link} to='/products'>All products</Link> 
     <Link className={s.link} to='/sales'>All sales</Link> 
    </div>
    </div>
  )
}

export default NavMenu
