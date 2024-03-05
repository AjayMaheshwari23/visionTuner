import { middleware } from "@/middleware";
import ProjectCard from "../../../components/cards/ProjectCard";
import ModalComp from "../../../components/modal/modal";

const ProjectPage = () => {

  return (
    <>
      <ProjectCard />
      <ModalComp />
    </>
  );
};

ProjectPage.middleware = [middleware];
export default ProjectPage;
