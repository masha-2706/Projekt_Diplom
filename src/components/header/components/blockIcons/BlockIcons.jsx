import React from 'react'
import Icon from '../../../ui/Icon'
import s from './BlockIcons.module.css'

export default function BlockIcons() {
  return (
    <div className={s.container}> 
        <Icon className={s.heart} id="icon-hert" w={48} h={48} />
        <Icon className={s.cart} id="icon-tashe" w={48} h={48} />
    </div>
  )
}
