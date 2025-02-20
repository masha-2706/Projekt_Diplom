import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './Filter.module.css';
import { setFilter, resetFilters } from '../../../redux/slices/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state) => state.filter);

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    let inputValue = e.target.value;
    // Если тип чекбокса, используем checked вместо value
    if (e.target.type === "checkbox") {
      inputValue = e.target.checked;
    }
    dispatch(setFilter({ [inputName]: inputValue }));
  };

  // Сброс фильтров при размонтировании компонента
  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch]);

  return (
    <div className={s.filterContainer}>
      {/* Фильтрация по диапазону цен */}
      <div className={s.filterPrice}>
        <p>Price</p>
        <input
          type="text"
          placeholder="from"
          name="minPrice"
          value={filterOptions.minPrice}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="to"
          name="maxPrice"
          value={filterOptions.maxPrice}
          onChange={handleInputChange}
        />
      </div>
      {/* Фильтрация по наличию скидки */}
      <div>
        <p>Discounted items</p>
        <label className={s.filterDiscountCheckbox}>
          <input
            type="checkbox"
            name="discontOnly"
            checked={filterOptions.discontOnly}
            onChange={handleInputChange}
          />
          <span></span>
        </label>
      </div>
      {/* Сортировка товаров */}
      <div className={s.filterSorted_wrapper}>
        <p>Sorted</p>
        <div className={s.filterSorted}>
          <select name="sort" value={filterOptions.sort} onChange={handleInputChange}>
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
