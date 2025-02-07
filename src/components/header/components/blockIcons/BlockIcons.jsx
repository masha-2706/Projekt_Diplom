import React from 'react'
import Icon from '../../../ui/Icon'
import s from './BlockIcons.module.css'

export default function BlockIcons() {
  return (
    <div className={s.container}> 
        <Icon className={s.heart} id="icon-hert" w={44} h={44} />
        <Icon className={s.cart} id="icon-cart" w={44} h={44} />
    </div>
  )
}
