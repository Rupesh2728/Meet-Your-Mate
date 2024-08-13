import React from 'react';
import alex from '../../assets/alex.jpg';
import alena from '../../assets/alena.jpg'
import lady from '../../assets/Lady.png'

const Avatar = () => {
  return (
    <>

   <div className='absolute top-[12vw] right-[4vw] rounded-full shadow-lg bg-primary_light border-primary_light 
   border-[0.25rem] w-[33vw] h-[33vw]'></div>

   <div className='absolute top-[14vw] right-[2vw] rounded-full shadow-lg bg-transparent border-black 
   border-[0.25rem] w-[26vw] h-[26vw]'></div>

    <img alt="lady" src={lady} className='relative w-full'/>
   

   <div className='absolute top-[34vw] right-[22vw]'>
   <div className='flex bg-white rounded-lg w-[16vw] p-3'>
      <img src={alena} alt='alex' className='rounded-full w-[2.5vw] h-[2.5vw] my-auto mx-auto '/>
      <div className='flex flex-col ml-[0.75vw]'>
        <p className='text-[#474958] text-[0.8vw] font-semibold'>Amelia Joseph</p>
        <p className='text-[#474958] text-[0.7vw]'>Hi, Can we catch up at stoinnis street at 6 pm today?</p>
      </div>
    </div>
   </div>

   <div className=' absolute top-[22vw] right-[4vw]'>
   <div className='flex bg-white rounded-lg w-[16vw] p-3'> 
     <img src={alex} alt='alex' className='rounded-full w-[2.5vw] h-[2.5vw] my-auto mx-auto '/> 
     <div className='flex flex-col ml-[0.75vw]'>
       <p className='text-[#474958] text-[0.8vw] font-semibold'>Robert Bell</p>
       <p className='text-[#474958] text-[0.7vw]'>Not bad, just busy with work. Any plans for the weekend?</p>
     </div>
   </div>
   </div>

   </>
  )
}

export default Avatar