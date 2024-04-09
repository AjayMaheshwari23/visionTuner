'use client'
import ProjectCard from "../../../components/cards/ProjectCard";
import ModalComp from "../../../components/modal/modal";
import { useAppContext } from "@/contexts/AppContext";
import "./projects.css";
import { Project } from "@/app/models/user";

const ProjectPage = () => {
  const { state, setState } = useAppContext();
  // const projects = [1,2,3];
  const projects = state.user?.projects;
  return (
    <>
      <div className="ProjectMaindiv">
        {projects?.map((val,idx) => {
          return <ProjectCard project={val as Project} key={idx} />;
        })}
      </div>
      <ModalComp />
    </>
  );
};

export default ProjectPage;
