import React, { useState } from 'react'

const State = () => {
 const [banned, setBanned] =  useState(false)
 const [update, setUpdate] = useState(12)
 const [val, setVal] = useState({name:"harsh", isBanned: true});
 const [newVal, setNewVal] = useState([1,2,3,4,5,6]);
 const [changed, setChanged] = useState([
  {name:"harsh", age:25},
  {name:"shivam", age:23}, 
  {name:"pta", age:34}
  ]);




  return (
    <div className='h-50 w-52 p-10'>
      <h1>{banned.toString()}</h1>
      <button className='px-2 py-1 bg-blue-500 mt-3 rounded' onClick={() => setBanned(!banned)}> Ban now</button>

      <h2 className='mt-5'>{update}</h2>
      <button className='px-2 py-1 bg-blue-500 mt-3 rounded' onClick={()=>setUpdate(prev=>prev+1)} >upadate Now</button>

      <h3 className='mt-5'>name:{val.name}</h3>
      <h2>isBanned: {val.isBanned.toString()}</h2>
      <button className={`px-4 py-1 ${val.isBanned ? "bg-blue-500": "bg-red-500"} mt-3 rounded`} onClick={()=>setVal({...val, isBanned:!val.isBanned})}>click</button>

      <h4 className='mt-5'>{newVal.map(item=><h1>{item}</h1>)}</h4>
      <button className='px-2 py-1 bg-blue-500 mt-3 rounded' onClick={()=>setNewVal(()=>newVal.filter((item, index) => index != newVal.length-1))}>hide</button>

      <h5 className='mt-3'>{changed.map((item)=>(
        <h3 key={item.name}>
          <h2>name: {item.name}</h2>
          <h2>age: {item.age}</h2>
        </h3>
      ))}</h5>
      <button className='px-2 py-1 bg-blue-500 mt-3 rounded' onClick={()=>setChanged(()=>changed.map(item=> item.name === "shivam" ? ({name:"shivam", age:29}) : item))}>change</button>
    </div>
  )
}

export default State;