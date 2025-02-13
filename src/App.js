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


        {/* Страница "Все скидки" */}
        <Route
          path="/sales"
          element={
            <CardsPage
              title="All sales"
              filter={true}
              type='randomSales' />} />

        {/* Страница "Все продукты" */}
        <Route
          path="/products"
          element={
            <CardsPage
              title="All products"
              filter={true}
              type='productsAll' />} />

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