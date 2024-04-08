import "../../styles/modal.css";
import {
  Modal,
  FloatButton,
  Button,
  Form,
  Input,
  InputNumber,
  Upload,
  Steps,
  Space,
} from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};



import {
  PlusOutlined,
  InboxOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const First = () => {
  return (
    <>
      <Form.Item
        label="Title of Project"
        name="Title of Project"
        rules={[
          {
            required: true,
            message: "Title must be less than 15 character!",
            max: 15,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Description"
        label="Description"
        rules={[{ message: "Please input Description" }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item label="Categories" name="CategoryCount">
        <InputNumber />
      </Form.Item>

      <Form.List
        name="categories list"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error("At least 2 Categories"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...formItemLayout}
                label={"Category " + (1 + index)}
                key={index}
                required={false}
                {...layout}
              >
                <Form.Item
                  key={index}
                  name={field.name}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message:
                        "Please input Category name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="Category name"
                    style={{ width: "60%" }}
                    key={index}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button minus-btn"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}

            <Form.Item
              label="Category Names"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
            >
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
                icon={<PlusOutlined />}
              >
                Add Category Name
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>

    </>
  );
};

export default First;
