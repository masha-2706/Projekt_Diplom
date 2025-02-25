import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import s from "./ShoppingCart.module.css";
import Button from "../ui/button/Button";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalQuantity, selectCartTotalSum } from "../../redux/selectors/cartSliceSelectors";
import ProductCartItem from "../ProductCartItem/ProductCartItem";
import { useRemoveAll } from "../../hooks/useRemoveAll";

export default function ShoppingCart() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const products = useSelector(selectCartItems);
  const quantityProducts = useSelector(selectCartTotalQuantity);
  const totalSum = useSelector(selectCartTotalSum);

  const removeAll = useRemoveAll()


  return (
    <section className={s.shoppingCart_container}>
      {/* отрисовка заголовка и хлебной крошки */}
      {/* <CardsContainer
        title="Shopping cart"
        quantity={null}
        type={"categories"}
        navButton={true}
      /> */}
      <h1 className={s.shoppingCart_title}>Shopping cart</h1>

      {/* отрисовка внутреннего содержания Корзины */}
      <div className={s.shoppingCart_wrapper}>

        {/* отрисовка положенных в Корзину товаров */}
        <div className={s.shoppingCart_products}>
          {products.map(product => (
            <ProductCartItem
              key={product.id}
              id={product.id}
              product={product}
              quantity={product.quantity}
              onDelete={removeAll}
            />
          ))}
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
    </section>
  );
}
