import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";
import WomensProductsCard from "../WomensProductsList/WomensProductsCard";

const MensProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  //   console.log(products)
  let list = products.filter((item) => {
    return item.sex == "Men";
  });
  return (
    <div className="womens-prod-list">
      {list.map((item) => (
        <WomensProductsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MensProductsList;
