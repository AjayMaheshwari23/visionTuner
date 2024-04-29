import { Project } from "@/app/models/user";

const usenewProject = async (project: Project) => {

  try {
    console.log("Request arrived at usenewProject Hook");
    
    const url = "/api/newProject";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;

  } catch (err) {
    console.log(err);
  }
};

export default usenewProject;