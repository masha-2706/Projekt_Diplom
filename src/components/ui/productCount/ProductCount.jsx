import React, { useState, useEffect } from 'react';
import s from './ProductCount.module.css';

export default function ProductCount({ quantity, increment, decrement }) {
  const [quantityInCounter, setQuantityInCounter] = useState(quantity);

  // Синхронизируем локальное состояние с пропсом quantity
  useEffect(() => {
    setQuantityInCounter(quantity);
  }, [quantity]);

  return (
    <div className={s.productItem_count}>
      <button onClick={() => decrement()}>-</button>
      <p>{quantityInCounter}</p>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
