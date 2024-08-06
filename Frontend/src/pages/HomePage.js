import React from 'react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
   <>
    <div>HomePage</div>

    {/* Section where on clicked on particular contact...displays this...else its empty at first */}
    <section>
       <Outlet/>
    </section>
   </>
  )
}

export default HomePage