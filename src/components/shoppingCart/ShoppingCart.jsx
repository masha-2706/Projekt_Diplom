import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import s from "./ShoppingCart.module.css";
import CardsContainer from "../CardsContainer/CardsContainer";
import Button from "../ui/button/Button";
import { BASE_URL, getAllProducts } from "../../services/baseBackEnd";
import ProductCount from '../ui/productCount/ProductCount'




export default function ShoppingCart() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // это нужно объединить 
  const [quantityProducts, setquantityProducts] = useState(""); // Количество товаров одного типа в Корзине
  const [totalSum, setTotalSum] = useState(""); // Общяя сумма товаров, добавленных в корзину
  

  const [products, setProducts] = useState([]); // Массив объектов, с товарами в Корзине

  //При монтировании компонента стягиваю БД из бэка и ложу в массив products
  //заменить на useSelector
  useEffect(() => {
    async function loadData() {
      const data = await getAllProducts();
      setProducts(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    // при изменении в products и происходит пересчет totalSum
    const sum = products.reduce((acc, el) => {
      return acc + (el.discont_price ? el.discont_price : el.price);
    }, 0);
    //округлениe суммы до двух знаков после запятой
    const roundedSum = parseFloat(sum.toFixed(2));
    setTotalSum(roundedSum);

    // Подсчет количества товаров одного типа в Корзине
    setquantityProducts(products.length);
  }, [products]);

  return (
    <section className={s.shoppingCart_container}>
      {/* отрисовка заголовка и хлебной крошки */}
      <CardsContainer
        title="Shopping cart"
        quantity={null}
        type={"categories"}
        navButton={true}
      />

      {/* отрисовка внутреннего содержания Корзины */}
      <div className={s.shoppingCart_wrapper}>
        {/* отрисовка положенных в Корзину товаров */}
        <div className={s.shoppingCart_products}>
          {products.map((el) => {
            return (
              <div key={el.id} className={s.productItem}>
                <img
                  className={s.productItem_image}
                  src={`${BASE_URL}${el.image}`}
                  alt={el.title}
                />
                <div className={s.productItem_description}>
                  <div className={s.productItem_title}>
                    <p>{el.title}</p>
                    <button className={s.productItem_closeBtn}>✖</button>
                  </div>

                  <div className={s.productItem_container}>
                    {/* отрисовка количества товаров в Корзине */}
                    <ProductCount/>
                    <div className={s.productItem_price}>
                      {el.discont_price ? (
                        <>
                          <p className={s.actual_price}>${el.discont_price}</p>
                          <p className={s.old_price}>${el.price}</p>
                        </>
                      ) : (
                        <p className={s.actual_price}>${el.price}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
