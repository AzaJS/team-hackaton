import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Filters from "../Filters/Filters";

import ProductsCard from "../ProductsCard/ProductsCard";

const MensProductsList = () => {
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
  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);
  const [type, setType] = useState([]);
  const [price, setPrice] = useState([1, 1000000]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      type: type,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      type: type,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, type, limit, price]);
  //   console.log(products)
  let list = products.filter((item) => {
    return item.gender == "Men";
  });
  return (
    <div className="container">
      <div className="serach-prod">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Input.Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "25vw", marginTop: "20px" }}
            placeholder="Search..."
          />
          <div
            style={{ display: "flex", flexDirection: "column", width: "30%" }}
          >
            <Filters
              type={type}
              setType={setType}
              price={price}
              setPrice={setPrice}
            />
          </div>
        </div>
      </div>
      <div className="prod-list">
        {list.length > 0 ? (
          list.map((item) => <ProductsCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
  );
};

export default MensProductsList;