import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";

import ProductsCard from "../ProductsCard/ProductsCard"

const MensProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  //   console.log(products)
  let list = products.filter((item) => {
    return item.gender == "Men";
  });
  return (
    <div className="womens-prod-list">
      {list.map((item) => (
        <ProductsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MensProductsList;
