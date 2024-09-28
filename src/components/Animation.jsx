import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Animation({text, color}) {
  const [val, setVal] = useState(false);

  return (
    <div className="h-screen w-full bg-slate-300 flex  justify-center items-center gap-10   ">
      <div className=" relative h-44 w-72 bg-black rounded flex overflow-hidden    ">
        <img className={`shrink-0 transition-transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full object-cover`} src="https://images.unsplash.com/photo-1727162334294-170987f6b31b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`shrink-0 transition-transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full object-cover`} src="https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={()=> setVal(()=>!val)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada8b] absolute  bottom-[5%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <FaArrowRight size={".9em"}  />
        </span>
      </div>

      <button className={`px-4 py-2 ${color} rounded p-4`}>{text}</button>

    </div>
  );
}

export default Animation;
