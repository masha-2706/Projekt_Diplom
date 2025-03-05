import React, { useState } from "react";
import styles from "./DiscountForm.module.css";
import Button from "../ui/button/Button";

function DiscountForm() {
  // локальное состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // состояние для хранения ошибок ввода
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // пути к изображениям
  const handsImage = '/media/discountFormImages/image.png';
  const errorIcon = '/media/discountFormImages/x-octagon.png';

  // локальное состояние для отображения сообщений пользователю
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // обработчик изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // очистка ошибок при изменении значения
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setShowMessage(false);
  };

  // функция валидации данных формы
  const validateInput = () => {
    let isValid = true;
    let newErrors = { name: "", phone: "", email: "" };

    // проверка имени (только буквы и пробелы)
    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should only contain letters and spaces";
      isValid = false;
    }

    // проверка номера телефона (от 10 до 15 цифр)
    if (!/^[0-9]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number should be between 10 and 15 digits";
      isValid = false;
    }

    // проверка email (корректный формат почты)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      setMessage("The discount has been successfully sent by email");
      setIsSuccess(true);
      setShowMessage(true);
      setFormData({ name: "", phone: "", email: "" });
    } else {
      setMessage("Wrong input. Check the errors and try again.");
      setIsSuccess(false);
      setShowMessage(true);
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>5% off on the first order</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img
            src={handsImage}
            alt="Hands with garden tools and plants"
            className={styles.handsImage}
          />
        </div>

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
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}

            {/* поле ввода телефона */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}

            {/* поле ввода email */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}

            {/* сообщение об ошибке или успехе */}
            {showMessage && (
              <div>
                {isSuccess ? (
                  <span className={styles.successText}>{message}</span>
                ) : (
                  <div className={styles.errorContent}>
                    <img src={errorIcon} alt="Error" className={styles.errorIcon} />
                    <span className={styles.errorText}>{message}</span>
                  </div>
                )}
              </div>
            )}

            {/* кнопка отправки */}
            <Button text="Get a discount" type="submit" variant="getDiscountBtn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DiscountForm;

