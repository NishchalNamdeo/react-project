import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const Card = () => {

  const [user, setuser] = useState([])

  const handleFormSubmitData = (data) =>{
    setuser([...user, data])
  }

  const handleRemove = (id) =>{
    setuser(()=>user.filter((item, index ) => index!=id))
  }

  
  return (
    <div className=' w-full h-screen bg-zinc-400 flex justify-center items-center p-8'>
     <div className='container mx-auto'>
      <Cards handleRemove={handleRemove} user={user}/>
      <Form handleFormSubmitData={handleFormSubmitData}/>
     </div>
    </div>
  )
}

export default Card