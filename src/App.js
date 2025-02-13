import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
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
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;