import React, { useState, useEffect, useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import WomensProductsCard from "./WomensProductsCard";

import "./WomensProductsList.css"

const WomensProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
//   console.log(products)
 let list = products.filter((item)=>{
     return item.sex == 'Women'
 })
  return (
      <div className="womens-prod-list">
          {list.map((item)=>(
              <WomensProductsCard key={item.id} item={item} />
          ))}
      </div>
  );
};

export default WomensProductsList;
