import React, { useEffect, useRef, useState } from "react";
import s from "./ModalBurgerMenu.module.css";
import { useModal } from "../../context/ModalContext";
import { NavLink } from "react-router";
import Icon from "../ui/themeSwitchElement/Icon";
import Button from "../ui/button/Button";
import RandomProductModal from "../modalWindow/ModalWindow";

const ModalBurgerMenu = () => {
  // Получаем состояние бургер-меню из контекста
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
    <div ref={modalRef} className={s.modal}>
      <div className={s.modalContent}>
        <button className={s.iconBtn} onClick={() => setIsModalOpen(false)}>
          <Icon id="icon-close" className={s.iconClose} />
        </button>
        <div className={s.nav}>
          <NavLink className={s.link} to="/" onClick={() => setIsModalOpen(false)}>
            Main Page
          </NavLink>
          <NavLink className={s.link} to="/categories" onClick={() => setIsModalOpen(false)}>
            Categories
          </NavLink>
          <NavLink className={s.link} to="/products" onClick={() => setIsModalOpen(false)}>
            All products
          </NavLink>
          <NavLink className={s.link} to="/sales" onClick={() => setIsModalOpen(false)}>
            All sales
          </NavLink>
        </div>
        <div className={s.buttonContainer}>
          <Button
            text="1 day discount!"
            variant="oneDayDiscount"
            className={s.btn}
            onClick={handleOpenModal} // Открываем только модальное окно
          />
        </div>
      </div>

      {/* Если модалка открыта, рендерим `RandomProductModal`, но бургер-меню остается */}
      {modalWindowOpen && <RandomProductModal onClose={handleCloseModal} />}
    </div>
  );
};

export default ModalBurgerMenu;
