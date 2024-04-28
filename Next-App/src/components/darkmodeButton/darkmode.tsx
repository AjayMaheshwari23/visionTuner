import React from "react";
import { useAppContext } from "@/contexts/AppContext";
import "../../styles/darkmode.css";

const Darkmode = () => {
  const { state, setState } = useAppContext();

  const toggle = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    setState({ ...state, theme: newTheme });
  };

  return (
    <div className="theme-switcher">
      <input
        type="radio"
        id="light-theme"
        name="themes"
        checked={state.theme === "light"}
        onChange={toggle}
      />
      <label htmlFor="light-theme">
        <span>Light</span>
      </label>
      <input
        type="radio"
        id="dark-theme"
        name="themes"
        checked={state.theme === "dark"}
        onChange={toggle}
      />
      <label htmlFor="dark-theme">
        <span>Dark</span>
      </label>
      <span className="slider"></span>
    </div>
  );
};

export default Darkmode;
