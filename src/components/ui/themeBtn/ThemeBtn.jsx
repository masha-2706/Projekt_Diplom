import React from 'react'
import Icon from '../Icon'
import s from './ThemeBtn.module.css'

export default function ThemeBtn() {
  return (
    <button className={s.btn}>
    <Icon id="icon-brightness" w={20} h={20} />
    <Icon id="icon-sleep" w={20} h={20} />
  </button>
  )
}
