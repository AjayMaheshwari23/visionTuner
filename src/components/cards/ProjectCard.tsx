import React from "react";
import {
  CloudDownloadOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

import { Project } from "@/app/models/user";

import "../../styles/ProjectCard.css";
import ProjectImg from "../../../public/assets/images/project.png";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => (
  <Card
    hoverable
    // loading={true}
    style={{ width: "280px", margin: "15px" , height:"315px" }}
    cover={
      <Image
        className="projectImage"
        alt="Demo projectImage"
        src={ProjectImg}
      ></Image>
    }
    className="ProjectCard"
    actions={[
      <CloudDownloadOutlined key="Download" style={{ color: "blue" }} />,
      <ExclamationCircleOutlined key="Info" style={{ color: "#29b365" }} />,
      <DeleteOutlined
        key="Delete"
        style={{ color: "red" }}
        onClick={() => console.log("Project Deleted")}
      />,
    ]}
  >
    {/* <div className="metaInfo">
      <h2>Title of Project</h2>
      <div className="metaDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        quaerat.
      </div>
    </div> */}
     <div style={{ width:"100%" , height: "70px", overflowY: "auto" ,scrollbarWidth:"none" }}>
      <Meta
        title={project.title}
        description={project.description}
      />
    </div>
  </Card>
);

export default ProjectCard;
