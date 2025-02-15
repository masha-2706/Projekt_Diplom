import React from 'react'
import Icon from '../Icon'
import s from './ThemeBtn.module.css'

export default function ThemeBtn() {
  return (
  
      <div className={s.themeToggle}>
        <Icon className={s.iconSun} id="icon-brightness" />
        <Icon className={s.iconMoon} id="icon-sleep"/>
        {/* Для создания эфекта переключения используем  input "checkbox" (т.е его свойство чекед выбран ) */}
        <input
          type="checkbox"
          id="theme-switch"
          className={s.themeSwitch}
        />
        <label htmlFor="theme-switch" className={s.btn}></label>
      </div>
  )
}
