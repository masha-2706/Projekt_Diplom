import React, { createContext, useState, useContext, useEffect } from 'react';
// Контекст модального окна
const ModalContext = createContext();
// мы создаем модал контекс используя createContext функцию реакта
// Провайдер контекста.
export const ModalProvider = ({ children }) => {
  // Состояние модального окна открыто/закрытого определяется переменной isModalOpen, изменение состояния происходит через функцию setIsModalOpen 
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Состояние ширины экрана (десктоп/мобиль) определяется переменной isMobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  // Следим за изменением ширины экрана. UseState функция которая меняет состояние . 
  useEffect(() => {
    // useEffect вызывается при первом рендере и определяется ширина экрана если она меньше 480 значит приложение в сосотоянии  мобильной версии  поэтому navMenu скрывается в header а BurgerMenu показывает.
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);

    };
    window.addEventListener('resize', handleResize);
    
    // Очистка события на размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    // Используем Provider для получения переменных value={{ isModalOpen, setIsModalOpen, isMobile }} в любой точке нашего приложения 
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, isMobile }}>
      {children}
    </ModalContext.Provider>
  );
};
// Хук для использования контекста 
export const useModal = () => {
  return useContext(ModalContext);
};