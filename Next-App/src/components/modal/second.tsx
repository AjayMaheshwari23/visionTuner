import { Form, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { log } from "console";

const Second = () => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }

    const files = Array.from(e.fileList);

    const arr = files.map(async (val: any) => {
      const reader = new FileReader();
      console.log(typeof val);
      console.log(reader.result);
      reader.addEventListener("load", () => {
        return reader.result;
      });
    });
    console.log(arr);

    return e?.fileList;
  };

 const handleFileChange = async (event:any) => {
   const files = event.target.files;

   if (files && files.length > 0) {
   }
 };


  return (
    <>

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
