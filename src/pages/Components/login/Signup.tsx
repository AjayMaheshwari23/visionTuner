"use client"
import styles from './LoginSignUp.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa'
import './LoginSignUp'


type Props = {
    isFlipped: boolean;
    setIsFlipped: (open:boolean) => void;
};

const SignupA : React.FC<Props> = ({isFlipped,setIsFlipped}) => {
    return (
        <div className={styles.back} >
            <h1> Sign Up </h1>
            <input type="text" placeholder="username" name="username"/>
            <input type="text" placeholder="email" name="email"/>
            <input type="password" placeholder="password" name="password"/>
            <div className={styles.f_social_icon}>
                <Link href="#" className={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.twitter}`}><FaTwitter size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.google}`}><FaGoogle size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23} /></Link>
            </div>
            <button className={styles.btn} > Sign Up </button><br />
            <Link href='#' className={styles.flipbutton} onClick={ () => { setIsFlipped(!isFlipped) }}> Login to my account</Link>
        </div>
    )
}

export default SignupA;