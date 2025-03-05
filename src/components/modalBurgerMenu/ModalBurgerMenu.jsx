import React, { useEffect, useRef, useState } from "react";
import s from "./ModalBurgerMenu.module.css";
import { useModal } from "../../context/ModalContext";
import { NavLink } from "react-router";
import Icon from "../ui/themeSwitchElement/Icon";
import Button from "../ui/button/Button";
import ModalWindow from "../modalWindow/ModalWindow";

import { useTheme } from "../../context/ThemeContext";
const ModalBurgerMenu = () => {
  const { isDarkTheme } = useTheme();
  //  для получения переменных из контекста используем хук useModal
  const { isModalOpen, setIsModalOpen } = useModal();
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const modalRef = useRef(null);

  // Открытие модального окна
  const handleOpenModal = () => {
    setModalWindowOpen(true);
  };

  // Закрытие только модального окна (бургер остается открытым)
  const handleCloseModal = () => {
    setModalWindowOpen(false);
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.classList.toggle("modalOpen", isModalOpen);
      modalRef.current.classList.toggle("modalClose", !isModalOpen);
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <>
      {isModalOpen && <div className={s.overlay}></div>}
      <div
        ref={modalRef}
        className={`${s.modal} ${isDarkTheme ? "dark-modal" : "light-modal"}`}
      >
        {/* Применяем класс для модального окна */}
        <div className={s.modalContent}>
          {/* При клике по иконке закрытия  isModalOpen = false */}
          <button className={s.iconBtn} onClick={() => setIsModalOpen(false)}>
            <Icon id="icon-close" className={s.iconClose} />
          </button>
          {/* Применяем класс для содержимого окна */}
          <div className={s.nav}>
            <NavLink className={s.link} to="/" onClick={handleCloseModal}>
              Main Page
            </NavLink>
            <NavLink
              className={s.link}
              to="/categories"
              onClick={handleCloseModal}
            >
              Categories
            </NavLink>
            <NavLink
              className={s.link}
              to="/products"
              onClick={handleCloseModal}
            >
              All products
            </NavLink>
            <NavLink className={s.link} to="/sales" onClick={handleCloseModal}>
              All sales
            </NavLink>
          </div>
          <div className={s.buttonContainer}>
            <Button
              link="#"
              text="1 day discount!"
              variant="oneDayDiscount"
              className={s.btn}
              onClick={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBurgerMenu;
