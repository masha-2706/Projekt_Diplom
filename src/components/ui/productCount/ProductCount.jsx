import s from './ProductCount.module.css';

export default function ProductCount({ quantity, increment, decrement }) {


  return (
    <div className={s.productItem_count}>
      <button onClick={() => decrement()}>-</button>
      <p>{quantity}</p>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
