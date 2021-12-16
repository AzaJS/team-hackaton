import React, { useContext, useEffect } from "react";
import { Button, List } from "antd";

import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div class="container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={
          <div
            style={{
              width: "60vw",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <h2 style={{ textDecoration: "underline grey" }}>
              Total: {cart?.totalPrice}$
            </h2>
            <Button
              onClick={() => navigate("/order")}
              style={{
                borderRadius: "15px",
                backgroundColor: "green",
                color: "white",
                width: "15%",
              }}
            >
              Заказать
            </Button>
          </div>
        }
        renderItem={(item) => <CartItem item={item} />}
      />
    </div>
  );
};

export default Cart;
