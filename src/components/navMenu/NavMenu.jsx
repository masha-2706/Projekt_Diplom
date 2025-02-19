import React from "react";
import { NavLink, Link } from "react-router";
import s from "./NavMenu.module.css";
import ButtonDiscount from "../ui/buttonBanner/Button";
import { useModal } from "../../context/ModalContext";


function NavMenu() {
  const { isMobile } = useModal();
  return (
    <div className={s.navMenuContainer}>
      {isMobile ? (
        ""
      ) : (
        <Link className={s.link} to="/sales">
          <ButtonDiscount children={"1 day discount!"} className={s.btn} />
        </Link>
      )}

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
  );
}

export default NavMenu;
