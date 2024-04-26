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
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>1 domain</strong> name
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>10 GB</strong> of disk space
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>100GB </strong>of bandwidth
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>1 MySQL</strong> database
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>5 email</strong> accounts
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>cPanel</strong> control panel
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>Free SSL</strong> certificate
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>24/7</strong> support
          </li>
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
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>Unlimited</strong> domain name
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>50 GB</strong> of disk space
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>500GB </strong>of bandwidth
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>10 MySQL</strong> database
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>50 email</strong> accounts
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>cPanel</strong> control panel
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>Free SSL</strong> certificate
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>24/7</strong> support
          </li>
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
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>100 GB</strong> of disk space
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>1TB </strong>of bandwidth
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>Unlimited MySQL</strong> database
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>Unlimited email</strong> accounts
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>cPanel</strong> control panel
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>Free SSL</strong> certificate
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>24/7 priority</strong> support
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <strong>Advanced</strong> security features
          </li>
        </ul>
        <button className="cta-btn">SELECT</button>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={[
          
        ]} >
          
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi maiores doloribus omnis similique dolores fugiat ipsam harum autem laudantium ea. Esse quam eveniet, fugiat quos nisi explicabo qui laudantium iure!</p>
      </Modal>
    </section>
    )
}

export default UpgradeToPro;