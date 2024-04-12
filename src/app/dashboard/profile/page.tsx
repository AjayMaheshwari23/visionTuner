"use client";
import '../../../../src/styles/profile.css';
import { useAppContext } from "../../../contexts/AppContext";
import { Card,Col,Row,Input,Button} from 'antd'
import React , { useState } from 'react';
const { Meta } = Card;
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import project from '../../../../public/assets/images/project.png'  
import { profile } from 'console';

const Profile = () => {
  const { state, setState } = useAppContext();
  const [image,setImage] = useState("");
  return(
    <div className="container">
      <div className='card'>
        <div className='profile_img text-center p-4'>
          <div className="flex flex-column justify-content-center align-item-center">

            <img 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid blue',
              }} 
              src={project} alt=""/>

            <InputText type="file" accept="/image/*" onChange={(event)=>{
              const file = event.target.files[0];
              if(file && file.type.substring(0,5)==="image") {
                setImage(file);
              }else{
                setImage(null);
              }
            }}
            />
          </div>
        </div>
        <Row>
          <Col span={12} className='col'>{state.user?.username}</Col>
          <Col span={12} className='col'><Input.Password placeholder="Old Password"/></Col>
        </Row>
        <br/>
        <Row>
          <Col span={12} className='col'>{state.user?.username}</Col>
          <Col span={12} className='col'><Input.Password placeholder="New Password"/></Col>
        </Row>
        <br/>
        <Row>
          <Col span={12} className='col'>{state.user?.email}</Col>
          <Col span={12} className='col'><Button type='primary'>Upload it !!</Button></Col>
        </Row>
      </div>
    </div>
  );
};
export default Profile;