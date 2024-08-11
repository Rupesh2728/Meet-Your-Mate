import React from 'react'
import logo from '../assets/Logo_White2.png'
const Header = ({children}) => {
  return (
   <>
     <header className='flex py-[0.8rem] pl-6 shadow-md bg-transparent'>
        <img src={logo} width={155} height={50} alt='Logo'/>
     </header>
      {children}
   </>
    
  )
}

export default Header;