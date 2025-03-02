import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from "./ShoppingCart.module.css";
import Button from "../ui/button/Button";
import NavigationButton from "../ui/NavigationButton/NavigationButton";
import { useSelector } from "react-redux";
import { useRemoveAll } from "../../hooks/useRemoveAll";
import ProductCartItem from "../ProductCartItem/ProductCartItem";
import { selectCartItems, selectCartTotalQuantity, selectCartTotalSum } from "../../redux/selectors/cartSliceSelectors";

export default function ShoppingCart() {
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

  // имитация отправки введеных данных в форму
  const onSubmit = (data) => {
    console.log("Форма отправлена", data);
    setPopUpOpen(true);
  };

  // состояние для отображения popUp
  const [popUpOpen, setPopUpOpen] = useState(false);


  const error = "/media/discountFormImages/x-octagon.png"; // Иконка ошибки
  // путь к иконке закрытия модального окна
  const closeIcon = "/media/closeIcon/closeIcon.png";
  // при нажатии по иконке - закрывается модальное окно
  const onClose = () => {
    setPopUpOpen(false);
  };

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
          {leerkorb_Marker === 0 && (
            <>
              <p className={s.shoppingCart_leerkorb_text}>
                Looks like you have no items in your basket currently.
              </p>
              <Button
                text="Continue Shopping"
                link="/products"
                variant="shoppingCart_leerkorb"
              />
            </>
          )}
        </div>

        {/* форма "Детали заказа" */}
        <div className={s.shoppingCart_orderForm}>
          <h2>Order details</h2>
          <p>{quantityProducts} items</p>
          <div className={s.orderForm_sum}>
            <p>Total</p>
            <p className={s.orderForm_totalSum}>${totalSum}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ввод имени. Проверка, что имя содержит только буквы и пробелы */}
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Fill the name",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Incorrect Name"
                }
              })}
            />
            {/* отображение текста ошибки */}
            <div className={s.form_error_block}>
              {errors.name && (
                <>
                  <img className={s.form_error_img} src={error} alt="Error" />
                  <span className={s.form_error_text}>
                    {errors.name.message}
                  </span>
                </>
              )}
            </div>

            {/* ввод номера телефона. Проверка номера телефона (от 10 до 15 цифр) */}
            <input
              type="tel"
              placeholder="Phone number"
              {...register("phone", {
                required: "Fill the phone number",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Incorrect phone format!"
                }
              })}
            />
            {/* отображение текста ошибки */}
            <div className={s.form_error_block}>
              {errors.phone && (
                <>
                  <img className={s.form_error_img} src={error} alt="Error" />
                  <span className={s.form_error_text}>
                    {errors.phone.message}
                  </span>
                </>
              )}
            </div>

            {/* ввод адреса почты. проверка. */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Fill the e-mail",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Incorrect email format!"
                }
              })}
            />
            {/* отображение текста ошибки */}
            <div className={s.form_error_block}>
              {errors.email && (
                <>
                  <img className={s.form_error_img} src={error} alt="Error" />
                  <span className={s.form_error_text}>
                    {errors.email.message}
                  </span>
                </>
              )}
            </div>

            <Button
              text="Order"
              type="submit"
              submittedText="Request Submitted"
              variant="shoppingCartOrder"
              onClick={handleSubmit(onSubmit)}
            />
          </form>
        </div>
      </div>

      {/* Вставляем модальное окно, оно рендерится, когда popUpOpen === true */}
      {popUpOpen && (
        <div className={s.popUpModal_Window}>
          <div className={s.popUpModal_block}>
            <div className={s.popUpModal_text}>
              <h3>Congratulations! </h3>
              <p>Your order has been successfully placed on the website.</p>
              <p>A manager will contact you shortly to confirm your order.</p>
            </div>
            {/* кнопка закрытия модального окна */}
            <button className={s.popUpModal_closeButton} onClick={onClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
        </div>
      )}

      <div className={s.crumbs_button_down}>
        <NavigationButton text="Back to the store" link="/" />
      </div>
    </section>
  );
}
