import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Best = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button type="primary" onClick={showModal}>
BOG'LANISH
      </Button>
      <Modal title="ABDUVORIS" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p className="text-[15px] font-[500]"><a target="_blank" href="tel:+998977776668">Telefon raqamimiz :+998 99-787-29-00</a></p>
      <p className="text-[16px] font-[500]"><a target="_blank" href="https://t.me/azimovproo" >Telegram akauntimiz @azimovproo</a></p>
      </Modal>
    </>
  );
};

export default Best;
