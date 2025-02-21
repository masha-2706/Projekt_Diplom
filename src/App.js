import "./App.css";
import "./styles/global.css"; // импорт файла с цветовой палитрой и глобальными стилями
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CardsPage from "./pages/CardsPage";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import IconButton from "./components/ui/IconButton/IconButton";

import NotFound from "./pages/NotFound";
import ModalBurgerMenu from './components/modalBurgerMenu/ModalBurgerMenu';

function App() {
  return (
    <div className="App">
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
              breadCrumbs = {true} />}
        />

        {/* Страница "Товары определенной категории" */}
        <Route
          path="/categories/:category"
          element={
            <CardsPage
              title="Products"
              filter={true}
              type="productsFromCategory"
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
          element={<CardsPage title="Cart" type="cart" breadCrumbs={true} />}
        />
      </Routes>

      <Footer />
      <ModalBurgerMenu />
    </div>
  );
}

export default App;
