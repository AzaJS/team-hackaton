import React, { useContext, useEffect } from "react";

import { List, Avatar, Col } from "antd";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const AdminProductsList = () => {
  const { getProducts, deleteProduct, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  let womensList = products.filter((item) => {
    return item.gender === "Women";
  });
  let mensList = products.filter((item) => {
    return item.gender === "Men";
  });

  console.log(womensList, "womenslist");
  console.log(mensList, "menslist");

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "15px",
      }}
    >
      <Col
        style={{
          border: "1px solid grey",
          borderRadius: "15px",
          width: "40vw",
          padding: "15px",
        }}
      >
        <List
          className="demo-loadmore-list items-list"
          itemLayout="horizontal"
          dataSource={womensList}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </a>,
                <Link to={`/edit/${item.id}`}>edit</Link>,
                <Link to={`/product/${item.id}`}>more</Link>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.photo1} />}
                title={
                  <a>
                    {item.title}, {item.gender}
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </Col>
      <Col
        style={{
          border: "1px solid grey",
          borderRadius: "15px",
          width: "40vw",
          padding: "15px",
        }}
      >
        <List
          className="demo-loadmore-list items-list"
          itemLayout="horizontal"
          dataSource={mensList}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </a>,
                <Link to={`/edit/${item.id}`}>edit</Link>,
                <Link to={`/product/${item.id}`}>more</Link>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.photo1} />}
                title={
                  <a>
                    {item.title}, {item.gender}
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </Col>
    </div>
  );
};

export default AdminProductsList;
