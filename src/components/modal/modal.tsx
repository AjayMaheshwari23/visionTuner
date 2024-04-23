"use client";
import React, { useEffect, useState } from "react";
import "../../styles/modal.css";
import { Modal, FloatButton, Button, Form, Steps, Spin, message } from "antd";
import AnnotateTool from "../../components/annotateTool/page";
import First from "./first";
import Third from "./third";
import usenewProject from "@/hooks/usenewProject"
import { PlusOutlined } from "@ant-design/icons";
import Uploader from "./Uploader";
import { Project } from "@/app/models/user";
import { useAppContext } from "@/contexts/AppContext";
import { ImageObj } from "../upload/UploadImage";

const steps = [
  {
    title: "MetaInfo",
  },
  {
    title: "Upload",
  },
  {
    title: "Review",
  },
];

interface Data {
  Title_of_Project?: string;
  Description?: string;
  CategoryCount?: number;
  categories_list?: any[]; // Or specify a more specific type
}

const ModalComp: React.FC = () => 
  {

  const [open, setOpen] = useState(false);
  const [data, setdata] = useState<Data>({});
  const [images, setImages] = useState<ImageObj[]>([]);
  const [current, setCurrent] = useState(0);
  const [spinning, setSpinning] = React.useState<boolean>(false);
  const { state, setState } = useAppContext();

  const convertToProject = () => {
    const { Title_of_Project, Description, CategoryCount, categories_list } = data ;
    const op : ImageObj[] = [];
    return {
      projectId: 0, // i will generate this on the server side
      title: Title_of_Project || "",
      description: Description || "",
      categoryNumber: CategoryCount || 0,
      categories: categories_list || [],
      images: op,
      annotations: op,
    };
  };

  const createProject = async (projectData: Project) => {
    setSpinning(true);
    // console.log(projectData);
    
    console.log("Creating New Prject Spiiner Triggered...");
    
    try {
      const res = await usenewProject(projectData);
      res.UpdatedUser;
      if(res.status !== 200) message.error("Error Creating Project");
      else
      {
        message.success("Project Successfully Created");
        // Refresh karna idhar user ko
      }

      // console.log(res.UpdatedUser);
      setState({...state,user:res.UpdatedUser});
      setCurrent(0);
      setOpen(false);

    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setSpinning(false);
    }
  };

  const createNewProject = () => 
    {
      // console.log(data);
      const proj = convertToProject();
      proj.images = images;
      createProject(proj);
  }

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    // console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setCurrent(0);
    onReset();
    setOpen(false);
  };

  const next = () => {
    // console.log("Modal  se -> ");
    // console.log(form);
    // console.log(form.getFieldsValue());
    // console.log(formValues);
    
    if (current == 0) 
      {
        // console.log("Mein chala");
        
        const formValues = form.getFieldsValue();
        setdata(formValues);
      }
    setCurrent(current + 1);
  };

  const whichStep = [
    <First setdata={setdata} />,
    <Uploader images={images} setImages={setImages} />,
    <Third images={images} data={data} />,
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

        <Form
          {...layout}
          form={form}
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
              onClick={() => createNewProject()}
            >
              Create
            </Button>
          </div>
        </Form>

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