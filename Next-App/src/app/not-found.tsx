"use client"
import React from 'react';
import "../styles/notfound.css"
import { useRouter } from 'next/navigation';
const Page404: React.FC = () => {
  const router = useRouter();
  const onclick = () => {
    router.push("/dashboard/profile");
  }
  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">4</span>
          <span className="fade-in" id="digit2">0</span>
          <span className="fade-in" id="digit3">4</span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <button onClick={onclick} type="button" name="button">Return To Home</button>
      </div>
    </div>
  );
}

export default Page404;
