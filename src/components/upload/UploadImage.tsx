import React, { useState } from "react";
import { useAppContext } from "@/contexts/AppContext";

const UploadImage = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { state } = useAppContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFiles = e.target.files; 
    if (inputFiles) {
      const files: File[] = Array.from(inputFiles); 
      setSelectedFiles(files); 
    }

  };

  const handleSubmit = async () => {
    if (selectedFiles.length === 0) {
      console.error("No files selected.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index}`, file); 
    });

    const userId = state.user?.username;
    const projectId = state.user?.projects.length;
    
    try {
      const url = `/api/upload?userId=${userId}&projectId=${projectId}`;
      // console.log(url);
      
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Images uploaded successfully.");
        setSelectedFiles([]); 
      } else {
        console.error("Failed to upload images.");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleSubmit}>Upload Imags</button>
    </div>
  );
};

export default UploadImage;
