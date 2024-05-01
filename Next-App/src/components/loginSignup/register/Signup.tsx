"use client";
import styles from "../LoginSignUp.module.css";
import Link from "next/link";
import { useState } from "react";
import "../LoginSignUp";
import { useRouter } from "next/navigation";
import { message, Button, ConfigProvider } from "antd";
import { TinyColor } from '@ctrl/tinycolor';

type Props = {
  isFlipped: boolean;
  setIsFlipped: (open: boolean) => void;
};

const defaultData = { username: "", email: "", password: "" };
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const getHoverColors = (colors: any) =>
  colors.map((color: any) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: any) =>
  colors.map((color: any) => new TinyColor(color).darken(5).toString());


const SignupA: React.FC<Props> = ({ isFlipped, setIsFlipped }) => {
  // design
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const enterLoading = (index: any) => {
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
  const [data, setData] = useState(defaultData);

  const router = useRouter();

  const onValueChange = (e: any) => {
    //console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onRegister = async (e: any) => {
    e.preventDefault();
    enterLoading(0);
    if (!data.username || !data.email || !data.password) {
      alert("Please fill all mandatory fields.");
      setLoadings([]);
      return;
    }

    // API Call
    try {
      const url = "/api/register";
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
      message.success("Account successfully created")

      if (res.status === 200) {
        localStorage.setItem("jwtToken", res.jwtToken);
        setIsFlipped(!isFlipped);
      } else {
        window.alert("Username or Email Already taken");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.back}>
      <h1 style={{display:'flex',justifyContent:'center'}}> Sign Up </h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        autoComplete="off"
        value={data.username}
        onChange={(e) => onValueChange(e)}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        autoComplete="off"
        value={data.email}
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
        <Button type="primary" size="large" className={styles.btn} loading={loadings[0]} onClick={(e) => onRegister(e)}>
          SignUp
        </Button>
      </ConfigProvider>
      <br />
      <Link
        href="#"
        style={{display:'flex', justifyContent:'center'}}
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        {" "}
        Login to my account
      </Link>
    </div>
  );
};

export default SignupA;
