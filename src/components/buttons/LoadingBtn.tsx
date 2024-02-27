"use client";

import { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useSleep from "@/hooks/useSleep";

interface ButtonProps {
  title: string;
}

const LoadingBtn = (props: ButtonProps) => {
  const [isloading, setisloading] = useState(false);

  return (
    <>
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={isloading}
        onClick = { () => {
          setisloading(true);
          useSleep({ duration: 2000 }).then(() => {
            console.log("fetching completed");
            setisloading(false);
          });
        }}
      >
        {props.title}
      </Button>
    </>
  );
};

export default LoadingBtn;
