"use client"
import { Switch } from "antd";
import "../../../styles/Settings.css"

export default function settings(){
  const onChange = (checked: any) => {
    console.log(`switch to ${checked}`);
  };
    return (
      <>
        <div className="container">
  <div className="buttonsContainer">
  <div className="button">
      <p className="buttonText">Dark Theme</p>
      <Switch defaultChecked onChange={onChange} />
    </div>
    <div className="button">
      <div className="buttonText">Enable Notifications</div>
      <Switch defaultChecked onChange={onChange} />
    </div>
  </div>
  <div className="buttonContainer-1">
  <div className="button">
      <div className="buttonText">Features-1</div>
      <Switch defaultChecked onChange={onChange} />
    </div>
    <div className="button">
      <div className="buttonText">Features-2</div>
      <Switch defaultChecked onChange={onChange} />
    </div>
  </div>
  <div className="proContainer">
    <div className="proButtons">Delete a Project</div>
    <div className="proButtons">Upgrade to Pro</div>
  </div>
</div>
      </>
    );
}