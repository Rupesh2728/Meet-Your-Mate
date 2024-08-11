import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle,FaFacebookF,FaTwitter } from "react-icons/fa";
import Logo from '../assets/JustLogo.png'
import { uploadFile } from '../helper/UploadFile';
import toast from 'react-hot-toast';
import img from '../assets/friends4.jpeg';
import logo from '../assets/Logo_Dark.png'
import TypeIt from "typeit-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
     name : "",
     email : "",
     password : "",
     profile_pic : "",
  });

  const [uploadPhoto, setuploadPhoto]= useState("");

  const ChangeHandler = (e)=>{
    const {name,value} = e.target;
    setData((prev)=>{
      return {
          ...prev,
          [name] : value,
      }
    })
  }

  const HandleUploadPhoto=async (e)=>{
    const file = e.target.files[0];
    const uploadPhoto = await uploadFile(file);
    setuploadPhoto(file);
    setData((prev)=>{
      return {
          ...prev,
          profile_pic : uploadPhoto?.url,
      }
    })
  } 

  const HandleClearUploadPhoto=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setuploadPhoto("");
  }

  const HandleSubmit=async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log(data);
    try{
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
     });
 
     const res = await response.json();
     if(!res.error)
     {
      toast.success(res.message);
      setData({
        name : "",
        email : "",
        password : "",
        profile_pic : "",
     })
      setTimeout(() => {
        navigate('/email');
      }, 2000);
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
    <>
    {/* <div style={{ backgroundImage: `url(${img})` }}
      className="bg-cover bg-center h-screen"></div> */}
    {/* <img src={img} alt ="Register Image" className='w-full h-full overflow-hidden rounded-tl-md rounded-bl-md'/> */}
    <img src={logo} width={110} height={50} alt='Logo' className='absolute mt-[2rem] ml-[1rem]'/>
    <div className='bg-cover bg-center h-screen flex justify-around' style={{ backgroundImage: `url(${img})` }}>   


<TypeIt as={"h1"}
  getBeforeInit={(instance) => {
    // "Ready to Meet Your Next Best Friend? Dive into engaging chats with Meet Your Mate!"
    // "reday to Meet ur Next Best frind? Dive into engaging chts with mmeet Your mate"
      instance.type("reay to Meet ur", { delay: 100 })
      .move(-12, { delay: 100 })
      .type("d", { delay: 400 })
      .move(null, { to: "START", instant: true, delay: 300 })
      .move(1, { delay: 200 })
      .delete(1)
      .type("R", { delay: 225 })
      .pause(200)
      .move(2, { instant: true })
      .pause(200)
      .move(5, { instant: true })
      .move(7, { delay: 200 })
      .delete(1)
      .type("you", { delay: 350 })
      .move(1, { instant: true })
      .type(" next Best frind?")
      .move(-3, { delay: 200 })
      .type("e",{ delay: 180 })
      .move(null, { to: "END" })
      .type(" Dive into engaging chts with")
      .move(-7, { delay: 200 })
      .delete(1)
      .type("ha", { delay: 225 })
      .move(null, { to: "END" })
      .type(" mmeet Your")
      .move(-8, { delay: 200 })
      .delete(2)
      .type("M",{ delay: 225 })
      .move(2, { instant: true })
      .move(null, { to: "END" })
      .type(" Mate....")
      .go();
 
    return instance;
  }} className="text-6xl font-bold text-[#ebf7eb]  w-[50%] my-auto tracking-[0.05rem] leading-25"
/>




      <div className='bg-white w-full h-[85%] max-w-[26rem] rounded-lg overflow-hidden p-4 my-auto'>
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
      
    </div>
    </>
  )
}

export default RegisterPage