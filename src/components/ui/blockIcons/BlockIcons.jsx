import React from 'react'
import Icon from '../Icon'
import s from './BlockIcons.module.css'

export default function BlockIcons() {
  return (
    <div className={s.container}> 
    {/* используем компонент Icon для создания элементов корзина и серце */}
        <Icon className={s.heart} id="icon-hert" w={44} h={44} />
        <Icon className={s.cart} id="icon-cart" w={44} h={44} />
      
    </div>
  )
}
