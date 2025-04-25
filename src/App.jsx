import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop/:id" element={<Details />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
