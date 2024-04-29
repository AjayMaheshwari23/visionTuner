import React, { Dispatch, useState } from "react";
import { Project } from "@/app/models/user";
import { useAppContext } from "@/contexts/AppContext";
import { Button,Spin,message } from "antd";
import { DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";

interface ExampleComponentProps {
  project: Project;
  loading: boolean;
  modelCreated: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  setmodelCreated: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  project,
  loading,
  modelCreated,
  setloading,
  setmodelCreated,
}) => {
  const { state , setState } = useAppContext();
  const username = state.user?.username;

  const [Message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendData = async () => {
    setloading(true);
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

      
      message.success("Model file downloaded successfully");
      setError("");
    } catch (error) {
      setError("Network error");
      setMessage("");
      console.error("Error:", error);
    } finally {
      setmodelCreated(true);
      setloading(false);
    }
  };

  const downloadModel = async () => {
    try {
      const url = `http://localhost:5000/get-files/${
        state.user?.projects[project?.projectId - 1].model
      }`;
      console.log(url);
      window.open(url, "_blank");
    } catch (error) {}
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
        loading={loading}
        onClick={sendData}
      >
        {loading ? "Training..." : "Start Training"}
      </Button>

      {loading ? (
        <>
          <Spin size="large"></Spin>
        </>
      ) : (
        <></>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        disabled={loading}
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
