import React from "react";
import { NavLink, Link } from "react-router";
import s from "./NavMenu.module.css";
import ButtonDiscount from "../ui/ButtonDiscount"; 

function NavMenu() {
  return (
    <div className={s.navMenuContainer}>

      <Link className={s.link} to="/sales">
        <ButtonDiscount text={"1 day discount!"} className={s.btn} />
      </Link>


      <div className={s.nav}>
        <NavLink className={s.link} to="/"> Main Page </NavLink>
        <NavLink className={s.link} to="/categories"> Categories </NavLink>
        <NavLink className={s.link} to="/products"> All products </NavLink>
        <NavLink className={s.link} to="/sales"> All sales </NavLink>
      </div>
    </div>
  );
}

export default NavMenu;
