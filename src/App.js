import React from "react";

import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductsContextProvider from "./contexts/productsContext";
import ProductsList from "./components/ProductsList/ProductsList";
import Routing from "./Routing";

const App = () => {
  return (
    <ProductsContextProvider>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
