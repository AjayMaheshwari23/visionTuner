"use client";
import React, { useState } from "react";
import "../../../styles/upgradetopro.css";
import { useAppContext } from "@/contexts/AppContext";
import { Modal } from "antd";
import Upgradebutton from "../../../components/buttons/Upgradebutton";



const UpgradeToPro = () => {

  const { state, setState } = useAppContext();
  const [darkMode, setdarkMode] = useState(state.theme === "dark");

  const onChange = () => {
    if (darkMode) {
      setState({
        ...state,
        theme: "light",
      });
    } else {
      setState({
        ...state,
        theme: "dark",
      });
    }
    setdarkMode(!darkMode);
  };
  
  return (
    <section id="pricing">
      <div className="container">
        <div className="container" id="cash">
          <div className="row">
            <div className="col-lg-6">
              <div className="table-data">
                <h4>Basic</h4>
                <h3 className="table-price">£5<span>per month</span></h3>
                <p>
                  After you agree to jump on a call with best matching talents &
                  advisors. Full money back if you‘re not convinced after those
                  interviews.
                </p>
                <h3 className="table-price">
                  £50 <span>per year</span>
                </h3>
                <p>
                  Upon talent / advisor joins your startup and agrees on the
                  proposal which we define together for advisor / talent.
                </p>
                <Upgradebutton />
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="equity">
          <div className="row">
            <div className="col-lg-6">
              <div className="table-data">
                <h4>Pro</h4>
                <h3 className="table-price">
                  £15<span>per month</span>
                </h3>
                <p>
                  After you agree to jump on a call with best matching talents &
                  advisors. Full money back if you‘re not convinced after those
                  interviews.
                </p>
                <h3 className="table-price">
                  £150<span>per year</span>
                </h3>
                <p>
                  Upon talent / advisor joins your startup and agrees on the
                  proposal which we define together for advisor / talent.
                </p>
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
                <h4>Premium</h4>
                <h3 className="table-price">
                  £30 <span>per month</span>
                </h3>
                <p>
                  After you agree to jump on a call with best matching talents &
                  advisors. Full money back if you‘re not convinced after those
                  interviews.
                </p>
                <h3 className="table-price">
                  £300 <span>per year</span>
                </h3>
                <p>
                  Upon talent / advisor joins your startup and agrees on the
                  proposal which we define together for advisor / talent.
                </p>
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
