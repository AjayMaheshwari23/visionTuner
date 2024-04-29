import { useEffect, useState } from "react";
import { Switch } from "antd";
import "../../styles/settingsbutton.css";
import React from "react";
import { ApartmentOutlined, BellFilled, ClockCircleOutlined, ClusterOutlined, DeploymentUnitOutlined } from "@ant-design/icons";

export default function Settingsbutton({ ButtonName, id }: { ButtonName: string; id: string }) {
  const onChange = (checked: any) => {
    console.log(`Switch ${id} is now ${checked ? "on" : "off"}`);
  };

  let icon;
  if (id === "1") {
    icon = <DeploymentUnitOutlined />;
  } else if (id === "2") {
    icon = <BellFilled style={{ fontSize: "18px" }} />;
  } else if (id === "3") {
    icon = <ClusterOutlined style={{ fontSize: "18px" }} />;
  } else if (id === "4") {
    icon = <ApartmentOutlined style={{ fontSize: "18px" }} />;
  } else if (id==="5") {
    icon = <ClockCircleOutlined style={{ fontSize: "18px" }} />;
  }else{
    icon = <ApartmentOutlined style={{ fontSize: "18px" }} />;
  }

  return (
    <div className="grid-item button">
      <div className="button-content">
        {icon}
        <p className="">{ButtonName}</p>
      </div>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
}
