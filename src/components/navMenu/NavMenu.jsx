import React, { useState } from "react";
import { NavLink } from "react-router";
import s from "./NavMenu.module.css";
import Button from "../ui/button/Button";
import ModalWindow from "../modalWindow/ModalWindow";

function NavMenu() {
  const [modalWindowOpen, setModalWindowOpen] = useState(false); // Состояние для открытия модального окна

  const handleOpenModal = () => {
    setModalWindowOpen(true);
  };

  return (

    <div className={s.navMenuContainer}>
      <div className={s.buttonContainer}>
        <Button text="1 day discount!" variant="oneDayDiscount" onClick={handleOpenModal} />
      </div>

      <div className={s.nav}>
        <NavLink className={s.link} to="/">Main Page</NavLink>
        <NavLink className={s.link} to="/categories">Categories</NavLink>
        <NavLink className={s.link} to="/products">All products</NavLink>
        <NavLink className={s.link} to="/sales">All sales</NavLink>
      </div>

      {/* Вставляем модальное окно, оно рендерится, когда isModalOpen === true */}
      {modalWindowOpen && <ModalWindow onClose={() => setModalWindowOpen(false)} />}
    </div>
  );
}

export default NavMenu;

