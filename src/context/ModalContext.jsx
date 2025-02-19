import React, { createContext, useState, useContext, useEffect } from 'react';
// Контекст модального окна
const ModalContext = createContext();
// Провайдер контекста
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  // Следим за изменением ширины экрана. UseState функция которая меняет состояние . 
  useEffect(() => {
    // useEffect хранит состояние мобильной версии для демонстрации модалки
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    
    // Очистка события на размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, isMobile }}>
      {children}
    </ModalContext.Provider>
  );
};
// Хук для использования контекста
export const useModal = () => {
  return useContext(ModalContext);
};