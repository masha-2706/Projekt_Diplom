import styles from "./App.css";
import { Routes, Route } from "react-router";
import Footer from './components/footer/Footer'


import Home from './pages/Home'
import Header from "./components/header/Header";


function App() {
  return (
    <div className='App'>
      <Header/>
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

// Это линк в Header
{/* <Link to='/categories'>Categories</Link> 
<Link to='/products'>All products</Link> 
<Link to='/sales'>All sales</Link>  */}