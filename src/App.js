import React from 'react';
import AddProduct from './components/AddProduct/AddProduct';
import "antd/dist/antd.css"
import "./App.css"
import ProductsList from './components/ProductsList/ProductsList';

const App = () => {
  return (
    <div>
      <AddProduct />
      <ProductsList />
    </div>
  );
};

export default App;