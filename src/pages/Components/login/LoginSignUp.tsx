"use client"
import styles from './LoginSignUp.module.css';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa'
import LoginA from './Login';
import SignupA from './Signup';

 

const Login : React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [error,setError] = useState("");
    const [pending,setPending] = useState(false);

    const [info,setInfo] = useState({username:"",email:"",password:""});

    function handleInput(e: { target: { name: any; value: any; }; }){
        setInfo((prev) => ({ ...prev,[e.target.name]: e.target.value }));
        // console.log(info);
    }

    async function handleSubmit(e: { preventDefault: () => void; target: any; }){
    console.log("Inside handleSubmit");
        e.preventDefault();

        if(!info.username || !info.email || !info.password){
            setError("Must provide all the credential !! ");
            console.log(error);
        }

        try{
            setPending(true);
            const res = await fetch("api/auth/[...nextauth]",
            {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(info),
            })
            if(res.ok){
                setPending(false);
                const form = e.target;
                form.reset();
                console.log("user registered");
            }else{
                const errorData = await res.json();
                setError(errorData.message);
                console.log("something went wrong. ");
                setPending(false);
            }
        } catch (error){
            setPending(false);
            setError("Something going wrong. ");
        } 
    }


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
