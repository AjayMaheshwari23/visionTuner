const usenewProject = async () => {
  // console.log("let's try to add a new Project");
  
    try {

        const url = "/api/newProject";
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(url,requestOptions);
        // console.log(response);
const data = await response.json(); 
    console.log(data); 

    return data; 

    } catch (err) {
        console.log(err);
    }
}

export default usenewProject;