"use client"
import ProjectCard from "../../../components/cards/ProjectCard";
import ModalComp from "../../../components/modal/modal";
import { useDarkMode } from "../layout";
import "../../../styles/Projects.css"

const ProjectPage = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`main ${darkMode ? "dark-mode" : ""}`}>
      <ProjectCard />
      <ModalComp />
    </div>
  );
};

export default ProjectPage;