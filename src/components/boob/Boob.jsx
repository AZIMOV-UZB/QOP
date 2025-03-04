"use client";
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { LuInstagram } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import { FaHeadphones } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";




const Boob = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Biz bilan bog'lanish
              </Button>
      <Drawer  title="Silos qop" onClose={onClose} open={open}>
    
        <div className="flex gap-1 items-center my-1">
        <FaHeadphones  className="text-2xl"/>
        <p className="text-[15px] font-[500]"><a target="_blank" href="tel:+998997872900">Telefon raqamimiz :+998 99-787-29-00</a></p>
        </div>
        <div className="flex gap-1 items-center my-1">
        <IoMdMegaphone className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="tel:+998 998141450">2-Telefon raqamimiz : +998</a></p>
        </div>
        <div className="flex gap-1 items-center my-1">
        <ImTelegram className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://t.me/azimovproo" >Telegram akauntimiz</a></p>
        </div>
        <div className="flex gap-1 items-center my-1">
        <FaMapMarkerAlt className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://maps.app.goo.gl/cYBKtcaM7pV7NT7f6">Bizning manzilizmiz</a></p>
        </div>

  
        
      </Drawer>
    </>
  );
};

export default Boob;
