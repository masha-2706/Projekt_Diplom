import React, { useState } from "react";
import styles from "./FormStyles.module.css";
import handsImage from "./image.png";
import error from './x-octagon.png';

function DiscountForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [message, setMessage] = useState(""); // Сообщение (успех/ошибка)
  const [isSuccess, setIsSuccess] = useState(false); // Тип сообщения
  const [showMessage, setShowMessage] = useState(false); // Видимость сообщения

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setShowMessage(false); // Скрываем сообщение при изменении данных
  };

  const validateInput = () => {
    const nameValid = /^[a-zA-Z\s]+$/.test(formData.name.trim());
    const phoneValid = /^[0-9]{10,15}$/.test(formData.phone.trim());
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim());

    return nameValid && phoneValid && emailValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInput()) {
      setMessage("The discount has been successfully sent by email"); // Сообщение об успехе
      setIsSuccess(true);
      setShowMessage(true);

      setFormData({ name: "", phone: "", email: "" }); 
    } else {
      setMessage("Wrong input. Try again");
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
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />

            {showMessage && (
              <div
                className={`${styles.message} ${
                  isSuccess ? styles.success : styles.error
                }`}
              >
                {isSuccess ? (
                  <span className={styles.successText}>{message}</span>
                ) : (
                  <div className={styles.errorContent}>
                    <img src={error} alt="Error" className={styles.errorIcon} />
                    <span className={styles.errorText}>{message}</span>
                  </div>
                )}
              </div>
            )}

            <button type="submit" className={styles.button}>
              Get a discount
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DiscountForm;
