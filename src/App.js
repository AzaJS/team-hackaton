import React from "react";

import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header"
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

const App = () => {
  return (
    <ProductsContextProvider>
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
