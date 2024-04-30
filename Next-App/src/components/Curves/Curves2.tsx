import React, { useState, useEffect } from "react";

interface CurveProps {
  loading:number,
  username: string | undefined;
  projectId: number | undefined;
}

const fileNames = ["confusion_matrix.png"];

function Curves2({ loading , username, projectId }: CurveProps) 
{
    console.log("Loading in Curves ", loading);
  const [files, setFiles] = useState<Blob[]>([]);

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
          setFiles((prevFiles) => [...prevFiles, blob]);
        } catch (error) {
          console.error("There was a problem fetching file:", error);
        }
      };

      fileNames.forEach(fetchFile);
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
        {files.slice(0).map((blob, index) => (
          <div key={index}>
            <img
              src={URL.createObjectURL(blob)}
              alt={`Curve ${index}`}
              width={1000}
              height={700}
            />
          </div>
        ))}
      </div>
    )
  );
}

export default Curves2;
