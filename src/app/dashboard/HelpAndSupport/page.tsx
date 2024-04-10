import React from 'react';
import '../../../styles/support.css'
import {HomeFilled,PhoneFilled, SignatureFilled } from "@ant-design/icons"

const HelpAndSupport = () => {
    return (
      <>
        <div className="contact-form">
          <div className="first-container">
            <div className="info-container">
              <div className='address-container'>
              <div className='address'>
              <HomeFilled className='addresslogo'/>
              <h3>Address</h3>
              </div>
                <p>Indian Institute of Information Technology, Lucknow(IITTL), Arjunganj, Lucknow, Uttar Pradesh, Pin: 226002</p>
              </div>
              <div className='phone-container'>
              <div className='phone'>
              <PhoneFilled className='phonelogo' />
                <h3>Lets Talk</h3>
              </div>
                <p>+1 800 1236879</p>
                <p>+1 800 4567892</p>
              </div>
              <div className='generallogo-container'>
              <div className='general'>
              <SignatureFilled className='generallogo'/>
                <h3>General Support</h3>
              </div>
                <p>visiontunerai@vt.pmpc.in</p>
              </div>
            </div>
          </div>
          <div className="second-container">
            <h2>Send Us A Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name-input">Tell us your name*</label>
                <input id="name-input" type="text" placeholder="First name" required />
                <input type="text" placeholder="Last name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Enter your email*</label>
                <input id="email-input" type="text" placeholder="Eg. example@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message-textarea">Message</label>
                <textarea id="message-textarea" placeholder="Write us a message"></textarea>
              </div>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default HelpAndSupport;