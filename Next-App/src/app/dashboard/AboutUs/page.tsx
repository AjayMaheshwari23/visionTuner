"use client"
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import '../../../styles/aboutus.css'


const AboutUs: React.FC = () => {
  return (
    <div className='box'>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Ajay Maheshwari" description="LCI2021023" />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="lokesh" description="LCI2021025" />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Mahek Jain" description="LCI2021028" />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Sahil Pandey" description="LCB2021000" />
      </Card>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Narendra" description="LCI2021000" />
      </Card>
    </div>

  );
}

export default AboutUs;