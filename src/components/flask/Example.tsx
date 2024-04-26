import React, { Dispatch, useState } from "react";
import { Project } from "@/app/models/user";
import { useAppContext } from "@/contexts/AppContext";

interface ExampleComponentProps {
  project: Project | undefined;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
}


const ExampleComponent: React.FC<ExampleComponentProps> = ({
  project,
  loading,
  setloading,
}) => {
  const { state } = useAppContext();
  const username = state.user?.username;

  const [message, setMessage] = useState("");
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

      // // Trigger download somehow

      setMessage("Model file downloaded successfully.");
      setError("");
      
    } catch (error) {
      setError("Network error");
      setMessage("");
      console.error("Error:", error);
    }finally{
      setloading(false);
    }
  };

  return (
    <div>
      <button disabled={loading} onClick={sendData}>Start Training</button>
      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ExampleComponent;
