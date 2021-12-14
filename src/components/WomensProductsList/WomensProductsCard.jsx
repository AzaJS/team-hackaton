import React from "react";

import { Card } from "antd";

import { PlusOutlined, LikeFilled, EllipsisOutlined } from "@ant-design/icons";

const WomensProductsCard = ({ item }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={item.photo1} />}
      actions={[
      <PlusOutlined />, 
      <LikeFilled />,
      <EllipsisOutlined/>
    ]}
    >
      <Card.Meta title={item.title} description={<></>} />
    </Card>
  );
};

export default WomensProductsCard;
