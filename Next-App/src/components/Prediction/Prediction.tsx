import { useState } from "react";

interface PredictionProps {
    projectId: number | undefined;
    username:string | undefined;
}

const Prediction = ({projectId,username} : PredictionProps) => 
    {
        const [selectedFile, setSelectedFile] = useState<File | null>(null);
        const [previewUrl, setPreviewUrl] = useState<string | null>(null);

        const fileSelectedHandler = (
          event: React.ChangeEvent<HTMLInputElement>
        ) => 
        {
          if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setPreviewUrl(reader.result as string);
              }
            };
            reader.readAsDataURL(file);
          }
        };

        const handleSubmit = async (event: React.FormEvent) => {
          event.preventDefault();
          if (!selectedFile) {
            // Handle case when no file is selected
            return;
          }

          try {
            const formData = new FormData();
            formData.append("image", selectedFile);
            console.log("trying to send a request");
            
            const response = await fetch("http://localhost:5000/predict", {
              method: "POST",
              body: formData,
            });

            if (response.ok) {
              // Handle successful response from the backend
              const data = await response.json();
              console.log(data); // You can do something with the response data if needed
            } else {
              // Handle error response from the backend
              console.error("Error:", response.statusText);
            }
          } catch (error) {
            // Handle network errors or other exceptions
            console.error("Error:", error);
          }
        };

    return (
      <div>
        <h1>Prediction component</h1>
        <p>Project ID: {projectId}</p>
        <p>Username: {username}</p>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={fileSelectedHandler} />
          <button type="submit">Submit</button>
        </form>
        {previewUrl && (
          <div>
            <h2>Preview Image</h2>
            <img
              src={previewUrl}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
        )}
      </div>
    );
}

export default Prediction;