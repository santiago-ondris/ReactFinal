import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio"
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import Cart from './components/Cart';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ProductDetailPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default App