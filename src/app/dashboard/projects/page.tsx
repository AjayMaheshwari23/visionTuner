import { middleware } from "@/middleware";
import ProjectCard from "../../../components/cards/ProjectCard";
import ModalComp from "../../../components/modal/modal";
import "./projects.css";

const projectsDummy = [1,2,3,4,5,6,7]

const ProjectPage = () => {
  return (
    <>
      <div className="ProjectMaindiv">
        {projectsDummy.map(() => {
          return <ProjectCard />;
        })}
      </div>
      <ModalComp />
    </>
  );
};

ProjectPage.middleware = [middleware];
export default ProjectPage;
