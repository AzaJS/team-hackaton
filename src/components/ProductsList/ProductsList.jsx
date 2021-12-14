import React, { useContext, useEffect, useState } from "react";

import { productsContext } from "../../contexts/productsContext";

const ProductsList = () => {
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([1, 1000000]);
  const { getProducts, products } =
    useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
  <div className="products-list">
      {products.map((item)=> (
        <div className="product-card">
          <h2>{item.title}</h2>
          <div>
          <div className="photos">
            <div><img src={item.photo1} alt="" /></div>
            <div><img src={item.photo2} alt="" /><img src={item.photo3} alt="" /></div>
          </div>
          </div>
          <div>
            <div>{item.price}</div>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default ProductsList;
