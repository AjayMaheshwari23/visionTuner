"use client"
import React, { useState } from 'react';
import { Upload, Input, Button, Image, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface'; // Import UploadFile type
import { useAppContext } from "../../../contexts/AppContext";
import '../../../../src/styles/profile.css';

interface FileItem extends UploadFile<any> {
  // You can add additional properties specific to your application's file items here
}

const Profile: React.FC = () => {
  const { state } = useAppContext();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [fileList, setFileList] = useState<FileItem[]>([]);

  const handlePreview = async (file: FileItem) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    setPreviewImage(file.url || file.preview || '');
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }: { fileList: FileItem[] }) => {
    setFileList(newFileList);
  };

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

  const getBase64 = (file: File | Blob) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  return (
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
            }}
            src={previewImage}
          />
        )}
        <Row>
          <Col span={12} className='col'>{state.user?.username}</Col>
          <Col span={12} className='col'><Input.Password placeholder="Old Password" /></Col>
        </Row>
        <br />
        <Row>
          <Col span={12} className='col'>{state.user?.username}</Col>
          <Col span={12} className='col'><Input.Password placeholder="New Password" /></Col>
        </Row>
        <br />
        <Row>
          <Col span={12} className='col'>{state.user?.email}</Col>
          <Col span={12} className='col'><Button type='primary'>Upload it !!</Button></Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;