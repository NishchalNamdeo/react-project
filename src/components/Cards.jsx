import React from 'react';
import Childcard from './Childcard'

const Cards = ({user, handleRemove}) => {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto    p-4 flex justify-center gap-4 flex-wrap'>
      {user.map((item, index) =>{
       return <Childcard handleRemove={handleRemove} id={index} key={index} user={item}/>
      })}

    </div>
  )
}

export default Cards;