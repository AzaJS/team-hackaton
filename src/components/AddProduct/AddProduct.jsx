import React, { useContext } from "react";

import { Form, Input, Button, Select } from "antd";

import { productsContext } from "../../contexts/productsContext";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const onFinish = (values) => {
    console.log("Success:", values);
    createProduct(values);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Sex"
        name="sex"
        rules={[{ required: true, message: "Please select sex" }]}
      >
        <Select>
          <Select.Option key="men" value="Men">
            Men
          </Select.Option>
          <Select.Option key="women" value="Women">
            Women
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input price!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input description!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Photo 1"
        name="photo1"
        rules={[{ required: true, message: "Please input URL of photo 1!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Photo 2"
        name="photo2"
        rules={[{ required: true, message: "Please input URL of photo 2!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Photo 3"
        name="photo3"
        rules={[{ required: true, message: "Please input URL of photo 3!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
