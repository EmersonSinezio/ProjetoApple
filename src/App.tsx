import Body from "./components/Body";
import ChosenProduct from "./components/ChosenProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/product" element={<ChosenProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
