import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductBase from "./pages/ProductBase";
import Products from "./pages/Products";
import ErrorPage from "./pages/404";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductBase />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
