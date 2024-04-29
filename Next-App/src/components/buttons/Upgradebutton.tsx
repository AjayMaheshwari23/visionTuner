import { Button, Modal, QRCode } from "antd";
import { useState } from "react";

const Upgradebutton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const newLocal = "";
  return (
    <>
    
      <Button className="upgradebutton" type="primary" onClick={showModal} style={{width:"150px",height:"45px",fontSize:"20px"}}>
        select
      </Button>
      <Modal className="upgradebutton" title="Pay Using QR" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src="/assets/images/qr-image.jpg" alt="" style={{height:"300px",paddingLeft:"70px"}}/>
      </Modal>
    </>
  );
};
export default Upgradebutton
