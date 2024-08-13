import React from 'react';
import Logo from '../../assets/JustLogo.png';
import { FaGoogle,FaFacebookF,FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


const RegisterSection = ({HandleSubmit,HandleClearUploadPhoto,HandleUploadPhoto,data,ChangeHandler,uploadPhoto}) => {
  return (
    <div className='bg-white w-full h-[85%] max-w-[26rem] rounded-lg overflow-hidden p-4 mx-auto my-[4vw]'>
    <div className='flex flex-col'>
    <img alt='logo' src={Logo} width={60} height={30} className='mx-auto'/>
    <p className='mx-auto text-sm text-slate-400 italic'>Signup</p>
    </div>
 

    <form onSubmit={HandleSubmit} className='grid gap-4 mt-1'>
        <div className='flex flex-col gap-1 px-1'>
          <label htmlFor='name'>Name:</label>
          <input
          type = 'text'
          id = 'name'
          name='name'
          placeholder='Enter your Name'
          className=' bg-slate-100 px-2 py-1 focus:outline-primary_light'
          value={data.name}
          onChange={ChangeHandler}
          required/>
        </div>

        <div className='flex flex-col gap-1 px-1'>
          <label htmlFor='email'>Email:</label>
          <input
          type = 'email'
          id = 'email'
          name='email'
          placeholder='Enter your Email'
          className=' bg-slate-100 px-2 py-1 focus:outline-primary_light'
          value={data.email}
          onChange={ChangeHandler}
          required/>
        </div>

        
        <div className='flex flex-col gap-1 px-1'>
          <label htmlFor='password'>Password:</label>
          <input
          type = 'password'
          id = 'password'
          name='password'
          placeholder='Enter your Password'
          className=' bg-slate-100 px-2 py-1 focus:outline-primary_light'
          value={data.password}
          onChange={ChangeHandler}
          required/>
        </div>

        <div className='flex flex-col gap-1 px-1'>
          <label>Photo:</label>
         <label htmlFor='profile_pic'>
         <div className='h-12 bg-[#6cdf6c] font-[400] text-[#f5f1f1]  cursor-pointer flex justify-center items-center rounded border text-sm hover:border-primary_light'>
             <label htmlFor='profile_pic' className=' cursor-pointer max-w-[300px] text-ellipsis line-clamp-1'>
              {uploadPhoto?.name? uploadPhoto?.name:"Upload Profile Photo"}    
              </label>
              {
                uploadPhoto?.name &&   
                <button onClick={HandleClearUploadPhoto} className='text-lg text-[indianred] ml-2 hover:text-[red] hover:text-[1.3rem]'>
                  <IoClose/>
                </button>
              }
            
          </div>
         </label>
          <input
          type = 'file'
          id = 'profile_pic'
          name='profile_pic'
          onChange={HandleUploadPhoto}
          className=' bg-slate-100 px-2 py-1 focus:outline-primary_light hidden'
        />
        </div>

        <button 
        className='bg-primary_light text-lg 
        px-4 py-1 rounded hover:bg-secondary_light
         mt-3 font-semibold tracking-wide text-white'>
          Register
        </button>


    </form>

    <p className='my-2 text-center'>Already Have Account ? <Link to={"/email"} className='hover:text-primary_light font-semibold text-black'>Login</Link></p>
  
  
     <div className='flex items-center mx-auto mt-3'>
     <hr className='w-[40%] mx-auto'/>
     <p className='text-sm text-slate-300 tracking-wider font-semibold'>OR</p>
     <hr className='w-[40%] mx-auto'/>
     </div>

     <div className='flex flex-col items-center mt-2'>
      <p className='text-sm text-slate-400'>you can sign up with</p>
      <div className='flex justify-evenly w-[50%] mt-3'>
      <FaGoogle color='white' size={25} className=' bg-slate-300 px-[0.3rem] py-[0.35rem] rounded-full cursor-pointer hover:bg-[#39cccc]'/>
      <FaFacebookF color='white' size={25} className=' bg-slate-300 px-[0.3rem] py-[0.3rem] rounded-full cursor-pointer hover:bg-[#39cccc]'/>  
      <FaTwitter color='white' size={25} className=' bg-slate-300 px-[0.3rem] py-[0.35rem] rounded-full cursor-pointer hover:bg-[#39cccc]'/>
      {/* <FaGoogle color='white' size={25} className=' bg-slate-300 px-[0.3rem] py-[0.35rem] rounded-full cursor-pointer hover:bg-[#39cccc]'/> */}
      </div>
     </div>
  
  </div>
  )
}

export default RegisterSection