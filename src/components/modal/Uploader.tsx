import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import UploadImage from "../upload/UploadImage";
import { ImageObj } from "../upload/UploadImage";
import { useRef, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { Button , message } from "antd";

let ImageId = 0;

// export interface ImageObj {
//   id: number;
//   url: string;
// }


interface UploaderProps {
  images: ImageObj[];
  setImages: React.Dispatch<React.SetStateAction<ImageObj[]>>;
}

const Uploader = ({ images, setImages }: UploaderProps) => 
{

    // const [selectedFiles, setSelectedFiles] = useState<ImageObj[]>([]);
  const { state } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  // Use a ref to keep track of the latest state value
  const selectedFilesRef = useRef<ImageObj[]>([]);
  selectedFilesRef.current = images;

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const url = "/api/upload";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(images),
      };

      const response = await fetch(url, options);

      console.log(response);

      if (response.ok) {
        setDone(true);
        message.success("Images uploaded successfully");
      } else {
        throw new Error("Failed to upload images");
      }
    } catch (error) {
      console.log(error);
      message.error("Error While Uploading files");
    } finally {
      setLoading(false);
    }
  };

  const extractId = (res: CloudinaryUploadWidgetResults) => {
    console.log(res);
    console.log(res.info);

    if (
      typeof res === "object" &&
      "info" in res &&
      typeof res.info === "object" &&
      "public_id" in res.info
    ) {
      console.log(res.info.public_id);

      const newImageObject: ImageObj = {
        id: ImageId++,
        url: res.info.public_id,
      };

      // Use the ref to access the latest state value
      setImages((prevSelectedFiles) => [...prevSelectedFiles, newImageObject]);
      console.log(selectedFilesRef.current);
    }
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "row" }}>
        <CldUploadButton
          uploadPreset="visionTuner_UploadPreset"
          onSuccess={(res: CloudinaryUploadWidgetResults) => extractId(res)}
          onError={(err) => console.log("ERROR OCCURRED -> " + err)}
        />
      </div>
      {/* <Button loading={loading} onClick={handleSubmit} disabled={done}>
        {loading ? "Uploading..." : done ? "Uploaded" : "Upload"}
      </Button> */}
    </>
  );
};

export default Uploader;