import React from 'react'
import Image from 'next/image';
import Watch from "@/components/watch/Watch";
import logo from "@/components/assets/logo.webp";
import Boob from "@/components/boob/Boob"

const component = () => {
    return (
    <div className=' bg-blue-800 header mb-5 py-4'>  

    <div  className='header container flex justify-between text-white items-center text-xl font-bold'>

<a href="/">
<Image
  className="w-[80px] h-[80px] rounded-[50px]"
  src={logo} 
  alt="foto"
/>   
</a>
 <Watch/>
<Boob/>
    </div>
    </div>
  )
}

export default component
