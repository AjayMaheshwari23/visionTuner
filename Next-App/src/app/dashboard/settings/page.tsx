"use client";
import { useEffect, useState } from "react";
import { Switch } from "antd";
import "../../../styles/Settings.css";
import { useAppContext } from "@/contexts/AppContext";
import Darkmode from "@/components/darkmodeButton/darkmode";
import SettingsProButtton from "@/components/settingsprobutton/settingsprobutton";
import Settingsbutton from "@/components/settingsbutton/settingsbutton";

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
      <div className="menu">
        <div className="menu-header">
          <Darkmode />
        </div>
        <div className="menu-body">
          <div className="section-container1">
            <div className="grid-row">
              <Settingsbutton ButtonName={"Notifications"}id={"1"} />
              <Settingsbutton ButtonName={"Allow Background Training"}id={"2"} />
            </div>
            <div className="grid-row">
              <Settingsbutton ButtonName={"Enable Api's"}id={"3"} />
              <Settingsbutton ButtonName={"GPU Throttling"}id={"4"} />
            </div>

            <div className="grid-row">
              <Settingsbutton ButtonName={"Auto-start Training"}id={"5"} />
              <Settingsbutton ButtonName={"GPU Throttling"}id={"6"} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
