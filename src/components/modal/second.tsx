import { Form, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { log } from "console";

const Second = () => {
  const normFile = (e: any) => {
    // console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }

    const files = Array.from(e.fileList);
    // console.log(files);
    // console.log(files.length);
    // console.log(typeof files);

    const arr = files.map(async (val: any) => {
      const reader = new FileReader();
      console.log(typeof val);
      // reader.readAsDataURL(val);
      console.log(reader.result);
      reader.addEventListener("load", () => {
        return reader.result;
      });
    });
    console.log(arr);

    return e?.fileList;
  };

 const handleFileChange = async (event) => {
   const files = event.target.files;

   if (files && files.length > 0) {
     // Process each selected file
     Array.from(files).forEach((file, index) => {
       const reader = new FileReader();
       reader.onload = () => {
         const imageDataUrl = reader.result;

         // Save the data URL to local storage with a unique key for each file
         localStorage.setItem(`uploadedImageDataUrl${index}`, imageDataUrl);

         // Optionally, you can display the uploaded image on the page
         const previewImage = document.createElement("img");
         previewImage.src = imageDataUrl;
         previewImage.style.maxWidth = "100%";
         previewImage.style.marginTop = "10px";
        //  document.getElementById("previewImages").appendChild(previewImage);
       };

       reader.readAsDataURL(file);
     });
   }
 };


  return (
    <>
      {/* <Button danger onClick={getTheFile}>
        Upload
      </Button> */}

      <Form.Item label="Upload Images">
        <Button>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            multiple
          />
          <br />
          <div id="previewImages"></div>
        </Button>
      </Form.Item>

      <Form.Item label="NOTE">
        <p>USE ABOVE ONE</p>
      </Form.Item>

      <Form.Item label="Upload Images">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </>
  );
};

export default Second;
