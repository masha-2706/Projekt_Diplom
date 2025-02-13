import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Breadcrumbs from "./components/ui/breadCrumbs/BreadCrumbs";
import Categories from "./pages/Categories";



function App() {
  return (
 
      <div className="App">
        <Header />

        {/* Добавляем хлебные крошки, но скрываем их на главной */}
        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Categories />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;