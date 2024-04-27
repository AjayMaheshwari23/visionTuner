"use client";
import styles from "../LoginSignUp.module.css";
import Link from "next/link";
import { useState } from "react";
import "../LoginSignUp";
import { useRouter } from "next/navigation";
import { message } from "antd";

type Props = {
  isFlipped: boolean;
  setIsFlipped: (open: boolean) => void;
};

const defaultData = { username: "", email: "", password: "" };

const SignupA: React.FC<Props> = ({ isFlipped, setIsFlipped }) => {
  const [data, setData] = useState(defaultData);

  const router = useRouter();

  const onValueChange = (e: any) => {
    //console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onRegister = async (e: any) => {
    e.preventDefault();

    if (!data.username || !data.email || !data.password) {
      alert("Please fill all mandatory fields.");
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

      if (res.status === 200) 
      {
        localStorage.setItem("jwtToken",res.jwtToken);
        // console.log(response);
        setIsFlipped(!isFlipped);
      }else 
      {
        window.alert("Username or Email Already taken");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.back}>
      <h1> Sign Up </h1>
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
        {/* <Link href="#" className={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.twitter}`}><FaTwitter size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.google}`}><FaGoogle size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23} /></Link> */}
      </div>
      <button className={styles.btn} onClick={(e) => onRegister(e)}>
        {" "}
        Sign Up{" "}
      </button>
      <br />
      <Link
        href="#"
        className={styles.flipbutton}
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
