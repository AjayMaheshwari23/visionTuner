import React, { useState, useEffect } from "react";

interface CurveProps {
  loading: number;
  username: string | undefined;
  projectId: number | undefined;
}

// const fileNames = ["confusion_matrix.png"];

function Curves2({ loading, username, projectId }: CurveProps) {
  console.log("Loading in Curves ", loading);
  const [files, setFiles] = useState<Blob>();

  useEffect(() => {
    if (username && projectId) {
      const fetchFile = async (fileName: string) => {
        try {
          const response = await fetch(
            `http://localhost:5000/get-files/${username}/${projectId}/${fileName}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const blob = await response.blob();
          setFiles(blob);
        } catch (error) {
          console.error("There was a problem fetching file:", error);
        }
      };

      fetchFile("confusion_matrix.png");
    }
  }, [username, projectId]);

  return (
    loading == 2 && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "70px",
        }}
      >
        <div key={1}>
          {files && <img
            src={URL.createObjectURL(files)}
            alt={`Curve 1`}
            width={1000}
            height={700}
          />}
        </div>
      </div>
    )
  );
}

export default Curves2;
