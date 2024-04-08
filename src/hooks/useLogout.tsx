import { useRouter } from "next/navigation";


const logoutFunc = async () => 
  {
    // API Call
    try {
      const url = "/api/logout";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, requestOptions);
      console.log(response.status);

      if (response.status === 200) {
        console.log("Successfully logged out");
        // Redirect to the home page
        const router = useRouter();
        router.push("/");
    } else {
      console.log("Error during logging out");
    }
  } catch (error) {
    console.log("Error during logging out");
    console.log(error);
  }
};

export default logoutFunc;
