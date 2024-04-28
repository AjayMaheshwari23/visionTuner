"use client"
import React, { useState } from 'react';
import { Button, Input, Form} from 'antd';
import '../../../../src/styles/profile.css';
import { useAppContext } from '@/contexts/AppContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const Profile: React.FC = () => {
const {state} = useAppContext();
  return (
    <div className='box'>
      <div className="row">
        <div className="col-md-6 left">
          <img className="user-photo" itemProp="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3sw977MwnMVHUEauxeOrlsDk2GbzDLwgKnIduysy3w&s" alt="Upload Image" style={{width: '100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div className="col-md-6 right" style={{textAlign: 'center',fontStyle:'italic', height: '37vh'}}>
          <h1 itemProp="name"><b>{state.user?.username}</b></h1>
          <h2>{state.user?.email}</h2>
          <br />
          <div className='inst'>
            <div className='inside'>
              No.of Projects <br/>{state.user?.projects.length }
            </div>
            <div className='inside'>
              No.of Images <br/> 0
            </div>
            <div></div>
          </div>
          <br />
          <div className="phone">
            <h2 style={{paddingBottom:'10px'}}>Update Password</h2>
            <Form.Item 
              rules={[{
                required: true,
                message: 'Please enter your old password',
              },]}
              style={{margin:'10px 10px 10px 10px'}}>
                <Input.Password placeholder='Old Password' type='password'/>
              </Form.Item>
              <Form.Item 
              rules={[{
                required: true,
                message: 'Please enter your newpassword',
              },]}
              style={{margin:'10px 10px 10px 10px'}}>
                <Input.Password placeholder='New Password' type='password'/>
              </Form.Item>
            <Button type='primary' style={{padding:'2px 10px 2px 10px'}}> Submit </Button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profile;