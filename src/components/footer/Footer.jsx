"use client";
import { FaTelegram , FaInstagram } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from 'next/image';
import logo from "@/components/assets/logo.webp";



const Footer = () => {
  return (
    <>
    <div className="bg-blue-700 h-[250px] w-full flex justify-center ">
<div className="container" >
<Image
  className="w-[200px] h-[200px] my-5 footer__top mx-auto"
  src={logo} 
  alt="foto"
/>   
</div>
    </div>
    <footer className=" bg-blue-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
          <Image
  className="w-[100px] h-[100px] rounded-[50px]"
  src={logo} 
  alt="foto"
/>   
            <p className="my-2 text-xl text-white">
           SILOS QOP </p>

          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Foydali havolalar</h3>
            <ul className="mt-1 space-y-2">
              <li><a href="banner" className="hover:text-white"></a></li>
                         </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Biz bilan bog‘laning</h3>
            <div className="flex mt-3 space-x-4">
              <a target="_blank" href="https://t.me/azimovproo" className="hover:text-black text-xl"><FaTelegram className="text-4xl font-bold" />
              </a>
              <a target="_blank" href="tel:+998997872900" className="hover:text-green-500 text-xl"> 
                <PiPhoneFill  className="text-4xl font-bold"/></a>
            <a target="_blank" href="https://maps.app.goo.gl/cYBKtcaM7pV7NT7f6" className="hover:text-red-600 text-xl"> 
            <FaMapMarkerAlt  className="text-4xl font-bold"/></a>              
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm flex flex-wrap justify-between gap-6">
          <p className="text-white">SAYT MUOLIF AZIMOV ABDUVORIS  <a target="_blank" href="tel:+998997872900">99-787-29-00</a></p>
          <p>© 04.03.2025 FATH PRINT. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
