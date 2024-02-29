"use client"
import styles from './LoginSignUp.module.css';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa'
import LoginA from './login/Login';
import SignupA from './register/Signup';



const Login : React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    // frontend
    const handleClick = () => {
        setIsFlipped(!isFlipped);
        console.log(isFlipped);
    };

    return (
        <div className={styles.bodyi}>
            <div className={styles.container}>
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
                <div className={`${styles.center} flip-card ${isFlipped ? "flipped" : ""}`}>
                    <div className={styles.flipInner}>
                        { isFlipped ? <>
                        <LoginA isFlipped={isFlipped} setIsFlipped={setIsFlipped}/> 
                        </> : <>
                         <SignupA isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                         </>
                         }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
