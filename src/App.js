import React from "react";
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

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu dishes={dishes} />} />
        <Route path="/menu/:id" element={<DishDetail dishes={dishes}/>} />
        <Route path="/blog" element={<Blogs blogs={blogs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
