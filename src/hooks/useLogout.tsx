'use client'
import { useRouter } from "next/navigation";

import { useAppContext } from "@/contexts/AppContext";

const logoutFunc = async () => {
  //  const { state, setState, addSuccess, addError , addWarning } = useAppContext();

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
      // addSuccess("Successfully logged out");
      // Redirect to the home page
      const router = useRouter();
      router.push("/");
    } else {
      // addError("Error during logging out");
      console.log("Error during logging out");
    }
  } catch (error) {
    // addError("Error during logging out : See Console");
    console.log("Error during logging out");
    console.log(error);
  }
};

export default logoutFunc;
