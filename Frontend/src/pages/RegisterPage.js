import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { uploadFile } from '../helper/UploadFile';
import toast from 'react-hot-toast';
import logo from '../assets/Logo_White2.png'
import TypeItSection from '../components/LandingPage/TypeItSection';
import Avatar from '../components/LandingPage/Avatar';
import RegisterSection from '../components/LandingPage/RegisterSection';
import { Features } from '../components/LandingPage/Features';


const useScrolltoSection =()=>{
  return useCallback((id)=>{
    const element = document.getElementById(id);
    if(element)
    {
      element.scrollIntoView({behavior:'smooth'});
    }
  },[])
}

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

 const scrollToSection = useScrolltoSection();
  
  return (
    <>
   
    <img src={logo} alt='Logo' className='absolute lg:w-[15vw] mt-[2rem] ml-[1rem]'/>

    <div className='bg-cover bg-center flex justify-around bg-white'>   
       <div className='w-[60%] mt-[17vw]'>
          <TypeItSection scrollToSection={scrollToSection}/>
       </div>
       
       <div className='w-[40%]'>
         <Avatar/>
       </div>
    </div>

    <section className='flex' id='register-section'>

      <RegisterSection HandleSubmit={HandleSubmit} HandleClearUploadPhoto={HandleClearUploadPhoto} HandleUploadPhoto={HandleUploadPhoto}
      data={data} ChangeHandler={ChangeHandler} uploadPhoto={uploadPhoto}/>

      <Features/>

    </section>
    </>
  )
}

export default RegisterPage