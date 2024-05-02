import React, { useState, useEffect } from "react";

interface CurveProps {
  loading:number,
  username: string | undefined;
  projectId: number | undefined;
}

const fileNames = [
  "results.png",
  "labels.jpg",
  "confusion_matrix_normalized.png",
  "labels_correlogram.jpg",
];

function Curves({ loading , username, projectId }: CurveProps) 
{
    console.log("Loading in Curves ", loading);
  const [files, setFiles] = useState<Blob[]>([]);

  useEffect(() => {
    if (username!=undefined && projectId!=undefined) {
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

  return ( loading==2 &&
  <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "70px",
      }}
    >
        <div style={{marginBottom:"50px"}}>

      <h2>Analysis Curves</h2>
      {/* <div style={{width:"80%" , border:"1px solid black"}}></div> */}
        </div>

      {/* <div style={{margin:"20px"}}>
        {files.slice(4).map((blob, index) => (
          <div key={index + 4}>
            <img
              src={URL.createObjectURL(blob)}
              alt={`Curve ${index}`}
              width={1000}
              height={700}
            />
          </div>
        ))}
      </div> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "50px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {files.slice(0, 4).map((blob, index) => (
          <div key={index}>
            <img
              src={URL.createObjectURL(blob)}
              alt={`Curve ${index}`}
              width={500}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curves;
