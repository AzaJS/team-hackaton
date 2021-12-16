import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Filters from "../Filters/Filters";

import ProductsCard from "../ProductsCard/ProductsCard";

import "./ProductsList.css";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { gender } = useParams();

  const [category, setCategory] = useState([]);

  const [price, setPrice] = useState([null, null]);

  // const [priceValue, setPriceValue] = useState();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(1);

  const [type, setType] = useState();

  const limit = 4;

  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);

  const pageVisited = (page - 1) * limit;
  const paginateProducts = products?.slice(pageVisited, pageVisited + limit);

  useEffect(() => {
    getProducts(gender, type, price[0], price[1]);
  }, [searchParams, gender, type, price]);

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

  // const handleFilter = (e) => {
  //   const value = e.target.value;

  //   setSearchParams({
  //     type: value,
  //   });
  //   setCategory(value);
  // };

  return (
    <div className="container">
      <div className="search-filter">
        <div className="search-prod">
          <Input.Search
            value={search}
            onChange={handleSearch}
            style={{ width: "25vw" }}
            placeholder="Search..."
          />
        </div>
        <div className="filter-prod">
          <Filters
            category={type}
            setCategory={(e) => {
              setType(e);
              console.log(e);
            }}
            priceValue={price}
            setPriceValue={(e) => {
              setPrice(e);
            }}
          />
        </div>
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
