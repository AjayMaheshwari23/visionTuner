"use client";
import React, { useState } from 'react';
import '../../../styles/upgradetopro.css'
import { useAppContext } from '@/contexts/AppContext';
import { Modal } from 'antd';


const UpgradeToPro = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10">
            {/* <div className="switcher-box">
              <span>Cash</span>
              <div className="switcher text-center">
                <input type="checkbox" className="toggle" />
              </div>
              <span>Equity</span>
            </div> */}
            <div className="pricing-table pt-65">
              <div className="container" id="cash">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="table-data">
                      <h4>Recommended</h4>
                      <h3 className="table-price">£1700</h3>
                      <p>After you agree to jump on a call with best matching talents & advisors. Full money back if you‘re not convinced after those interviews.</p>
                      <h3 className="table-price">£15k <span>+25% payable post funding if applicable</span></h3>
                      <p>Upon talent / advisor joins your startup and agrees on the proposal which we define together for advisor / talent.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container" id="equity">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="table-data">
                      <h4>Equity Recommended</h4>
                      <h3 className="table-price">£1700 <span>In cash</span></h3>
                      <p>After you agree to jump on a call with best matching talents & advisors. Full money back if you‘re not convinced after those interviews.</p>
                      <h3 className="table-price">£15k <span>In equity</span></h3>
                      <p>Upon talent / advisor joins your startup and agrees on the proposal which we define together for advisor / talent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpgradeToPro;