
"use client"
import { useEffect, useState } from "react";
import { Switch } from "antd";
import "../../../styles/Settings.css";
import { useDarkMode } from "../layout";

export default function Settings() {
  // State variable to track dark mode state
  const { darkMode, toggleDarkMode } = useDarkMode();

  


  const onChange = (checked) => {
    // Toggle dark mode
    toggleDarkMode();
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      {/* Apply dark mode class to root element based on darkMode state */}
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <div className="buttonsContainer">
          <div className="button">
            <p className="buttonText">Dark Theme</p>
            <Switch defaultChecked={darkMode} onChange={onChange} />
          </div>
          <div className="button">
            <div className="buttonText">Enable Notifications</div>
            <Switch defaultChecked={darkMode}  />
          </div>
        </div>
        <div className="buttonContainer-1">
          <div className="button">
            <div className="buttonText">Features-1</div>
            <Switch defaultChecked={darkMode}  />
          </div>
          <div className="button">
            <div className="buttonText">Features-2</div>
            <Switch defaultChecked={darkMode}  />
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
