import React, { useState } from "react";

import { Form, Input, Button } from "antd";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "products"), {
      title,
      price,
      description,
      photo1,
      photo2,
      photo3,
      createdAt: new Date(),
    });
    setTitle("");
    setPrice("");
    setDescription("");
    setPhoto1("");
    setPhoto2("");
    setPhoto3("");
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
    //   onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input price!" }]}
      >
        <Input value={price} onChange={(e) => setPrice(e.target.value)}  />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input description!" }]}
      >
        <Input value={description} onChange={(e) => setDescription(e.target.value)}  />
      </Form.Item>
      <Form.Item
        label="Photo 1"
        name="photo1"
        rules={[{ required: true, message: "Please input URL of photo 1!" }]}
      >
        <Input value={photo1} onChange={(e) => setPhoto1(e.target.value)}  />
      </Form.Item>
      <Form.Item
        label="Photo 2"
        name="photo2"
        rules={[{ required: true, message: "Please input URL of photo 2!" }]}
      >
        <Input value={photo2} onChange={(e) => setPhoto2(e.target.value)}  />
      </Form.Item>
      <Form.Item
        label="Photo 3"
        name="photo3"
        rules={[{ required: true, message: "Please input URL of photo 3!" }]}
      >
        <Input value={photo3} onChange={(e) => setPhoto3(e.target.value)}  />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Add product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
