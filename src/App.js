import "./App.css";
import './styles/global.css' // импорт файла с цветовой палитрой и глобальными стилями
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CardsPage from "./pages/CardsPage";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Breadcrumbs from "./components/ui/breadCrumbs/BreadCrumbs";


function App() {
  return (
    <div className="App">
      <Header />

      {/* Добавляем хлебные крошки, но скрываем их на главной */}
      <Breadcrumbs />

      <Routes>
        <Route
          path="/"
          element={
            <Home />
          } />
        {/* Страница "Все категории" */}
        <Route
          path="/categories"
          element={
            <CardsPage
              title="Categories"
              type='categories' />}
        />

        {/* Страница "Товары определенной категории" */}
        <Route
          path="/categories/:category"
          element={
            <CardsPage
              title="Products"
              filter={true}
              type='productsFromCategory'
              breadCrumbs={true}
            />} />

        {/* Страница "Все скидки" */}
        <Route
          path="/sales"
          element={
            <CardsPage
              title="All sales"
              filter={true}
              type='randomSales'
              breadCrumbs={true}
            />} />

        {/* Страница "Все продукты" */}
        <Route
          path="/products"
          element={
            <CardsPage
              title="All products"
              filter={true}
              type='productsAll'
              breadCrumbs={true}
            />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;