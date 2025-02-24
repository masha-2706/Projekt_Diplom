import React from 'react'
import { useState } from 'react';
import s from './ProductCount.module.css'

export default function ProductCount()  {
const [productCount, setProductCount] = useState(1); //Количество штук одного товара в Корзине
    return (
                    <div className={s.productItem_count}>
                      <button>-</button>
                      <p>{productCount}</p>
                      <button>+</button>
                    </div>
    )
  
}
