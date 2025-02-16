import React from 'react'
import s from './Banner.module.css'
import Button from '../ui/buttonBanner/Button'

export default function Banner() {
  return (
    
    <div className={s.container}>
    <section className={s.section}>
        <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
        <Button children= {"Check out"} className={s.btn}/>
    </section>
    </div>
  )
}
