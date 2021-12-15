import { Empty } from "antd";
import React, { useEffect, useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";

import "./WomensProductsList.css";

const WomensProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  //   console.log(products)
  let list = products.filter((item) => {
    return item.gender == "Women";
  });
  return (
    <div className="prod-list">
      {list.length > 0 ? (
        list.map((item) => <ProductsCard key={item.id} item={item} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default WomensProductsList;
