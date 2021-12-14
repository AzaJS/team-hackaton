import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
