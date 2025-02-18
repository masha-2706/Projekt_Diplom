import React from "react";
import { NavLink } from "react-router";
import s from "./NavMenu.module.css";
import Button from "../ui/button/Button";


function NavMenu() {
  return (
    <div className={s.navMenuContainer}>
      <div className={s.buttonContainer}>
        <Button link='#' text='1 day discount!' variant="oneDayDiscount" />
      </div>


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
