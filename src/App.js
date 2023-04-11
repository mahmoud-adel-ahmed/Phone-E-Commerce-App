import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Default,
  ProductList,
  Details,
  Cart,
  Modal,
} from "./components";
import Context from "./context";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Context />
      <Modal />
    </div>
  );
};

export default App;
