import React from "react";
import Header from "./components/Header/Header";

import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
