import React , { useState } from "react";
import {
  CloudDownloadOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, message,Popconfirm } from "antd";
const { Meta } = Card;
import { Project } from "@/app/models/user";
import "../../styles/ProjectCard.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";

import type { ConfigProviderProps } from "antd";
type SizeType = ConfigProviderProps["componentSize"];

const ProjectCard = ({ project }: { project: Project }) => 
{
  const [loading,setLoading] = useState<boolean>(true);
  const router = useRouter();
  var randomIndex = Math.floor(Math.random() * 15);
  randomIndex = project.projectId;

  const handleImageLoad = () => {
    setLoading(false); 
  };

  const { state, setState } = useAppContext();

  const deleteProject = async () => 
  {
    setLoading(true);
    try {
      
      const response = await fetch(
        `/api/newProject?projectId=${project.projectId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await response.json();
      if (res.status !== 200) {
        console.log(res.message);
        throw new Error("Failed to delete project");
      }
  
      message.success("Successfully Deleted");
      
      setState({...state,user:res.user});

    } catch (error) {
      console.log(error);
      message.error("Failed to delete project");
    }finally{
      setLoading(false);
    }

  }

  return (
    <Card
      loading={loading}
      style={{ width: "280px", margin: "15px", height: "365px" }}
      cover={
        <Image
          className="projectImage"
          alt="Demo projectImage"
          width={100}
          height={100}
          src={`/assets/images/cardimages/${randomIndex}.jpg`}
          placeholder="blur"
          blurDataURL="/assets/images/cardimages/0.jpg"
          onLoad={handleImageLoad}
        />
      }
      className="ProjectCard"
      actions={[
        <CloudDownloadOutlined key="Download" style={{ color: "blue" }} />,
        <ExclamationCircleOutlined key="Info" style={{ color: "#29b365" }} />,
        <>
          <Popconfirm
            title="Delete this Project"
            description="Are you sure you want to delete ?"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={deleteProject}
            okText="Yes"
          >
            <DeleteOutlined key="Delete btn" style={{ color: "red" }} />
          </Popconfirm>
        </>,
      ]}
    >
      <div className="metaInfo">
        <div className="Btn_n_title">
          <h2>{project.title}</h2>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            size={"large" as SizeType}
            onClick={() =>
              router.push(`/dashboard/projects/${project.projectId}`)
            }
          />
        </div>
        <div
          className="metaDescription"
          style={{
            width: "100%",
            height: "70px",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {project.description}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
