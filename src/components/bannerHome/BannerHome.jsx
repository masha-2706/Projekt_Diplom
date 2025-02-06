import React from 'react'
import s from './BannerHome.module.css'
import Container from '../container/Container'

export default function BannerHome() {
  return (
    <Container>
    <section className={s.section}>
        <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
    </section>
    </Container>
  )
}
