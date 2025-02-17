import React, { Component } from 'react'
import s from './Filter.module.css'

export class Filter extends Component {
  render() {
    return (
        <div className={s.filterContainer}>
          {/* Блок сортировки товаров по цене "от" и "до"*/}
          <div className={s.filterPrice}>
            <p>Price</p>
            <input type="text" placeholder="from" />
            <input type="text" placeholder="to" />
          </div>

          {/* Блок сортировки "checkbox": товары со скидкой */}
          <div>
            <p>Discounted items</p>
            <label className={s.filterDiscountCheckbox}>
              <input type="checkbox" />
              <span></span>
            </label>
          </div>

          {/* Блок сортировки "выпадаюший список": товары со скидкой, сортировка цены по возрастанию и по убыванию */}
          <div className={s.filterSorted_wrapper}>
            <p>Sorted</p>
            <div className={s.filterSorted}>
              <select>
                <option value="default">by default</option>
                <option value="newest">newest</option>
                <option value="high-low">price:high-low</option>
                <option value="price:low-high">price:low-high</option>
              </select>
              <span className={s.filterSorted_arrow}></span>
            </div>
          </div>
        </div>
    )
  }
}

export default Filter
