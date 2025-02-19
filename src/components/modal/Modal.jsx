import React, { useEffect, useRef } from "react";
import s from "./Modal.module.css";
import { useModal } from "../../context/ModalContext";
import { NavLink, Link } from "react-router";
import Icon from "../ui/themeSwitchElement/Icon";
import ButtonDiscount from "../ui/buttonBanner/Button";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const modalRef = useRef(false);
  // Используем useEffect для добавления анимации
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
  if (!isModalOpen) return null;
  return (
    <div ref={modalRef} className={s.modal}>
      {/* Применяем класс для модального окна */}
      <div className={s.modalContent}>
        <button className={s.iconBtn} onClick={() => setIsModalOpen(false)}>
          <Icon id="icon-close" className={s.iconClose} />
        </button>
        {/* Применяем класс для содержимого окна */}
        <div className={s.nav}>
          <NavLink className={s.link} to="/">
            Main Page
          </NavLink>
          <NavLink className={s.link} to="/categories">
            Categories
          </NavLink>
          <NavLink className={s.link} to="/products">
            All products
          </NavLink>
          <NavLink className={s.link} to="/sales">
            All sales
          </NavLink>
        </div>
        <Link className={s.link} to="/sales">
          <ButtonDiscount children={"1 day discount!"} className={s.btn} />
        </Link>
      </div>
    </div>
  );
};
export default Modal;
