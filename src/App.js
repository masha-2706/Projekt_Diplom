import "./App.css";
import "./styles/global.css"; // импорт файла с цветовой палитрой и глобальными стилями
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CardsPage from "./pages/CardsPage";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ShoppingCartPage from './pages/ShoppingCartPage'
import NotFound from "./pages/NotFound";
import ModalBurgerMenu from './components/modalBurgerMenu/ModalBurgerMenu';
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import ProductPage from "./pages/ProductPage";
import ProductsInCategory from "./pages/ProductsInCategory";
import CategoriesPage from "./pages/CategoriesPage";

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Страница "Все категории" */}
        <Route path="/categories"
          element={
            <CategoriesPage />}
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

        {/* Страница "Все продукты" */}
        <Route
          path="/products"
          element={
            <CardsPage />
          }
        />

        {/* Страница "Все скидки" */}
        <Route
          path="/sales"
          element={
            <CardsPage />
          }
        />

        {/* Страница "Избранное" */}
        <Route
          path="/favorites"
          element={
            <CardsPage />
          }
        />



        {/* Новый маршрут для продуктов через "All Products" */}
        <Route path="/products/:productId" 
        element={
        <ProductPage />
        } />

        {/* Страница "Товар по категории и ID" */}
        <Route path="/categories/:categoryId/:productId" 
        element={
        <ProductPage
         />} />


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
