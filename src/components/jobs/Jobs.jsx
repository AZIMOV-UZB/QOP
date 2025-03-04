import React from 'react';
import Image from 'next/image';
import Tel from '@/components/tel/Tel';
import Lo from '@/components/assets/lo.webp';
import Bochka from '@/components/assets/bochka.webp';
import Big from '@/components/assets/big.webp';
import Bu from '@/components/assets/bu.webp';
import Qo from '@/components/assets/qo.png';
import Sel from '@/components/assets/sel.webp';
import Ku from '@/components/assets/ku.webp';
import Qop from '@/components/assets/qop.webp';



const Jobs = () => {
  return (
    <div className='container'>
      <p className='text-center text-white text-6xl font-bold my-10'>QOP FOTO</p>
      <div className='mb-10 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5'>
          
          <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Lo} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div>
          </div>

          <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Bochka} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div>
          </div>
          
          <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Bu} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div>
          </div>

    <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Big} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div> 
          </div>




          <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Ku} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div>
          </div>
          <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Qo} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div>
          </div>


          <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Sel} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div>
          </div>



          <div  className='hover:scale-105 bg-slate-100'>
          <Image
  className="foot"
  src={Qop} 
  alt="foto"
/>           <div className='p-2'>
              <p className='text-2xl font-bold my-2'>Silos Qop</p>
              <Tel />
            </div>
          </div>




      </div>
    </div>
  );
};

export default Jobs;
