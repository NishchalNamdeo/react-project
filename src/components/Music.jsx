import React from 'react'

function Music ({data, handleClick ,index}) {

    const {image, name, artist, added } = data;

  return (
    <div className='w-64 h-44 bg-zinc-800 p-4 rounded-md text-white flex gap-4 pb-10 relative m-10 '>
        <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden '>
            <img className='w-full h-full object-cover'  src={image} alt="" />
        </div>
        <div className=''>
                <h3 className='text-xl leading-none font-semibold'>{name}</h3>
                <h6 className='text-sm mt-2 '>{artist}</h6>
        </div>
        <button onClick={()=>handleClick(index)} className={`px-10 py-2 ml-16 rounded-lg ${ added == true ? "bg-yellow-400" : "bg-orange-700"} absolute bottom-5  text-white text-sm`}> { added == true ? "remave" : "added"}</button>
    </div>
  )
}

export default Music;