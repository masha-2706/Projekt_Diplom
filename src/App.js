import styles from "./App.css";
import { Routes, Route } from "react-router";
import Footer from './components/footer/Footer'


import Home from './pages/Home'
import Header from "./components/header/Header";
import CardsPage from "./pages/CardsPage";


function App() {
  return (
    <div className="App">
      <Header />

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

        {/*  */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Это линк в Header
{/* <Link to='/categories'>Categories</Link> 
<Link to='/products'>All products</Link> 
<Link to='/sales'>All sales</Link>  */}