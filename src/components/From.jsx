import React, { useRef } from 'react'

const From = () => {

    const name = useRef(null)
    const handleSubmit = (details) => {
        details.preventDefault();
        console.log(name.current.value);
    }
  return (
    <div className='h-20 w-20  p-5' >
        <form className='flex' onSubmit={handleSubmit} >
            <input ref={name} type="text" placeholder='name' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default From