import React, { useContext, useState } from "react";

import { Form, Input, Button, Select } from "antd";

import { productsContext } from "../../contexts/productsContext";
import Modal from "antd/lib/modal/Modal";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createProduct(values).then(() => handleCancel());
  };
  return (
    <>
    <Button style={{backgroundColor: "grey", color: "white", borderRadius: "15px"}} onClick={showModal}>
        Add Product
      </Button>
      <Modal
        title="Add Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
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
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Please select gender" }]}
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
        label="Type"
        name="type"
        rules={[{ required: true, message: "Please input type!" }]}
      >
        <Select>
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
    </Modal>
    </>
  );
};

export default AddProduct;
