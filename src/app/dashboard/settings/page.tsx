"use client";
import { useEffect, useState } from "react";
import { Switch } from "antd";
import "../../../styles/Settings.css";
import { useAppContext } from "@/contexts/AppContext";

export default function settings() {
  const { state, setState } = useAppContext();
  const [darkMode, setdarkMode] = useState(state.theme === "dark");

  const onChange = () => {
    if (darkMode) {
      setState({
        ...state,
        theme: "light",
      });
    } else {
      setState({
        ...state,
        theme: "dark",
      });
    }
    setdarkMode(!darkMode);
  };

  return (
    <>
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <div className="buttonsContainer">
          <div className="button">
            <p className="buttonText">Dark Theme</p>
            <Switch defaultChecked={darkMode} onChange={onChange} />
          </div>
          <div className="button">
            <div className="buttonText">Enable Notifications</div>

            <Switch defaultChecked={darkMode} />
          </div>
        </div>
        <div className="buttonContainer-1">
          <div className="button">
            <div className="buttonText">Features-1</div>
            <Switch defaultChecked={darkMode} />
          </div>
          <div className="button">
            <div className="buttonText">Features-2</div>
            <Switch defaultChecked={darkMode} />
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
