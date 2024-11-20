import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, AboutPage, ShopPage } from "./pages/index";
import { Header, Footer } from "./blocks/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
