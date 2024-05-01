"use client";
import React, { useState } from "react";
import "../../styles/modal.css";
import { Modal, FloatButton, Button, Form, Steps, Spin, message } from "antd";
import First from "./first";
import Third from "./third";
import usenewProject from "@/hooks/usenewProject";
import { PlusOutlined } from "@ant-design/icons";
import Uploader from "./Uploader";
import { Project, AnnotationObj } from "@/app/models/user";
import { useAppContext } from "@/contexts/AppContext";
import { ImageObj } from "../upload/UploadImage";
import { useRouter } from "next/navigation";

const imge: ImageObj[] = [];
// imge.push({ id: 0, url: "visionTuner/fnlb5odmowi2dojvwl7r" }); // Bus
// imge.push({ id: 1, url: "visionTuner/m20a3xbguvokqivjmpdg" }); // Yellow
// imge.push({ id: 2, url: "visionTuner/ajyqhoivwftqz37xuom6" }); // Japan
// imge.push({ id: 3, url: "visionTuner/fnlb5odmowi2dojvwl7r" }); // Bus

const defaultOpen = true;

const defaultData: Data = {
  Title_of_Project: "we",
  CategoryCount: 0,
  categories_list: [],
  Description: "",
};

const steps = [
  {
    title: "MetaInfo",
  },
  {
    title: "Upload",
  },
  {
    title: "Annotate",
  },
];

export interface Data {
  Title_of_Project: string;
  Description: string;
  CategoryCount: number;
  categories_list: any[];
}

const ModalComp = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState<Data>(defaultData);
  const [images, setImages] = useState<ImageObj[]>(imge);
  const [annotations, setannotations] = useState<AnnotationObj[]>([]);
  const [current, setCurrent] = useState(0);
  const [spinning, setSpinning] = React.useState<boolean>(false);
  const { state, setState } = useAppContext();

  const convertToProject = () => {
    const { Title_of_Project, Description, CategoryCount, categories_list } =
      data;
    const op: ImageObj[] = [];
    const op2: AnnotationObj[] = [];
    return {
      projectId: 0,
      title: Title_of_Project || "",
      description: Description || "",
      categoryNumber: CategoryCount || 0,
      categories: categories_list || [],
      images: op,
      annotations: op2,
      model: "",
      createdAt: new Date(),
    };
  };

  const createProject = async (projectData: Project) => {
    setSpinning(true);

    console.log("Creating New Prject Spiiner Triggered...");

    try {
      const res = await usenewProject(projectData);
      res.UpdatedUser;
      if (res.status !== 200) message.error("Error Creating Project");
      else {
        message.success("Project Successfully Created");
      }

      setState({ ...state, user: res.UpdatedUser });
      setCurrent(0);
      setOpen(false);
      router.push(`/dashboard/projects/${res.UpdatedUser.projects.length}`);
    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setSpinning(false);
    }
  };

  const createNewProject = () => {
    const proj = convertToProject();

    proj.images = images;
    // proj.images.forEach((ele) => {
    //   const x: Annotationbox = {
    //     class: 0,
    //     tl: 0.111,
    //     tr: 0.221,
    //     bl: 0.33242341,
    //     br: 0.25435321,
    //   };
    //   const arr = [x];
    //   annotations.push({ id: ele.id, coordinates: arr });
    // });
    proj.annotations = annotations;
    createProject(proj);
  };

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {};
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
    if (current == 0) {
      const formValues = form.getFieldsValue();
      setdata(formValues);
    }
    if (current == 1) {
      const def: AnnotationObj[] = [];
      images.forEach((element, idx) => {
        const dum: AnnotationObj = { id: idx, coordinates: [] };
        def.push(dum);
      });
      setannotations(def);
    }
    setCurrent(current + 1);
  };

  // setImages(imge);

  const whichStep = [
    <First setdata={setdata} />,
    <>
      <Uploader images={images} setImages={setImages} />
    </>,
    <Third
      images={images}
      data={data}
      annotations={annotations}
      setannotations={setannotations}
    />,
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Modal
        title="New Project"
        open={open}
        footer={null}
        width={820}
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
            <Button type="dashed" className="operationbtn" onClick={next}>
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
