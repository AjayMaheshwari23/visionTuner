import styles from './card.module.css'
// import './flip-transition.module.css'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa'


function Card(){

    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.front}`}>
                <h1> Log In </h1>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <div className={styles.f_social_icon}>
                    <Link href="#" className={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                    <Link href="#" className={`${styles.social} ${styles.twitter}`}><FaTwitter size={23} /></Link>
                    <Link href="#" className={`${styles.social} ${styles.google}`}><FaGoogle size={23} /></Link>
                    <Link href="#" className={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23} /></Link>
                </div>
                <button className={styles.btn}> Log In </button><br/>
                <Link href='#' className={styles.flipbutton}>Create my account </Link>
            </div>
            <div className={`${styles.back}`}>
                <h1> Sign Up </h1>
                <input type="email" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <div className={styles.f_social_icon}>
                    <Link href="#" className={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                    <Link href="#" className={`${styles.social} ${styles.twitter}`}><FaTwitter size={23} /></Link>
                    <Link href="#" className={`${styles.social} ${styles.google}`}><FaGoogle size={23} /></Link>
                    <Link href="#" className={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23} /></Link>
                </div>
                <button className={styles.btn}> Sign Up </button><br/>
                <Link href='#' className={styles.flipbutton}> Login to my account</Link>
            </div>
        </div>
    )
}
export default Card;