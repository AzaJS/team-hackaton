import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { productsContext } from "../../contexts/productsContext";

const Filters = ({ type, setType, price, setPrice }) => {
  const { getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        allowClear
        style={{ width: "100%" }}
        value={type}
        onChange={(e) => setType(e)}
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
        value={price}
        onChange={(e) => setPrice(e)}   
        range
        defaultValue={[1, 100000]}
        min={0}
        max={100000}
        step={500}
      />
    </div>
  );
};

export default Filters;
