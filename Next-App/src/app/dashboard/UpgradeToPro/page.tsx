"use client";
import React, { useState } from "react";
import "../../../styles/upgradetopro.css";
import { useAppContext } from "@/contexts/AppContext";
import { Modal } from "antd";
import Upgradebutton from "../../../components/buttons/Upgradebutton";



const UpgradeToPro = () => {

  const { state, setState } = useAppContext();
  const [darkMode, setdarkMode] = useState(state.theme === "dark");

  
  
  return (
    <section className={darkMode ? "pricing dark" :"pricing"}>
      <div className="container">
        <div className="container" id="cash">
          <div className="row">
            <div className="col-lg-6">
              <div className="table-data">
                <h4 className={!darkMode ? "card-heading": "card-heading-dark"}>Basic</h4>
                <h3 className={!darkMode ? "item-heading": "item-heading-dark"}>£5<span>per month</span></h3>
                <ul className={!darkMode ? "item-text": "item-text-dark"}>
                  <p>Fine-tuning of object detection and classification models</p>
                  <p>Access to basic pre-trained models</p>
                  <p>Limited dataset size for fine-tuning</p>
                  <p>Email support</p>
                  <p>Basic evaluation tools and metrics</p>
                </ul>
                <h3 className={!darkMode ? "item-heading": "item-heading-dark"}>
                  £50 <span>per year</span>
                </h3>
                {/* <p className={!darkMode ? "item-text": "item-text-dark"}>
                  Upon talent / advisor joins your startup and agrees on the
                  proposal which we define together for advisor / talent.
                </p> */}
                <Upgradebutton />
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="equity">
          <div className="row">
            <div className="col-lg-6">
              <div className="table-data">
                <h4 className={!darkMode ? "card-heading": "card-heading-dark"}>Pro</h4>
                <h3 className={!darkMode ? "item-heading": "item-heading-dark"}>
                  £15<span>per month</span>
                </h3>
                <ul className={!darkMode ? "item-text": "item-text-dark"}>
                  <p>Integration with cloud-based services for scalability</p>
                  <p>advanced pre-trained models</p>
                  <p>Increased dataset size for fine-tuning</p>
                  <p>Advanced evaluation tools and metrics</p>
                  <p>All features from the Basic Plan</p>
                </ul>
                <h3 className={!darkMode ? "item-heading": "item-heading-dark"}>
                  £150<span>per year</span>
                </h3>
                {/* <p className={!darkMode ? "item-text": "item-text-dark"}>
                  Upon talent / advisor joins your startup and agrees on the
                  proposal which we define together for advisor / talent.
                </p> */}
                <div>
                 <Upgradebutton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="equity">
          <div className="row">
            <div className="col-lg-6">
              <div className="table-data">
                <h4 className={!darkMode ? "card-heading": "card-heading-dark"}>Premium</h4>
                <h3 className={!darkMode ? "item-heading": "item-heading-dark"}>
                  £30 <span>per month</span>
                </h3>
                <ul className={!darkMode ? "item-text": "item-text-dark"}>
                  <p>All features from the Pro Plan</p>
                  <p>Customized pre-trained models tailored to specific domains</p>
                  <p>Unlimited dataset size for fine-tuning</p>
                  <p>Priority access to updates</p>
                  <p>On-premises deployment option</p>
                </ul>
                <h3 className={!darkMode ? "item-heading": "item-heading-dark"}>
                  £300 <span>per year</span>
                </h3>
                {/* <p className={!darkMode ? "item-text": "item-text-dark"}>
                  Upon talent / advisor joins your startup and agrees on the
                  proposal which we define together for advisor / talent.
                </p> */}
                <Upgradebutton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeToPro;
