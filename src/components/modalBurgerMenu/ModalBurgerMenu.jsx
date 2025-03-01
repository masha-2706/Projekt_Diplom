import React, { useEffect, useRef } from "react";
import s from "./ModalBurgerMenu.module.css";
import { useModal } from "../../context/ModalContext";
import { NavLink } from "react-router";
import Icon from "../ui/themeSwitchElement/Icon";
import Button from "../ui/button/Button";
import { useTheme } from "../../context/ThemeContext";
const ModalBurgerMenu = () => {
  const { isDarkTheme } = useTheme();
  //  для получения переменных из контекста используем хук useModal
  const { isModalOpen, setIsModalOpen } = useModal();
  const modalRef = useRef(false);
  // Используем useEffect для добавления класса сss modalOpen и modalClose
  useEffect(() => {
    if (modalRef.current) {
      if (isModalOpen) {
        modalRef.current.classList.add("modalOpen");
        modalRef.current.classList.remove("modalClose");
      } else {
        modalRef.current.classList.add("modalClose");
        modalRef.current.classList.remove("modalOpen");
      }
    }
  }, [isModalOpen]);
  const handleCloseModal = () => setIsModalOpen(false);
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
