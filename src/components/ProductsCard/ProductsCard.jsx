import React, {useContext} from 'react';


import { Card } from "antd";

import { PlusOutlined, LikeFilled, EllipsisOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

import {productsContext} from "../../contexts/productsContext"


const ProductsCard = ({item}) => {
  const {getProducts, getOneProduct} = useContext(productsContext)
    return (
        <Card
      hoverable
      style={{ width: 240, margin: "0 15px" }}
      cover={<img alt="example" src={item.photo1} />}
      actions={[
      <PlusOutlined />, 
      <LikeFilled />,
      <Link to={`/products/${item.id}`}>
      <EllipsisOutlined key="ellipsis"/>
        </Link>
    ]}

    >
      <Card.Meta title={item.title} description={<></>} />
    </Card>
    );
};

export default ProductsCard;