import React from 'react'
import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle,FaFacebookF,FaTwitter } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from '../../assets/JustLogo.png'
import toast from 'react-hot-toast';
import img from '../../assets/friends3.jpg';

const CheckEmailPage = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
     password : "",
  });


  const ChangeHandler = (e)=>{
    const {name,value} = e.target;
    setData((prev)=>{
      return {
          ...prev,
          [name] : value,
      }
    })
  }

 
  const HandleSubmit=async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login/verifyemail`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
     });
 
     const res = await response.json();

     
     if(!res.error)
     {
      toast.success(res.message);
      setData({
        email : "",
     })
      setTimeout(() => {
        navigate('/password',{
          state: res?.user,
        });
      }, 1000);
     }
     else
     {
      toast.error(res?.message)
     }
  
    }
    catch(err){
      toast.error(err?.res?.message)
      console.log(err);
    }
  }
  
  return (
    <div className='xl:mt-7 xl:mb-3 lg:mt-[7vw] md:mt-[9vw] sm:mt-[10vw] xs:mt-[11vw] flex justify-center'>
      <img src={img} alt ="backgroundimage" className=' xs:hidden md:block md:w-[46%] lg:w-[40%] xl:w-[37%vw] h-[50%] overflow-hidden rounded-tl-md rounded-bl-md'/>
      
      <div className='bg-white lg:w-[26%] md:w-[28%] sm:w-[45%] xs:w-[80%]  rounded overflow-hidden p-4'>
        <div className='flex flex-col'>
        <img alt='logo' src={Logo} width={60} height={30} className='mx-auto xs:w-[11vw] sm:w-[7.5vw] md:w-[4.8vw] lg:w-[4.5vw]'/>
        <p className='mx-auto text-sm text-slate-400 italic lg:text-[1.15vw] md:text-[1.25vw] sm:text-[2vw] xs:text-[3vw]'>Meet your Mate</p>
        </div>
     
       <FaRegUserCircle size={80} className='w-fit mx-auto text-primary_light  lg:my-[0.8vw] xl:my-[1.5vw] lg:w-[5.5vw] md:w-[5.8vw] sm:w-[9vw] xs:w-[14vw]' />

        <form onSubmit={HandleSubmit} className='grid gap-4'>
          
            <div className='flex flex-col gap-1'>
              <label htmlFor='email' className='md: mb-[0.2vw] lg:mb-[0.3vw] sm:text-[2.2vw] xs:text-[4vw] md:text-[1.5vw] lg:text-[1.15vw]'>Email:</label>
              <input
              type = 'email'
              id = 'email'
              name='email'
              placeholder='Enter your Email'
              className=' bg-slate-100 xs:text-[4vw] sm:text-[2.4vw] md:text-[1.3vw] xl:text-[1vw] sm:px-[1.2vw] xs:px-[1.6vw] md:px-[1vw] lg:py-[0.4vw] md:py-[0.6vw] sm:py-[0.65vw] xs:py-[0.7vw] focus:outline-primary_light placeholder:sm:text-[2vw] placeholder:xs:text-[3.5vw] placeholder:md:text-[1.5vw] placeholder:lg:text-[1vw]'
              value={data.email}
              onChange={ChangeHandler}
              required/>
            </div>

            <button 
            className='bg-primary_light
            lg:px-[2vw] lg:py-[0.25vw] md:py-[0.22vw] sm:py-[0.3vw] xs:py-[0.4vw] md:text-[1.5vw] lg:text-[1.3vw] sm:text-[2.3vw] xs:text-[4.2vw] rounded hover:bg-secondary_light
             lg:mt-[0.5vw] font-semibold tracking-wide text-white'>
              Let's Go!
            </button>


        </form>

        <p className='my-2 text-center lg:text-[1.05vw] md:text-[1.2vw] sm:text-[2vw] xs:text-[3.5vw]'>Do not Have an Account ? <Link to={"/register"} className='hover:text-primary_light font-semibold text-black'>Register</Link></p>
      
      
         <div className='flex items-center mx-auto md:mt-[0.5vw] lg:mt-[0.8vw]'>
         <hr className='w-[40%] mx-auto'/>
         <p className='xs:text-[4vw] sm:text-[2vw] md:text-[1.3vw] lg:text-[1vw] text-slate-300 tracking-wider font-semibold'>OR</p>
         <hr className='w-[40%] mx-auto'/>
         </div>

         <div className='flex flex-col items-center mt-2'>
          <p className='xs:text-[3.5vw] sm:text-[2.1vw] md:text-[1.3vw] lg:text-[1vw] text-slate-400'>you can login with</p>
          <div className='flex justify-evenly w-[50%] mt-3'>
          <FaGoogle color='white' size={25} className=' bg-slate-300 xs:py-[1.8vw] sm:py-[1vw] md:py-[0.8vw] lg:py-[0.45vw] xs:size-[7vw] sm:size-[4vw] md:size-[2.7vw] lg:size-[2vw] xl:size-[1.8vw] rounded-full cursor-pointer hover:bg-[#39cccc]'/>
          <FaFacebookF color='white' size={25} className=' bg-slate-300 xs:py-[1.8vw] sm:py-[1vw] md:py-[0.8vw] lg:py-[0.45vw] sm:size-[4vw] md:size-[2.7vw] xs:size-[7vw] lg:size-[2vw] xl:size-[1.8vw] rounded-full cursor-pointer hover:bg-[#39cccc]'/>  
          <FaTwitter color='white' size={25} className=' bg-slate-300 xs:py-[1.8vw] sm:py-[1vw] md:py-[0.8vw] lg:py-[0.45vw] sm:size-[4vw] md:size-[2.7vw] xs:size-[7vw] lg:size-[2vw] xl:size-[1.8vw] rounded-full cursor-pointer hover:bg-[#39cccc]'/>
          {/* <FaGoogle color='white' size={25} className=' bg-slate-300 px-[0.3rem] py-[0.35rem] rounded-full cursor-pointer hover:bg-[#39cccc]'/> */}
          </div>
         </div>
      
      </div>
      
    </div>
    )
}

export default CheckEmailPage