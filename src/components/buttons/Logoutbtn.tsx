import { useRouter } from "next/navigation";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { useState } from "react";

const Logoutbtn = ({props} : {props:any}) => {
  const collapsed = props; // Destructing kar lo idhar 
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const logoutFunc = async () => {
    setloading(true);
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
        router.push("/");
      } else {
        console.log("Error during logging out");
      }
    } catch (error) {
      console.log("Error during logging out");
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: collapsed ? "80px" : "200px",
        transition: "width 0.28s ease",
      }}
    >
      <Button
        type="primary"
        danger
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={logoutFunc}
        style={{ width: "100%" , height: "35px" }}
      >
        {collapsed ? "" : "Logout"}
      </Button>
    </div>
  );
};

export default Logoutbtn;
