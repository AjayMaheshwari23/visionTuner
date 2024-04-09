"use client";
import { useEffect, useState } from "react";
import { Switch } from "antd";
import "../../styles/settingsbutton.css";
import React from "react";

export default function Settingsbutton({ButtonName}:{ ButtonName: string }) {
  const onChange = (checked: any) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="grid-item  button">
      <p className="">{ButtonName}</p>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
}
