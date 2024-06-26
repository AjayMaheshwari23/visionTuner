import { useRouter } from "next/navigation";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppContext } from "@/contexts/AppContext";

const Logoutbtn = ({props} : {props:any}) => {
  const collapsed = props;
  const [loading, setloading] = useState(false);
  const {state} = useAppContext();
  const ghostClr = state.theme === "dark" ? false : true;
  const router = useRouter();

  const logoutFunc = async () => {
    setloading(true);
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
        display: "flex",
        justifyContent : "center",
        bottom: 0,
        left: 0,
        width: collapsed ? "80px" : "200px",
        transition: "width 0.28s ease",
      }}
    >
      <Button
        type="primary"
        danger ghost={ghostClr}
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={logoutFunc}
        style={{ width: "100%" , height: "40px" , margin:"5px" }}
      >
        {collapsed ? "" : "Logout"}
      </Button>
    </div>
  );
};

export default Logoutbtn;
