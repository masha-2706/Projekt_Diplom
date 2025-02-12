import React, { useState } from "react";
import styles from "./DiscountForm.module.css";
import Button from "../ui/buttonBanner/BtnBanner";

function DiscountForm() {
  // локальноое состояние для хранения данных формы (имя, телефон, email)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // переменные для хранения путей к изображениям
  const handsImage = '/media/discountFormImages/image.png'; // Изображение рук с инструментами
  const error = '/media/discountFormImages/x-octagon.png'; // Иконка ошибки

  // локальное состояние для управления сообщениями пользователю
  const [message, setMessage] = useState(""); // Текст сообщения
  const [isSuccess, setIsSuccess] = useState(false); // Флаг успешного ввода
  const [showMessage, setShowMessage] = useState(false); // Флаг отображения сообщения

  // функция обработки изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setShowMessage(false); // при изменении данных скрываем сообщение об ошибке или успехе
  };

  // функция валидации введенных пользователем данныах
  const validateInput = () => {
    const nameValid = /^[a-zA-Z\s]+$/.test(formData.name.trim()); // Проверка, что имя содержит только буквы и пробелы
    const phoneValid = /^[0-9]{10,15}$/.test(formData.phone.trim()); // Проверка номера телефона (от 10 до 15 цифр)
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim()); // Проверка email

    return nameValid && phoneValid && emailValid; // Все поля должны быть валидными
  };

  // функция обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы при отправке формы

    if (validateInput()) {
      setMessage("The discount has been successfully sent by email"); // сообщение об успешной отправке
      setIsSuccess(true);
      setShowMessage(true);

      // Очищаем форму после успешной отправки
      setFormData({ name: "", phone: "", email: "" });
    } else {
      setMessage("Wrong input. Try again"); // сообщение об ошибке
      setIsSuccess(false);
      setShowMessage(true);
    }
  };

  return (
    <div className={styles.banner}>
      {/* заголовок формы */}
      <div className={styles.textSection}>
        <h2 className={styles.title}>5% off on the first order</h2>
      </div>

      <div className={styles.content}>
        {/* секция с изображением */}
        <div className={styles.imageSection}>
          <img
            src={handsImage}
            alt="Hands with garden tools and plants"
            className={styles.handsImage}
          />
        </div>

        {/* форма для ввода данных */}
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* поле ввода имени */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
            {/* поле ввода номера телефона */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
            {/* поле ввода email */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />

            {/* блок отображения сообщений об успехе или ошибке */}
            {showMessage && (
              <div>
                {isSuccess ? (
                  <span className={styles.successText}>{message}</span> // Сообщение об успешной отправке
                ) : (
                  <div className={styles.errorContent}>
                    <img src={error} alt="Error" className={styles.errorIcon} />
                    <span className={styles.errorText}>{message}</span> // Сообщение об ошибке
                  </div>
                )}
              </div>
            )}

            {/* Кнопка отправки формы */}
            <Button type="submit" className={styles.button}>
              Get a discount
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DiscountForm;
