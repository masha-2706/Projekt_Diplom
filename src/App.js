import "./App.css";
import "./styles/global.css"; // импорт файла с цветовой палитрой и глобальными стилями
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CardsPage from "./pages/CardsPage";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import IconButton from "./components/ui/IconButton/IconButton";
import ShoppingCartPage from './pages/ShoppingCartPage'
import NotFound from "./pages/NotFound";
import ModalBurgerMenu from './components/modalBurgerMenu/ModalBurgerMenu';
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import ProductPage from "./pages/ProductPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "./services/baseBackEnd";
import { setCategoriesList } from "./redux/slices/categoriesList";
import ProductsInCategory from "./pages/ProductsInCategory";

function App() {
  //при первой загрузке приложения составляется справочник категорий с названиями
  const dispatch = useDispatch()
  useEffect(() => {
    async function loadCategories() {
      const data = await getAllCategories() //получаю данные с бека
      const categoriesList = data.map(category => ({ id: category.id, title: category.title })) //преобразовываю полученные данные в аккуратный массив
      dispatch(setCategoriesList(categoriesList)) // записываю результат в состояние
    }
    loadCategories() //вызываю функцию
  }, [dispatch])

  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Страница "Все категории" */}
        <Route
          path="/categories"
          element={
            <CardsPage
              title="Categories"
              type='categories'
              breadCrumbs={true} />}
        />

        {/* Страница "Товары определенной категории" */}
        <Route
          path="/categories/:category"
          element={
            <ProductsInCategory
              title="Products"
              breadCrumbs={true}
            />
          }
        />

        {/* Страница "Все скидки" */}
        <Route
          path="/sales"
          element={
            <CardsPage
              title="All sales"
              filter={true}
              type="randomSales"
              breadCrumbs={true}
            />
          }
        />

        {/* Страница "Все продукты" */}
        <Route
          path="/products"
          element={
            <CardsPage
              title="All products"
              filter={true}
              type="productsAll"
              breadCrumbs={true}
            />
          }
        />

        {/* Страница "Товар по ID" */}
        <Route
          path="/categories/:categoryId/:productId"
          element={<ProductPage />}
        />


        {/* Страница "Избранное" */}
        <Route
          path="/favorites"
          element={
            <CardsPage title="Favorites" type="favorites" breadCrumbs={true} />
          }
        />

        {/* Страница "Корзина" */}

        <Route
          path="/cart"
          element={
            <ShoppingCartPage
              title="Cart"
              type='cart'
              breadCrumbs={true}
            />} />

      </Routes>

      <Footer />
      <ModalBurgerMenu />
    </div>
  );
}

export default App;
