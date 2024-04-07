import { middleware } from "@/middleware";
import ProjectCard from "../../../components/cards/ProjectCard";
import ModalComp from "../../../components/modal/modal";
import { useAppContext } from "@/app/AppContext";
import "./projects.css";

const ProjectPage = () => {
  // const { state, setState } = useAppContext();
  const projects = [1, 2, 3];
  return (
    <>
      <div className="ProjectMaindiv">
        {projects?.map(() => {
          return <ProjectCard />;
        })}
      </div>
      <ModalComp />
    </>
  );
};

ProjectPage.middleware = [middleware];
export default ProjectPage;
