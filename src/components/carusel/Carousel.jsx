import React, { useRef } from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Bejk from '@/components/assets/lo.webp';
import Sel from '@/components/assets/bochka.webp';
import Big from '@/components/assets/big.webp';

const MyCarousel = () => {
  const carouselRef = useRef(null);

  const goPrev = () => {
    carouselRef.current.prev();
  };

  const goNext = () => {
    carouselRef.current.next();
  };

  return (
    <div className="relative w-[700px] h-[700px] carusel">
      {/* Oldinga va Orqaga tugmalar */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 z-10"
        onClick={goPrev}
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 z-10"
        onClick={goNext}
      >
        <FaArrowRight size={24} />
      </button>

      {/* Karusel */}
      <Carousel autoplay ref={carouselRef} >
        {[Big, Bejk, Sel].map((image, index) => (
          <div key={index}>
            <Image
              className="foto"
              src={image}
              alt="foto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
