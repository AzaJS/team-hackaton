import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

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
  const { getProducts, products, productsTotalCount } = useContext(productsContext);

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
    return item.gender == "Men";
  });
  return (
    <div className="container">
      <div className="serach-prod">
      <Input.Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "25vw" }}
          placeholder="Search..."
        />
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
