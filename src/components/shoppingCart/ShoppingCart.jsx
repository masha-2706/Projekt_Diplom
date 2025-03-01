import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import s from "./ShoppingCart.module.css";
import Button from "../ui/button/Button";
import { BASE_URL, getAllProducts } from "../../services/baseBackEnd";
import ProductCount from "../ui/productCount/ProductCount";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalSum
} from "../../redux/selectors/cartSliceSelectors";
import ProductCartItem from "../ProductCartItem/ProductCartItem";
import { useRemoveAll } from "../../hooks/useRemoveAll";
import NavigationButton from "../ui/NavigationButton/NavigationButton";

export default function ShoppingCart({ id, title = "no title", navButton = true }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const products = useSelector(selectCartItems);
  const quantityProducts = useSelector(selectCartTotalQuantity);
  const totalSum = useSelector(selectCartTotalSum);

  const removeAll = useRemoveAll();

  // маркер пустой корзины
  const leerkorb_Marker = products.length;

  return (
    <section className={s.shoppingCart_container}>
      <div className={s.shoppingCart_block_title}>
        <h1 className={s.shoppingCart_title}>Shopping cart</h1>
        <div className={s.crumbs_button}>
          <div className={s.divider}></div>
          <NavigationButton text="Back to the store" link="/" />
        </div>
      </div>

      {/* отрисовка внутреннего содержания Корзины */}
      <div className={s.shoppingCart_wrapper}>

        {/* отрисовка положенных в Корзину товаров */}
        <div className={s.shoppingCart_products}>
          {products.map((product) => (
            <ProductCartItem
              key={product.id}
              id={product.id}
              product={product}
              quantity={product.quantity}
              onDelete={removeAll}
            />
          ))}
          
          {/* отрисовка блока, если Корзина пустая */}
          { leerkorb_Marker === 0 && <>
            <p className={s.shoppingCart_leerkorb_text}>Looks like you have no items in your basket currently.</p>
            <Button
              text="Continue Shopping" link="/products"
              variant="shoppingCart_leerkorb"
            />
          </> }
        </div>

        {/* форма "Детали заказа" */}
        <div className={s.shoppingCart_orderForm}>
          <h2>Order details</h2>
          <p>{quantityProducts} items</p>
          <div className={s.orderForm_sum}>
            <p>Total</p>
            <p className={s.orderForm_totalSum}>${totalSum}</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* ввод имени. Проверка, что имя содержит только буквы и пробелы */}
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: { value: true, message: "Fill the name" },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Incorrect Name"
                }
              })}
            />

            {/* ввод номера телефона. Проверка номера телефона (от 10 до 15 цифр) */}
            <input
              type="tel"
              placeholder="Phone number"
              {...register("phone", {
                required: { value: true, message: "Fill the phone number" },
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Incorrect phone format!"
                }
              })}
            />

            {/* ввод адреса почты. проверка. */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Incorrect email format!"
                }
              })}
            />

            <Button
              text="Order"
              type="submit"
              submittedText="Request Submitted"
              variant="shoppingCartOrder"
            />
          </form>
        </div>
      </div>

      <div className={s.crumbs_button_down}>
          <NavigationButton text="Back to the store" link="/" />
        </div>

    </section>
  );
}
