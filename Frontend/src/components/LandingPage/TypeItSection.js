import React from 'react';
import TypeIt from 'typeit-react';
import { FaArrowRight } from "react-icons/fa";

export default function TypeItSection({scrollToSection}) {
  return (
    <>
    <div className='mx-[5vw]'>
    <TypeIt
   getBeforeInit={(instance) => {
  
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
       .type(" next best frind?")
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
   }} className="lg:text-[3vw] font-semibold font-sans text-[black] my-auto tracking-[0.05rem] lg:leading-[4.5vw] xl:leading-[4vw]"
 />
 </div>
   
   <p className='lg:w-[75%] xl:w-[70%] mx-[5vw] my-[2vw] xl:text-[1.2vw] lg:text-[1.4vw]'>An intensive chat application that allows you to connect with different people around the world</p>
 
   <button onClick={()=>{scrollToSection('register-section')}}
             className='bg-primary_light mx-[5vw] 
             lg:px-[2vw] lg:py-[0.5vw] md:py-[0.22vw] sm:py-[0.3vw] xs:py-[0.4vw] md:text-[1.5vw] lg:text-[1.3vw] sm:text-[2.3vw] xs:text-[4.2vw] rounded hover:bg-[#6cdf6c]
              lg:mt-[0.5vw] font-semibold tracking-wide text-white'>
              <p className='flex'> Start your Journey <FaArrowRight className='my-auto m-2' /></p>
    </button>
    </>
  )
}
