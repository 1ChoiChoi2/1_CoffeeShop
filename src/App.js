import React, { useState } from "react";
import { dishes, blogs } from "./services/data";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishDetail from "./pages/DishDetail";
import Blogs from "./pages/Blogs";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  // Add Item to Cart + With Quanity
  function addToCart(dish, dishQuantity) {
    const existingDish = cart.find((cartItem) => cartItem.id === dish.id);

    if (dishQuantity > 0) {
      if (existingDish) {
        existingDish.quantity += dishQuantity;
        setCart([...cart]);
      } else {
        setCart([...cart, { ...dish, quantity: dishQuantity }]);
      }
    } else {
      setCart([...cart]);
    }
  }

  // Remove Item from Cart
  function removeFromCart (itemId) {
    const updateCart = cart.filter(cartItem => cartItem.id !== itemId);
    setCart(updateCart);
  };

  console.log(cart);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu dishes={dishes} />} />
        <Route
          path="/menu/:id"
          element={<DishDetail addToCart={addToCart} dishes={dishes} />}
        />
        <Route path="/blog" element={<Blogs blogs={blogs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
