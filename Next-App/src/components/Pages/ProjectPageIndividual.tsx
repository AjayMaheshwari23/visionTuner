import { Project } from "@/app/models/user";
import "./ProjectPage.css";

const ProjectPageIndividual = ( {project} : {project : Project}) => {
  return (
    <>
      <div className="maindivP">
        <h1 style={ {color:"white"} }>{project.title}</h1>
        <h2 style={ {color:"white" , fontSize:"small" , textAlign:"justify" , margin:"2rem" } }>{project.description}</h2>
      </div>
    </>
  );
};

export default ProjectPageIndividual;
