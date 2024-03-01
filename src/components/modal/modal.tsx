"use client";
import React, { useState } from "react";
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

import First from "./first";
import Second from "./second";

import {
  PlusOutlined,
  InboxOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";


const steps = [
  {
    title: "MetaInfo",
  },
  {
    title: "Annotate",
  }, {
    title: "Create",
  },
];

const ModalComp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data , setdata] = useState({});
  const [current, setCurrent] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

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

  const onFinish = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    const formValues = form.getFieldsValue();
    console.log("Form values in handleOk:", formValues);

    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);

    onReset();
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setCurrent(0);
    onReset();
    setOpen(false);
  };

  const next  = () => {
    const formValues = form.getFieldsValue();
    if(current===1) setdata(formValues);
    setCurrent(current+1);
  }

  const whichStep = [
    <>
      <First />
      <Second />
    </>,
    <Second />,
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Modal title="New Project" open={open} footer={null} width={520} maskClosable={false} onCancel={handleCancel} >
        <Steps current={current} items={items} className="stepsTop" />

        {/* Form Starts here */}
        <Form
          {...layout}
          form={form}
          //   name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 800 }}
        >

          {whichStep[current]}

          <div className="Operationalbtns">
            <Button
              danger
              htmlType="reset"
              className="operationbtn"
              onClick={handleCancel}
            >
              Discard
            </Button>
            {/* <Button
              type="dashed"
              className="operationbtn"
              onClick={prev}
            >
              Prev
            </Button> */}
            <Button
              type="dashed"
              className="operationbtn"
              onClick={next}
            >
              Next
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              disabled={current === 2 ? false : true}
              className="operationbtn"
            >
              Create
            </Button>
          </div>
        </Form>
        {/* Form Ends here */}
      </Modal>

      <FloatButton
        shape="circle"
        type="primary"
        style={{ width: 55, height: 55 }}
        icon={<PlusOutlined />}
        onClick={showModal}
      />
    </>
  );
};

export default ModalComp;
