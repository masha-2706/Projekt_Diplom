import { useEffect, useState } from "react";
import s from "./CardsContainer.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../ui/filter/Filter";
import { useSelector } from "react-redux";
import { fetchData, applyFilterLogic } from "../../utils/fetchData";
import NavigationButton from "../ui/NavigationButton/NavigationButton";

export default function CardsContainer({
  title = "no title",    // заголовок
  quantity = 0,          // количество карточек (0 – отобразить всё)
  navButton = false,     // отображение кнопки навигации
  filter = false,        // отображение интерфейса фильтрации
  id = 0,
  type                   // тип данных: categories, productsFromCategory, productsAll, sales, randomSales
})
// type - тип отображаемых данных. на текщий момент это могут быть:
//      сategories - список категорий
//      productsFromCategory - товары определенной категории
//      productsAll - все товары
//      sales - товары со скидками
//      randomSales - случайные товары со скидками
{
  const [originalData, setOriginalData] = useState([]); // исходный массив с сервера
  const [array, setArray] = useState([]);               // массив для отрисовки (может быть отфильтрован)
  const filterOptions = useSelector((state) => state.filter);

  // Загружаем данные с сервера только при изменении type, quantity или id
  useEffect(() => {
    async function loadData() {
      // Здесь отключаем фильтрацию при запросе, чтобы получить исходный массив
      const data = await fetchData({
        type,
        quantity,
        applyFilter: false,
        id
      });
      setOriginalData(data);
      setArray(data);
    }
    loadData();
  }, [type, quantity, id]);

  useEffect(() => {
    if (filter) {
      const filtered = originalData.length ? applyFilterLogic(originalData, filterOptions) : [];
      setArray(filtered);
    }
  }, [filterOptions, originalData, filter]);

  return (
    <section className={s.CardsContainer}>
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

      {/* Отрисовка интерфейса фильтрации */}
      {filter && <Filter />}

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
        {(type === "randomSales" ||
          type === "productsAll" ||
          type === "productsFromCategory") &&
          array.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              discont_price={item.discont_price}
              id={item.id}
            />
          ))}
      </div>
    </section>
  );
}
