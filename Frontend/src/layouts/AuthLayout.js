import React from 'react'
import logo from '../assets/Logo_White2.png'
const AuthLayout = ({children}) => {
  return (
   <>
     <header className='flex justify-between py-[0.8rem] pl-6 shadow-md bg-white'>
        <img src={logo} width={155} height={50} alt='Logo' className='xs:w-[27vw] sm:w-[19vw] md: w-[15vw] lg:w-[11vw]'/>
        {/* <button 
            className=' text-lg
            px-6 rounded bg-[#6cdf6c]
             mt-1 font-semibold tracking-wide text-white hover:bg-primary_light mr-[3rem]'>
              Register
            </button> */}
     </header>
      {children}
   </>
    
  )
}

export default AuthLayout