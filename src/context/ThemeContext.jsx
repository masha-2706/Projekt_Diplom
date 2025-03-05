import React, { createContext, useState, useEffect, useContext } from "react";
// Создаем контекст
const ThemeContext = createContext();
// Компонент провайдера контекста  передает тему (темная/светлая) всем его дочерним компонентам через контекст.
export const ThemeProvider = ({ children }) => {
    // состояние isDarkTheme, которое хранит true (если тема темная) или false (если светлая).
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // Проверяем сохраненную тему в localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkTheme(prefersDarkScheme);
    }
  }, []);
   // Функция для переключения темы
   const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  // Сохраняем тему в localStorage при изменении
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Хук для использования контекста в компонентах
export const useTheme = () => useContext(ThemeContext);