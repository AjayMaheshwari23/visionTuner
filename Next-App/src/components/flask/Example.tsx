import React, { Dispatch, useState } from "react";
import { Project } from "@/app/models/user";
import { useAppContext } from "@/contexts/AppContext";
import { Button,Spin,message } from "antd";
import { DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";

interface ExampleComponentProps {
  project: Project;
  loading: number;
  modelCreated: boolean;
  setloading: React.Dispatch<React.SetStateAction<number>>;
  setmodelCreated: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  project,
  loading,
  modelCreated,
  setloading,
  setmodelCreated,
}) => {
  // console.log("Loading in example " , loading);
  
  const { state , setState } = useAppContext();
  const username = state.user?.username;

  const [Message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendData = async () => {
    setloading(1);
    try {
      const response = await fetch("http://localhost:5000/api/train", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ project, username }),
      });
      const data = await response.json();
      const { model_link } = data;

      if (model_link) {
        try {
          const response = await fetch("http://localhost:3000/api/setModel", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, project, model_link }),
          });
          const data = await response.json();
          setState({...state,user:data.user});

          console.log(data);
        } catch (error) {
          setError("Network error with mongodb");
        }
      } else 
      {
        throw new Error("Error while training");
      }

      
      message.success("Model Trained successfully");
      setError("");
      setloading(2);
    } catch (error) {
      setError("Network error");
      setMessage("");
      setloading(0);
      console.error("Error:", error);
    } finally {
      // setmodelCreated(true);
    }
  };

  const downloadModel = async () => {
    try {
      const url = `http://localhost:5000/get-files/${state.user?.username}/${project.projectId}/last.pt`;
      console.log(url);
      window.open(url, "_blank");
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loading==1}
        disabled={loading==2 || loading==1}
        onClick={sendData}
      >
        {loading==1 ? "Training..." : "Start Training"}
      </Button>

      {loading==1 ? (
        <>
          <Spin size="large"></Spin>
        </>
      ) : (
        <></>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        disabled={loading==0 || loading==1}
        type="primary"
        icon={<DownloadOutlined />}
        onClick={downloadModel}
      >
        Download
      </Button>
    </div>
  );
};

export default ExampleComponent;
