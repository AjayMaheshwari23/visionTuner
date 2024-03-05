"use client";
import styles from "../LoginSignUp.module.css";
import Link from "next/link";
import React, { useState } from "react";
// import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import "../LoginSignUp";
// import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  isFlipped: boolean;
  setIsFlipped: (open: boolean) => void;
};

const defaultData = { username: "", password: "" };

const LoginA: React.FC<Props> = ({ isFlipped, setIsFlipped }) => 
{

  const [data, setData] = React.useState(defaultData);
  const router = useRouter();
  const onValueChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const onLogin = async (e: any) => {
    e.preventDefault();

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
       if (res.status === 200) {
         console.log("Successful Login");
         router.push("./dashboard/profile");
       }
     } catch (error) {
       console.log(error);
     }

  };
  return (
    <div className={styles.front}>
      <h1> Log In </h1>
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
        {/* <Link href="#" className={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.twitter}`}><FaTwitter size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.google}`}><FaGoogle size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23} /></Link> */}
      </div>
      <button className={styles.btn} onClick={(e) => onLogin(e)}>
        {" "}
        Log In{" "}
      </button>
      <br />
      <Link
        href="#"
        className={styles.flipbutton}
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        Create my account{" "}
      </Link>
    </div>
  );
};

export default LoginA;
