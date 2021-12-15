import React from "react";

import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Routing from "./Routing";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
