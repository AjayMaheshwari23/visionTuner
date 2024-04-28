"use client";
import React, { useState } from 'react';
import '../../../styles/upgradetopro.css'
import { useAppContext } from '@/contexts/AppContext';
import { Modal } from 'antd';


const UpgradeToPro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { state, setState } = useAppContext();
  const isDarkTheme = state.theme === "dark";
  const classNames = `pricing-plans ${isDarkTheme ? 'dark' : ''}`;
    return (
        <section className={classNames}>
      <div className="pricing-card basic">
        <div className="heading">
          <h4>BASIC</h4>
        </div>
        <p className="price">
          $2
          <sub>/month</sub>
        </p>
        <ul className="features">
          


        </ul>
        <button className="cta-btn" onClick={showModal}>SELECT</button>
      </div>
      <div className="pricing-card standard">
        <div className="heading">
          <h4>STANDARD</h4>
        </div>
        <p className="price">
          $5
          <sub>/month</sub>
        </p>
        <ul className="features">
          


        </ul>
        <button className="cta-btn">SELECT</button>
      </div>
      <div className="pricing-card premium">
        <div className="heading">
          <h4>PREMIUM</h4>
        </div>
        <p className="price">
          $10
          <sub>/month</sub>
        </p>
        <ul className="features">
          

          
        </ul>
        <button className="cta-btn">SELECT</button>
      </div>
      <Modal title="Pay Using QR" open={isModalOpen} onCancel={handleCancel} footer={[
          
        ]} >
          <div className='qrimage-container'>
        <img src='../assets/images/qr-image.jpg' style={{height: "300px"}}/>
        </div>
      </Modal>
    </section>
    )
}

export default UpgradeToPro;