import { useEffect } from 'react';
import s from './Filter.module.css';
import { useFilters } from '../../../hooks/useFilters';

export default function Filter({ checkbox = true }) {
  const { filters, updateFilter, reset } = useFilters();

  // При первом монтировании сбрасываем фильтры
  useEffect(() => {
    reset();
  }, [reset]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = (type === 'checkbox' ? checked : value);
    updateFilter({ [name]: newValue });
  };

  return (
    <div className={s.filterContainer}>

      {/* Фильтрация по диапазону цен */}
      <div className={s.filterPrice}>
        <p>Price</p>
        <input
          type="text"
          placeholder="from"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="to"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
        />
      </div>

      {/* Фильтрация по наличию скидки */}
      {checkbox && (
        <div>
          <p>Discounted items</p>
          <label className={s.filterDiscountCheckbox}>
            <input
              type="checkbox"
              name="discontOnly"
              checked={filters.discontOnly}
              onChange={handleInputChange}
            />
            <span></span>
          </label>
        </div>
      )}

      {/* Сортировка товаров */}
      <div className={s.filterSorted_wrapper}>
        <p>Sorted</p>
        <div className={s.filterSorted}>
          <select name="sort" value={filters.sort} onChange={handleInputChange}>
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
