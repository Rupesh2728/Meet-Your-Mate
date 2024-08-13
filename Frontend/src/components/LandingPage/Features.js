import React from 'react';
import alena from '../../assets/alena.jpg'

export const Features = () => {
  return (
    <div className='bg-white w-[50%] flex-col h-[85%] rounded-lg overflow-hidden p-4 my-auto mx-auto'>
    <h1 className='flex justify-center my-[1vw] font-semibold text-[1.7vw]'>Features for better experience</h1>

  
<div className='flex justify-evenly mt-[3vw]'>
 <div className='flex bg-slate-200 rounded-lg w-[20vw] p-3'>
  <img src={alena} alt='alex' className='rounded-full w-[2.5vw] h-[2.5vw] my-auto mx-auto '/>
  <div className='flex flex-col ml-[0.75vw]'>
    <p className='text-[#474958] text-[1vw] font-semibold'>Amelia Joseph</p>
    <p className='text-[#474958] text-[0.9vw]'>Hi, Can we catch up at stoinnis street at 6 pm today?</p>
  </div>
</div>

<div className='flex bg-slate-200 rounded-lg w-[20vw] p-3'>
  <img src={alena} alt='alex' className='rounded-full w-[2.5vw] h-[2.5vw] my-auto mx-auto '/>
  <div className='flex flex-col ml-[0.75vw]'>
    <p className='text-[#474958] text-[1vw] font-semibold'>Amelia Joseph</p>
    <p className='text-[#474958] text-[0.9vw]'>Hi, Can we catch up at stoinnis street at 6 pm today?</p>
  </div>
</div>
</div>

<div className='flex justify-center mt-[3vw] mb-[2vw]'>
<div className='flex bg-slate-200 rounded-lg w-[20vw] p-3'>
  <img src={alena} alt='alex' className='rounded-full w-[2.5vw] h-[2.5vw] my-auto mx-auto '/>
  <div className='flex flex-col ml-[0.75vw]'>
    <p className='text-[#474958] text-[1vw] font-semibold'>Amelia Joseph</p>
    <p className='text-[#474958] text-[0.9vw]'>Hi, Can we catch up at stoinnis street at 6 pm today?</p>
  </div>
</div>
</div>
  

</div>

  )
}
