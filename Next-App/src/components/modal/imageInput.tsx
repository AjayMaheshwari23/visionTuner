'use client'
import { Button, Form } from "antd";
import { useState } from "react";

const ImageInput = () => {
    const [input, setinput] = useState<string[]>();


    const handleFileChange = (e:any) => {
        const files = e.target.files;
        if (files) {
          const newInput: string[] = [];

          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const objectURL = URL.createObjectURL(file);
            newInput.push(objectURL);
          }

          setinput(newInput);
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
    </>
  );
};

export default ImageInput;
