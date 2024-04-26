import { Project } from "@/app/models/user";

const ProjectPageIndividual = ( {project} : {project : Project}) => {
  return (
    <>
      <div className="maindivP">
        <h1 style={ {color:"white"} }>{project.title}</h1>
        <h2 style={ {color:"white"} }>{project.description}</h2>
      </div>
    </>
  );
};

export default ProjectPageIndividual;
