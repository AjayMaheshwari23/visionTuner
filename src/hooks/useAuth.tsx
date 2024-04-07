// // useAuth.js
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { useAppContext } from "@/app/AppContext";
// const jose = require("jose");

// interface useAuthProps {
//   jwtToken: string | undefined;
// }

// const useAuth = (props: useAuthProps) => {
//   const { state, setState } = useAppContext();
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = props.jwtToken;
//       try {
//         const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//         const decoded = await jose.jwtVerify(token, secret);
//         console.log(decoded);
//         const userId = decoded.payload.user.id;
//         if (userId == null) {
//           throw new Error("Unauthorised Access");
//         } else {
//           setState({
//             ...state,
//             user: decoded.user,
//           });
//         }
//       } catch (error: any) {
//         console.log("Login First " + error.message);
//         router.push("/");
//         return;
//       }
//     };

//     fetchData();
//   }, []);
//   return state.user;
// };

// export default useAuth;

const useAuth = async (userId: string) => {
  try {
    // Append userId as a query parameter to the URL
    const url = `/api/auth?userId=${userId}`;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, requestOptions);
    const res = await response.json();
    // console.log(res);

    return res; 
  } catch (error) {
    console.log(error);
    return null; // Return null or handle the error as needed
  }
};

export default useAuth;
