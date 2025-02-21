import React from "react";
import s from "./ShoppingCart.module.css";
import CardsContainer from "../CardsContainer/CardsContainer";
import NavigationButton from "../ui/NavigationButton/NavigationButton";
import Button from "../ui/button/Button";

export default function ShoppingCart() {
  return (
    <section className={s.shoppingCart_container}>

      {/* мне не нужен type='categories'. убрать не могу. и оставить - не корректно */}
      <CardsContainer
        title="Shopping cart"
        quantity={null}
        type={"categories"}
        navButton={true}
      />





      
      <div className={s.shoppingCart_wrapper}>
        <div className={s.shoppingCart_products}>
          <div className={s.orderedProduct}>fsdfsdfs</div>
          <div className={s.orderedProduct}>jhdgsfhsdjgf</div>
          <div className={s.orderedProduct}>sdghfshdgf</div>
        </div>

        {/* форма детали заказа */}
        <div className={s.shoppingCart_orderForm}>
          <form className={s.form} noValidate>

            <input
              type="text"
              name="name"
              placeholder="Name"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
            />
            <Button
              text="Order"
              type="submit"
              submittedText="Request Submitted"
              variant="submittedButton"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
