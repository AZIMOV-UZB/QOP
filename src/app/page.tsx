"use client"; // Home.tsx komponenti faqat client tarafda ishlaydi

import dynamic from "next/dynamic";
import Header from "@/components/header/component";
import Carousel from "@/components/carusel/Carousel";
// import Shop from '@/components/shop/Shop';

import Calendar from "@/components/calendar/Calendar";
import Footer from "@/components/footer/Footer";

// SSR'ni o‘chirish orqali komponentlarni faqat brauzerda yuklaymiz
// const Shop = dynamic(() => import("@/components/shop/Shop"), { ssr: false });
const Map = dynamic(() => import("@/components/map/Map"), { ssr: false });
const Jobs = dynamic(() => import("@/components/jobs/Jobs"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <div className="containerr flex justify-between wrapper">
              <Carousel />
<Calendar/>
      </div>
      <div className="container">
        <p className="text-5xl font-bold my-6 text-white">SILOS QOP</p>
        <p className="title text-3xl font-bold my-6 text-white item">
          SILOSNI SIFATLI SAQLASH UCHUN QOP
        </p>
        <p className="text-3xl font-bold my-6 text-white item">
ENI 70 SM BO'YI 150 SM NARX : 13 000 SO'M
        </p>
      </div>
      {/* <Shop /> */}
      <Map />
      <Jobs />
      <Footer />
    </>
  );
}
