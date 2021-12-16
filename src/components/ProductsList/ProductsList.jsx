import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

import ProductsCard from "../ProductsCard/ProductsCard";

import "./ProductsList.css";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { gender } = useParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(1);

  const limit = 4;

  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);

  const pageVisited = (page - 1) * limit;

  const paginateProducts = products?.slice(pageVisited, pageVisited + limit);

  useEffect(() => {
    getProducts("gender", gender);
  }, [searchParams, gender]);

  useEffect(() => {
    setSearch("");
    setPage(1);
  }, [gender]);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchParams({
      q: value,
    });

    setSearch(value);
  };

  const handlePaginationChange = (page) => {
    setPage(page);
  };

  return (
    <div className="container">
      <div className="serach-prod">
        <Input.Search
          value={search}
          onChange={handleSearch}
          style={{ width: "25vw" }}
          placeholder="Search..."
        />
      </div>
      <div className="prod-list">
        {paginateProducts.length > 0 ? (
          paginateProducts.map((item) => (
            <ProductsCard key={item.id} item={item} />
          ))
        ) : (
          <Empty />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={handlePaginationChange}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
  );
};

export default ProductsList;
