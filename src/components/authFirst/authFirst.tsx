import { useEffect } from "react";
import { useRouter } from "next/navigation";
const jwt = require("jsonwebtoken");

const AuthFirst = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("jwtToken");

      if (!token) {
        router.push("/login");
      }

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        
      } catch (error) {
        console.error("JWT verification failed:", error);
        router.push("/login"); // Redirect to login page if token verification fails
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthFirst;
};

export default AuthFirst;
