import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Добавляем BrowserRouter
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BreadCrumbs from "./components/ui/breadCrumbs/BreadCrumbs"; // Импортируем хлебные крошки
import Home from "./pages/Home";

function App() {
  return (
    
      <div className="App">
        <Header />
        <BreadCrumbs /> 
        <Routes>
          <Route path="/" element={<Home />} />   
        </Routes>
        <Footer />
      </div>
  
  );
}

export default App;
