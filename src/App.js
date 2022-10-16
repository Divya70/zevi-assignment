import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Product } from "./pages/Product/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
