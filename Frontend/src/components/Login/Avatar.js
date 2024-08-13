import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Avatar = ({userId,uname,imageurl,width,height}) => {
  const [name,setname] = useState("");
    
   useEffect(()=>{
    if(uname)
        {
          const splitname = uname?.split(" ");
          
          if(splitname.length > 1)
            {        
              setname( splitname[0][0].toUpperCase() + splitname[1][0].toUpperCase());  
            }
            else
            {
              setname(splitname[0][0].toUpperCase());
            }
        }
   },[uname]);

        
    
    return (
    <div className='text-slate-800 overflow-hidden rounded-full'>

    {
        imageurl ? (<img src={imageurl} alt={name} className='w-fit mx-auto rounded-full shadow-lg border-[#6cdf6c] border-[0.25rem] xs:my-[3vw] sm:my-[2vw] md:my-[1vw] lg:my-[0.8vw] xl:my-[1.5vw] lg:w-[8vw] md:w-[7.5vw] sm:w-[12vw] xs:w-[20vw]'/>):
        (
            name ? 
            (
            <div  className=' tracking-wider px-1 py-1 overflow-hidden rounded-full text-[3rem] flex justify-center font-extrabold shadow-lg bg-[indianred] border-[indianred] border-[0.25rem] mx-auto
             text-slate-100 lg:my-[0.8vw] xl:my-[1.5vw] lg:h-[6vw] lg:w-[6vw]  md:h-[6.1vw] md:w-[6.1vw] sm:w-[9.3vw] sm:h-[9.3vw] xs:w-[14.3vw] xs:h-[14.3vw]'>
               {name}
            </div>
            ):
            (
             <FaRegUserCircle size={80} className='w-fit mx-auto text-red-600 lg:my-[0.8vw] xl:my-[1.5vw] lg:w-[5.5vw] md:w-[5.8vw] sm:w-[9vw] xs:w-[14vw]' />
            )
        )
    }

    </div>
  )
}

export default Avatar