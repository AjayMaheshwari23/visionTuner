import React, { useState } from "react";

const UploadImage = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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

    try {
      const response = await fetch("/api/upload", {
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
      <button onClick={handleSubmit}>Upload Images</button>
    </div>
  );
};

export default UploadImage;
