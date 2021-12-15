
import React, { useContext, useEffect } from "react";

import { List, Avatar } from "antd";
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';

const AdminProductsList = () => {
    const { getProducts, deleteProduct, products } =
    useContext(productsContext);
    useEffect(()=>{
        getProducts()
    },[])
    return (
        <>
      <List
        className="demo-loadmore-list items-list"
        itemLayout="horizontal"
        dataSource={products}
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
              <Link to={`/products/${item.id}`}>more</Link>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.photo1} />}
              title={
                <a>
                  {item.title}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </>
    );
};

export default AdminProductsList;