import React from 'react'
import { useState } from 'react';
import s from './ProductCount.module.css'

export default function ProductCount()  {
const [productCount, setProductCount] = useState(1); //Количество штук одного товара в Корзине
   
const btn_decrement = (e) => {
  console.log('Нужно отнять 1 от значения счетчика. Если значение счетчика 1, то удалить объект их массива товаров в Корзине')
}
const btn_increment = (e) => {
  console.log('Нужно добавить 1 к текущему значению счетчика.')
}


return (
                    <div className={s.productItem_count}>
                      <button onClick={btn_decrement}>-</button>
                      <p>{productCount}</p>
                      <button onClick={btn_increment}>+</button>
                    </div>
    )
  
}
