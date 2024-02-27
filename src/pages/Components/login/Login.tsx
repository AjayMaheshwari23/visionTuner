"use client"
import styles from './LoginSignUp.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa'
import './LoginSignUp'

type Props = {
    isFlipped: boolean;
    setIsFlipped: (open : boolean) => void ;
};

const LoginA : React.FC<Props> = ({isFlipped,setIsFlipped}) => {
    return (
        <div className={styles.front}>
            <h1> Log In </h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <div className={styles.f_social_icon}>
                <Link href="#" className={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.twitter}`}><FaTwitter size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.google}`}><FaGoogle size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23} /></Link>
            </div>
            <button className={styles.btn}> Log In </button><br />
            <Link href='#' className={styles.flipbutton} onClick={()=>{ setIsFlipped(!isFlipped)}}>Create my account </Link>
        </div>
    )
}

export default LoginA;