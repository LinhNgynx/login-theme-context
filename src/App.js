import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./component/ProductList/Products";
import Cart from "./component/ProductList/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
