import React from 'react'

const Childcard = ({user, handleRemove, id}) => {
  return (
   <>
   
    <div className=' w-52 h-60 bg-yellow-600 rounded-lg flex flex-col items-center p-2'>
      <div className=' image w-14 h-14 rounded-full bg-black overflow-hidden'>
       <img className='w-full h-full object-cover' src={user.image} alt="" />
      </div>
      <h1 className= ' mt-1 font-semibold text-xl'>{user.name}</h1>
      <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
      <p className='text-xs font-medium text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatem repudiandae at.</p>
      <button onClick={()=> handleRemove(id)}  className='px-5 py-1 mt-5 rounded-lg bg-red-600 text-white'>Remove it</button>
    </div>
   
   
   
   
   </>
  )
}

export default Childcard