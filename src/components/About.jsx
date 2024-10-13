import React from 'react'
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className='bg-red-300 w-96 m-auto mt-10'>
   <h1>UserName</h1>
   <div className=' flex w-1/2 flex-col mt-5'>
      <Link className="p-3 bg-red-400 text-2xl mb-3 hover:bg-red-700"  to="/About/john"
      > john
      </Link>
      <Link  className="p-3 bg-red-400 text-2xl mb-3 hover:bg-red-700" to="/About/limsy"
     > limsy
      </Link>
      <Link  className="p-3 bg-red-400 text-2xl mb-3 hover:bg-red-700" to="/About/johh2"
     > johh2
      </Link>
   </div>
    </div>
  )
}

export default User