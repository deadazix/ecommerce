import React from "react";
import "../src/styles/animation.css";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import "../src/styles/typography.css";
import "../src/styles/base.css";
import Navigation from "./components/navigation/Navigation";
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
