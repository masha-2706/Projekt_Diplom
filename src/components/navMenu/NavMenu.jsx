import React from "react";
import { NavLink } from "react-router";
import s from "./NavMenu.module.css";
import GreenButton from "../ui/GreenButton";

function NavMenu() {
  // стилизация link активной страницы
  const isActiveClass = ({ isActive }) => (isActive ? s.active : s.link);
  return (
    <div className={s.navMenuContainer}>
      <GreenButton
        onClick={() => {
          console.log(
            "кликнули на кнопку распродажи. Необходимо перейти на страницу Allsailes"
          );
        }}
        text={"1 day discount!"}
        className={s.btn}
      />
      <div className={s.nav}>
        <NavLink className={isActiveClass} to="/">
          Main Page
        </NavLink>
        <NavLink className={isActiveClass} to="/categories">
          Categories
        </NavLink>
        <NavLink className={isActiveClass} to="/products">
          All products
        </NavLink>
        <NavLink className={isActiveClass} to="/sales">
          All sales
        </NavLink>
      </div>
    </div>
  );
}

export default NavMenu;
