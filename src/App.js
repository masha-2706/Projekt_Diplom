import "./App.css";
import { Routes, Route } from "react-router";
import NavMenu from "./components/navMenu/NavMenu";
import Footer from './components/footer/Footer'

import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
