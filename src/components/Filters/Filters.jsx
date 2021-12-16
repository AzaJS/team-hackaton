import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { productsContext } from "../../contexts/productsContext";
// import { useParams } from "react-router-dom";

const Filters = ({ priceValue, setPriceValue, category, setCategory }) => {
  const { getProducts, products } = useContext(productsContext);
  // const { type } = useParams();
  // useEffect(() => {
  //   getProducts(priceValue);
  // }, [priceValue]);

  console.log(products, "prod");
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        allowClear
        style={{ width: "100%" }}
        value={category}
        onChange={(e) => setCategory(e)}
        mode="multiple"
        placeholder="Filter by type"
      >
        <Select.Option key="pijamas" value="pijamas">
          Стрит пижамы
        </Select.Option>
        <Select.Option key="t-shirt" value="t-shirt">
          Футболки
        </Select.Option>
        <Select.Option key="longsleeves" value="longsleeves">
          Лонгсливы
        </Select.Option>
        <Select.Option key="pants" value="pants">
          Штаны и шорты
        </Select.Option>
        <Select.Option key="outwear" value="outwear">
          Верхняя одежда
        </Select.Option>
      </Select>
      <Slider
        value={priceValue}
        onChange={(e) => setPriceValue(e)}
        range
        defaultValue={[1, 100000]}
        min={0}
        max={100000}
        step={100}
      />
      Filter by price
    </div>
  );
};

export default Filters;
