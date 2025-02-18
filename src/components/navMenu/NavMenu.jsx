import React from "react";
import { NavLink, Link } from "react-router";
import s from "./NavMenu.module.css";
import ButtonDiscount from "../ui/buttonBanner/Button";

function NavMenu() {
  return (
    <div>
      <div className={s.navMenuContainer}>
        <Link className={s.link} to="/sales">
          <ButtonDiscount children={"1 day discount!"} className={s.btn} />
        </Link>

        <div className={s.nav}>
          <NavLink className={s.link} to="/">
            {" "}
            Main Page{" "}
          </NavLink>
          <NavLink className={s.link} to="/categories">
            {" "}
            Categories{" "}
          </NavLink>
          <NavLink className={s.link} to="/products">
            {" "}
            All products{" "}
          </NavLink>
          <NavLink className={s.link} to="/sales">
            {" "}
            All sales{" "}
          </NavLink>
        </div>
      </div>
      <div className={s.burger_icon}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default NavMenu;
