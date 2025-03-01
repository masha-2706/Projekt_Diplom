import s from './Filter.module.css';

export default function Filter({ setArray }) {



  return (
    <div className={s.filterContainer}>
      {/* Фильтрация по диапазону цен */}
      <div className={s.filterPrice}>
        <p>Price</p>
        <input
          type="text"
          placeholder="from"
          name="minPrice"
        />
        <input
          type="text"
          placeholder="to"
          name="maxPrice"
        />
      </div>
      {/* Фильтрация по наличию скидки */}
      <div>
        <p>Discounted items</p>
        <label className={s.filterDiscountCheckbox}>
          <input
            type="checkbox"
            name="discontOnly"

          />
          <span></span>
        </label>
      </div>
      {/* Сортировка товаров */}
      <div className={s.filterSorted_wrapper}>
        <p>Sorted</p>
        <div className={s.filterSorted}>
          <select name="sort">
            <option value="default">by default</option>
            <option value="price:high-low">price: high-low</option>
            <option value="price:low-high">price: low-high</option>
            <option value="alphabetical">alphabetical</option>
          </select>
          <span className={s.filterSorted_arrow}></span>
        </div>
      </div>
    </div>
  );
}
