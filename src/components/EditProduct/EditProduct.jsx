import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, Select } from "antd";
import { productsContext } from "../../contexts/productsContext";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateProduct(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <h2>Edit product</h2>
      <Form
      name="basic"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    //   layout="vertical"
      form={form}
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
          Edit product
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default EditProduct;