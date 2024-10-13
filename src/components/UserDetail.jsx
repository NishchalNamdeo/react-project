import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {

    const { name } = useParams();
    const Navigate = useNavigate();

    const GoBackHandler = () =>{
        Navigate("/About")
    }

  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-red-300 text-5xl mb-3 '>userDetails</h1>

        <h1 className='text-3xl'>{name}</h1>
        <button onClick={GoBackHandler} className='text-white p-3 bg-red-300  mt-5 rounded-md'>
           Go back
        </button>
    </div>
  )
}

export default UserDetail