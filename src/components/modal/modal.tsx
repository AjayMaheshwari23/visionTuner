"use client";
import React, { useState } from "react";
import "../../styles/modal.css";
import { Modal, FloatButton, Button, Form, Steps, Spin } from "antd";
import AnnotateTool from "../../components/annotateTool/page";
import First from "./first";
import Third from "./third";
import usenewProject from "@/hooks/usenewProject"
import { PlusOutlined } from "@ant-design/icons";
import UploadImage from "../upload/UploadImage";

const steps = [
  {
    title: "MetaInfo",
  },
  {
    title: "Annotate",
  },
  {
    title: "Create",
  },
];

const ModalComp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState({});
  const [current, setCurrent] = useState(0);
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [spinning, setSpinning] = React.useState<boolean>(false);

    const createProject = async () => {
       setSpinning(true);


         await usenewProject();
         setSpinning(false);
         setCurrent(0);
         setOpen(!open);

       
    }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log("Files Uploaded");

    if (files) {
      const paths = Array.from(files).map((file) => URL.createObjectURL(file));
      console.log(paths);

      setImagePaths(paths);
    }
  };

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
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

  // const handleOk = () => {
  //   const formValues = form.getFieldsValue();
  //   console.log("Form values in handleOk:", formValues);

  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 2000);

  //   onReset();
  // };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setCurrent(0);
    onReset();
    setOpen(false);
  };

  const next = () => {
    const formValues = form.getFieldsValue();
    if (current === 1) setdata(formValues);
    setCurrent(current + 1);
  };

  const whichStep = [
    <>
      <First />
    </>,
    <AnnotateTool />,
    <Third />,
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Modal
        title="New Project"
        open={open}
        footer={null}
        width={520}
        maskClosable={false}
        onCancel={handleCancel}
      >
        <Steps current={current} items={items} className="stepsTop" />

        {/* Form Starts here */}
        <Form
          {...layout}
          form={form}
          onFinish={onFinish}
          style={{ maxWidth: 800 }}
        >
          {whichStep[current]}

          <Form.Item
            label="Upload Images"
            style={{ display: current > 0 ? "none" : "" }}
          >
            <UploadImage />
          </Form.Item>

          <Form.Item
            label="Annotations"
            style={{ display: current > 0 ? "none" : "" }}
          >
            <UploadImage />
          </Form.Item>

          <div className="Operationalbtns">
            <Button
              danger
              htmlType="reset"
              className="operationbtn"
              onClick={handleCancel}
            >
              Discard
            </Button>
            <Button type="dashed" className="operationbtn" onClick={next}>
              Next
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              disabled={current === 2 ? false : true}
              className="operationbtn"
              onClick={createProject}
            >
              Create
            </Button>
          </div>
        </Form>
        {/* Form Ends here */}
        <Spin spinning={spinning} size="large" fullscreen />
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
