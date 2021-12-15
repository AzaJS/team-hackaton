import { Empty } from "antd";
import React, { useEffect, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";

import "./WomensProductsList.css";

const WomensProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  const { getProducts, products } = useContext(productsContext);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
    });
  }, [search, page, limit]);
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
