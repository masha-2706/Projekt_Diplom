import s from "./BlockTitle.module.css";
import NavigationButton from "../ui/NavigationButton/NavigationButton";

export default function BlockTitle({ title, navButton }) {
  return (
    <div>
      <div className={s.CardsContainer_header}>
        <h2>{title}</h2>
        {/* если  navButton = true - отрисуется линия от заголовка и сам navButton */}

        {navButton && <div className={s.CardsContainer_header_line}></div>}
        {navButton && (
          <div className={s.CardsContainer_header_buttons}>
            {title === "Categories" && (
              <NavigationButton text="All сategories" link="/categories" />
            )}
            {title === "Sales" && (
              <NavigationButton text="All sales" link="/sales" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
