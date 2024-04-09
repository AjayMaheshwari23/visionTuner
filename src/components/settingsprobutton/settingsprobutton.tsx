import React from "react";
import { Switch } from "antd";
import "../../styles/settingsprobutton.css";

export default function SettingsProButtton({ ButtonName }: { ButtonName: string }) {
  const onChange = (checked: any) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="pro-button">
      <p className="">{ButtonName}</p>
    </div>
  );
}
