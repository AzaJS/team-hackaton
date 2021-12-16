import React, { useContext, useEffect, useState } from "react";
import { Button, List } from "antd";
import { Modal } from "antd";
import { Form, Input } from "antd";

import { useNavigate } from "react-router";

import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const navigate = useNavigate();
  // const [newUser, setNewUser] = useState({
  //   name: "",
  //   surname: "",
  //   address: "",
  //   year: "",
  //   month: "",
  //   phoneNumber: "",
  // });

  // function handleValues(e) {
  //   let values = {
  //     ...newUser,
  //     [e.target.name]: e.target.value,
  //   };
  //   setNewUser(values);
  // }

  // function checkValues() {
  //   if (
  //     !newUser.name ||
  //     !newUser.surname ||
  //     !newUser.address ||
  //     !newUser.year ||
  //     !newUser.month ||
  //     !newUser.phoneNumber
  //   ) {
  //     alert("Please, fill in all fields!");
  //     return;
  //   } else {
  //     localStorage.setItem("Cartinfo", JSON.stringify(newUser));
  //     console.log(newUser);
  //     navigate('/credit')
  //   }
  // }
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    navigate("/credit")
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="container">
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
                onClick={showModal}
                style={{
                  borderRadius: "15px",
                  backgroundColor: "green",
                  color: "white",
                  width: "15%",
                }}
              >
                {" "}
                Заказать
              </Button>
            </div>
          }
          renderItem={(item) => <CartItem item={item} />}
        />
      </div>
      <Modal
        title="Форма оплаты"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="complex-form"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item label="Name">
            <Form.Item
              // onChange={handleValues}
              name="name"
              noStyle
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Please input your name"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Surname">
            <Form.Item
              // onChange={handleValues}
              name="surname"
              noStyle
              rules={[{ required: true, message: "Surname is required" }]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Please input your surname"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Address">
            <Form.Item
              // onChange={handleValues}
              name="address"
              noStyle
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Input your address"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
            <Form.Item
              // onChange={handleValues}
              name="year"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            <Form.Item
              // onChange={handleValues}
              name="month"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Phone number">
            <Form.Item
              // onChange={handleValues}
              name="phoneNumber"
              noStyle
              rules={[{ required: true, message: "Phone number is required" }]}
            >
              <Input
                type="number"
                style={{ width: "100%" }}
                placeholder="Please input your phone number"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button
              // onClick={() => checkValues()}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Cart;
