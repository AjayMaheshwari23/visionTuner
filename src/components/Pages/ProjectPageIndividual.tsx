import { Project } from "@/app/models/user";

const ProjectPageIndividual = ( {project} : {project : Project}) => {
  return (
    <>
      <div className="maindivP">
        <h1>{project.title}</h1>
      </div>
    </>
  );
};

export default ProjectPageIndividual;
