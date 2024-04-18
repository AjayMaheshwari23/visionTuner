"use client";
import '../../../../src/styles/profile.css';
import { useAppContext } from "../../../contexts/AppContext";
import { Card,Col,Row,Input,Button,Image,Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React , { useState } from 'react';

const getBase64 = (file : any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});
const Profile = () => {
  const { state, setState } = useAppContext();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    
  ]);
  const handlePreview = async (file : any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList}) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return(
    <div className="container">
      <div className='card'>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
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