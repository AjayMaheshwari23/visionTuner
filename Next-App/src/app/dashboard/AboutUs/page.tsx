"use client"
import React from 'react';
import { Col, Row } from 'antd';
import '../../../styles/aboutus.css'
import Image from 'next/image';
import Ajay from '../../../../public/assests/a.png';
import Lokesh from '../../../../public/assests/b.png';
import Sahil from '../../../../public/assests/c.png';
import Mahek from '../../../../public/assests/d.png';
import Narendra from '../../../../public/assests/e.png';
import { useAppContext } from "@/contexts/AppContext";

type SiderTheme = "light" | "dark";

const AboutUs: React.FC = () => {
  const { state, setState } = useAppContext();

  const clr = state.theme === "dark" ? "white" : "black";

  return (
    <div className="boxs" style={{ color: clr }}>
      <h1>
        <b>About Us</b>
      </h1>
      <br />
      <p style={{ fontSize: "17px" , color:clr }}>
        VisionTuner streamlines the often tedious process of managing,
        annotating, and preparing image datasets. This frees up valuable time
        for developers to focus on the more exciting parts – building and
        refining their cutting-edge computer vision models.VisionTuner acts as a
        catalyst for accelerating the development of computer vision
        applications. Developers can spend less time wrestling with coding, data
        preparation and more time bringing their innovative ideas to life.
        VisionTuner empowers a wider range of practitioners to delve into the
        world of computer vision by simplifying the development process. This
        allows more individuals to contribute to the creation of groundbreaking
        visual intelligence solutions.
      </p>
      <br />
      <h1>
        <b>Our Amazing Team</b>
      </h1>
      <br />
      <br />
      <Row className="images1">
        <Col span={8} className="yes">
          <Image src={Ajay} alt="Ajay" className="img" />
          <br />
          <h2>
            <b>Ajay Maheshwari</b>
          </h2>
          <p>Full Stack Developer</p>
        </Col>
        <Col span={8} className="yes">
          <Image src={Mahek} alt="Mahek" className="img" />
          <br />
          <h2>
            <b>Mahek Jain</b>
          </h2>
          <p>Frontend Developer</p>
        </Col>
        <Col span={8} className="yes">
          <Image src={Sahil} alt="Sahil" className="img" />
          <br />
          <h2>
            <b>Sahil Pandey</b>
          </h2>
          <p>Machine Learning Expert</p>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="images2">
        <Col span={12} className="yes">
          <Image src={Lokesh} alt="Lokesh" className="img" />
          <br />
          <h2>
            <b>Lokesh Dandamudi</b>
          </h2>
          <p>Machine Learning Expert</p>
        </Col>
        <Col span={12} className="yes">
          <Image src={Narendra} alt="Narendra" className="img" />
          <br />
          <h2>
            <b>Narendra Kumar</b>
          </h2>
          <p>Frontend Developer</p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;