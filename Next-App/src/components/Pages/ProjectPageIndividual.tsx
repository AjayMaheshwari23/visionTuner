import { Project } from "@/app/models/user";
import "./ProjectPage.css";
import { useAppContext } from "@/contexts/AppContext";

const ProjectPageIndividual = ({ project }: { project: Project }) => {
  const { state } = useAppContext();
  const clr = state.theme == "dark" ? "white" : "black";
  return (
    <>
      <div className="maindivP">
        <p style={{ color: clr }}>{project.title}</p>
        <p
          style={{
            color: clr,
            fontSize: "small",
            textAlign: "center",
            margin: "2rem",
          }}
        >
          {project.description}
        </p>
      </div>
    </>
  );
};

export default ProjectPageIndividual;
