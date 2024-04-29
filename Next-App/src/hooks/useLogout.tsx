'use client'
import { useRouter } from "next/navigation";

import { useAppContext } from "@/contexts/AppContext";

const logoutFunc = async () => {

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
