import React from 'react'
import From from "./components/From";
import Cards from "./components/Cards";

const Card = () => {

    
  return (
    <div className="w-full h-screen bg-slate-500 flex items-center justify-center">
    <div className="container  mx-auto">

    <Cards/>
    <From/>
    </div>
  </div>

  )
}

export default Card