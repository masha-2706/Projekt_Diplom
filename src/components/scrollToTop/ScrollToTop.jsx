import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); //useLocation() возвращает объект { pathname, search, hash, state, key }.Деструктурируем pathname, чтобы получить текущий  URL (например, /home или /categories)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); //useEffect срабатывает при изменении pathname. window.scrollTo(0, 0); прокручивает страницу в начало (верхний левый угол)

  return null; //null означает, что этот компонент не отображает ничего в DOM, но выполняет свой эффект

};

export default ScrollToTop;