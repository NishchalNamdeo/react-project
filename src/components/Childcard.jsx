import React from "react";

const Childcard = () => {
  return (
    <>
      <div className="w-44 h-full bg-black rounded-lg flex flex-col items-center  p-2  text-white">
        <div className="image w-10 h-10 rounded-full bg-slate-400 overflow-hidden">
          <img className="w-full h-full object-cover" src="" alt="" />
        </div>
        <h1 className="font-semibold text-xl  mt-1">harsh</h1>
        <h4 className="font-semibold text-sm text-gray-400 mt-1">harsh@gmail.com</h4>
        <p className="text-xs mt-2 leading-1 tracking-tighter text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit officia deserunt.</p>
        <button className="px-3 py-1 bg-red-700 rounded-lg fornt-semibold mt-4">Remove</button>
      </div>
    </>
  );
};

export default Childcard;
