import { useEffect, useState } from "react";
import s from "./CardsContainer.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../ui/filter/Filter";
import { useSelector } from "react-redux";
import { fetchData } from "../../utils/fetchData";

export default function CardsContainer(
  {
    title = "no title", // заголовок
    quantity = 0, // кол-во карточек для отображения. "0" чтобы отобразить всё
    navButton = false, // отображение кнопки навигации(true/false)
    filter = false, // отображение интерфейса фильтрации и сортировки(true/false)
    id = 0,
    type
  })
// type - тип отображаемых данных. на текщий момент это могут быть:
//      сategories - список категорий
//      productsFromCategory - товары определенной категории
//      productsAll - все товары
//      sales - товары со скидками
//      randomSales - случайные товары со скидками
{
  const [array, setArray] = useState([]); // массив данных для отображения
  const filterOptions = useSelector((state) => state.filter); // состояние фильтров из Redux

  // Этап 1. получение с сервера соответствующего массива данных в зависимости от типа
  useEffect(() => {
    async function loadData() {
      const data = await fetchData({
        type,
        quantity,
        applyFilter: filter, // включение фильтрации
        filterOptions,
        id
      });
      setArray(data); // сохраняем полученные данные в локальном состоянии
    }
    loadData();
  }, [type, quantity, filter, filterOptions, id]);

  /////////////////////////////////////////////////
  // Этап 3. Отрисовка
  return (
    <section className={s.CardsContainer}>
      {/* отрисовка заголовка и кнопки навигации */}
      <div className={s.CardsContainer_header}>
        <h2>{title}</h2>

        {/* если  navButton = true - отрисуется линия от заголовка и сам navButton */}
        {navButton && <div className={s.CardsContainer_header_line}></div>}
        {navButton && <div style={{ backgroundColor: "red" }}>navButton</div>}
      </div>

      {/* Отрисовка интерфейса фильтрации */}
      {filter === true && (<Filter />
      )}

      {/* отрисовка карточек */}
      <div className={s.CardsContainer_container}>
        {type === "categories" &&
          array.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
              id={item.id}
            />
          ))}

        {(type !== "categories") &&
          array.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              discont_price={item.discont_price}
            />
          )
          )}
      </div>
    </section>
  );
}
