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
import ProductsInCategory from "./pages/ProductsInCategory";
import { useInitializeData } from "./hooks/initializeData";
import Categories from "./pages/Categories";

function App() {
  //при первой загрузке приложения составляется справочник категорий с названиями
  useInitializeData() //кастомный хук для этого
  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Страница "Все категории" */}
        <Route path="/categories"
          element={
            <Categories
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
              checkbox={false}
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

        {/* Страница "Корзина" */}

        <Route
          path="/cart"
          element={
            <ShoppingCartPage
              title="Cart"
              type='cart'
              breadCrumbs={true}
            />} />

        {/* Страница Not Found */}
            <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer />
      <ModalBurgerMenu />
    </div>
  );
}

export default App;
