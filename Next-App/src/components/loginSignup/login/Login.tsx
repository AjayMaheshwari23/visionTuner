"use client";
import styles from "../LoginSignUp.module.css";
import Link from "next/link";
import React, { useState } from "react";
// import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import "../LoginSignUp";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { message , Button , ConfigProvider} from "antd";
import { TinyColor } from '@ctrl/tinycolor';
import { useAppContext } from "@/contexts/AppContext";

type Props = {
  isFlipped: boolean;
  setIsFlipped: (open: boolean) => void;
};

const defaultData = { username: "", password: "" };

const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const getHoverColors = (colors:any) =>
  colors.map((color : any) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors:any) =>
  colors.map((color:any) => new TinyColor(color).darken(5).toString());

const LoginA: React.FC<Props> = ({ isFlipped, setIsFlipped }) => {

    // design
    const [loadings, setLoadings] = useState<boolean[]>([]);
    const enterLoading = (index:any) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };

  // data
  const { state, setState , addSuccess , addError } = useAppContext();
  const [data, setData] = React.useState(defaultData);
  const router = useRouter();
  const onValueChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const onLogin = async (e: any) => {
    e.preventDefault();
    enterLoading(0);
    if (!data.username || !data.password) {
      alert("Please fill all mandatory fields.");
      return;
    }

    // API Call
    try {
      const url = "/api/login";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, requestOptions);
      setData(defaultData);
      const res = await response.json();
      // console.log(res.user);

      setState({
        ...state,
        user: res.user,
      });

      
      if (res.status === 200) {
        addSuccess("Logged In successfully");
        // console.log("Successful Login");
        router.push("./dashboard/profile");
      }
    } catch (error) {
      addError("Internal Server Error : See Console");
      console.log(error);
    }
  };
  return (
    <div className={styles.front}>
      <h1 style={{display:'flex',justifyContent:'center'}}> Log In </h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        autoComplete="off"
        value={data.username}
        onChange={(e) => onValueChange(e)}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        autoComplete="off"
        value={data.password}
        onChange={(e) => onValueChange(e)}
      />
      <div className={styles.f_social_icon}>
      </div>
      <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
            colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button type="primary" size="large"  className={styles.btn} loading={loadings[0]} onClick={(e) => onLogin(e)}>
        Login
      </Button>
    </ConfigProvider>
      <br />
      <Link
        href="#"
        style={{display:'flex',justifyContent:'center'}}
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >{" "}
        Create my account
      </Link>
    </div>
  );
};

export default LoginA;
