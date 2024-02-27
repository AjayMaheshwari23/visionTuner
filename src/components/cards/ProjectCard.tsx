import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

import "../../styles/ProjectCard.css";
import ProjectImg from "../../../public/assets/images/project.png";
import Image from "next/image";

const ProjectCard: React.FC = () => (
  <Card
    style={{ width: 300, margin: "15px" }}
    cover={<Image className="projectImage" alt="Demo projectImage" src={ProjectImg}></Image>}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <div className="metaInfo">
      <h2>Title of Project</h2>
      <div className="metaDescription">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, error?
      </div>
    </div>
  </Card>
);

export default ProjectCard;
