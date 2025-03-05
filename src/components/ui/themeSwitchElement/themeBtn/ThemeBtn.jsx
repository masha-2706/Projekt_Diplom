import React from 'react'
import Icon from '../Icon'
import s from './ThemeBtn.module.css'
import { useTheme } from '../../../../context/ThemeContext';

export default function ThemeBtn() {
  // Эта строка деструктурирует значения из контекста темы (ThemeContext).
  // useTheme() — это кастомный хук, который берет данные из контекста темы.
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
  
      <div className={s.themeToggle}>
        <Icon className={s.iconSun} id="icon-brightness" />
        <Icon className={s.iconMoon} id="icon-sleep"/>
        {/* Для создания эфекта переключения используем  input "checkbox" (т.е его свойство чекед выбран ) */}
        <input
          type="checkbox"
          id="theme-switch"
          className={s.themeSwitch}
          // управляет состоянием включен/выключен в зависимости от текущей темы.
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
        <label htmlFor="theme-switch" className={s.btn}></label>
      </div>
  )
}
