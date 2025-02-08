import React from 'react'
import Icon from '../../../ui/Icon'
import s from './ThemeBtn.module.css'

export default function ThemeBtn() {
  return (
  
      <div className={s.themeToggle}>
        <Icon className={s.iconSun} id="icon-brightness" w={20} h={20} />
        <Icon className={s.iconMoon} id="icon-sleep" w={20} h={20} />
        <input
          type="checkbox"
          id="theme-switch"
          className={s.themeSwitch}
        />
        <label htmlFor="theme-switch" className={s.btn}></label>
      </div>
  )
}
