'use client'
import ProjectCard from "../../../components/cards/ProjectCard";
import ModalComp from "../../../components/modal/modal";
import { useAppContext } from "@/contexts/AppContext";
import "./projects.css";
import { Project } from "@/app/models/user";

const ProjectPage = () => {
  const { state, setState } = useAppContext();
  const projects = state.user?.projects;
  return (
    <div>
      <div className="ProjectMaindiv">
        {projects?.map((val) => {
          return <ProjectCard project={val as Project} key={val.projectId} />;
        })}
      </div>
      <ModalComp />
    </div>
  );
};

export default ProjectPage;
