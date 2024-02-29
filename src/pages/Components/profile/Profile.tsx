"use client"
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import '../LoginSignUp.module.css'


type Props = {
    isFlipped: boolean;
    setIsFlipped: (open: boolean) => void;
};


const Profile: React.FC<Props> = ({ isFlipped, setIsFlipped }) => {

    const router = useRouter();

    const handleLogout = async (e: any) => {
        e.preventDefault();
        
        const response = await axios.get('../../api/users/logout');

        if(response.status === 200){
            router.push('../login');
        }
    }

    return (
        <div className="min-h-screen bg-grey-100 flex flex-col justify-center items-center" >
            <div className='bg-white px-16 pt-8 pb-12 mb-4'>
                <h1 className='text-3x1 mb-4 text-center'> Welcome to Home Page </h1>
                <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mt-4 rounded-full w-full" onClick={handleLogout}>
                    LogOut
                </button><br/>
            </div>
        </div>
    )
}

export default Profile;