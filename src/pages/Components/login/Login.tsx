"use client"
import styles from '../LoginSignUp.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa'
import '../LoginSignUp'
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {
    isFlipped: boolean;
    setIsFlipped: (open : boolean) => void ;
};

const defaultData = { email: "" , password: "" };

const LoginA : React.FC<Props> = ({isFlipped,setIsFlipped}) => {
    const [data,setData] = React.useState(defaultData);

    const router = useRouter();
    const onValueChange = (e : any) => {
        setData({...data,[e.target.name]: e.target.value })
    }

    const onLogin = async (e : any) =>{
        e.preventDefault();

        if( !data.email || !data.password){
            alert("Please fill all mandatory fields.");
            return;
        }

        // API Call
        try {
            const response = await axios.post('/api/users/login', data);
            setData(defaultData);

            console.log(response);
            
            if (response.status === 200) {
                router.push('/profile');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.front}>
            <h1> Log In </h1>
            <input type="email" placeholder="email" autoComplete='off' value={data.email} onChange={(e) => onValueChange(e)}/>
            <input type="password" placeholder="password" autoComplete='off' value={data.password} onChange={(e) => onValueChange(e)}/>
            <div className={styles.f_social_icon}>
                {/* <Link href="#" className={`${styles.social} ${styles.facebook}`}><FaFacebook size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.twitter}`}><FaTwitter size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.google}`}><FaGoogle size={23} /></Link>
                <Link href="#" className={`${styles.social} ${styles.linkedin}`}><FaLinkedinIn size={23} /></Link> */}
            </div>
            <button className={styles.btn} onClick={(e)=>onLogin(e)}> Log In </button><br />
            <Link href='#' className={styles.flipbutton} onClick={()=>{ setIsFlipped(!isFlipped)}}>Create my account </Link>
        </div>
    )
}

export default LoginA;