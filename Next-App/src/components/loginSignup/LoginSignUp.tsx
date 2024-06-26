"use client";
import styles from "./LoginSignUp.module.css";
import React, { useState } from "react";
import LoginA from "./login/Login";
import SignupA from "./register/Signup";

const LoginSignUp: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
    console.log(isFlipped);
  };
  {" "}
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
        <div
          className={`${styles.center} flip-card ${isFlipped ? "flipped" : ""}`}
        >
          <div className={styles.flipInner}>
            {isFlipped ? (
              <>
                <LoginA isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
              </>
            ) : (
              <>
                <SignupA isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
