import React from 'react'
import s from './Banner.module.css'
import Button from '../ui/button/Button'
import { useTheme } from "../../context/ThemeContext";

export default function Banner() {
  const { isDarkTheme } = useTheme();
  return (
    
    <div className={s.container}>
    <section className={s.section}>
        <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
        <Button link='/sales' text= {"Check out"} className={` ${s.linkButton}
${isDarkTheme ? s.darkBtn : s.lightBtn}`}/>
    </section>
    </div>
  )
}

