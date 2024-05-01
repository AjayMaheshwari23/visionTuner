import { Project } from "@/app/models/user";
import "./ProjectPage.css";
import { useAppContext } from "@/contexts/AppContext";


const ProjectPageIndividual = ( {project} : {project : Project}) => {
  const {state} = useAppContext();
  const clr = state.theme == "dark" ? "white" : "black";
  return (
    <>
      <div className="maindivP">
        <h1 style={ {color:clr} }>{project.title}</h1>
        <h2 style={ {color:clr , fontSize:"small" , textAlign:"justify" , margin:"2rem" } }>{project.description}</h2>
      </div>
    </>
  );
};

export default ProjectPageIndividual;
