import React from 'react'
import Nav from './utils/Nav'
import Routing from './utils/Routing'

const Homepage = () => {
  return (
   <>
   <div className=' w-full h-screen flex flex-col items-center p-10 gap-10 text-2xl'>
   <Nav/>
   <Routing/>
   </div>
   </>
  )
}

export default Homepage