import React from "react";

const Showcard = ({values, handleClick, index}) => {
const {name, image, profession, friend} = values;
  return (
    <div className="w-52 bg-zinc-200 rounded-md overflow-hidden">
      <div className="w-full  h-44 ">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold" >{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button onClick={()=>handleClick(index)} className={`mt-4 px-3 py-2 text-xs text-white  ${friend == false ? "bg-blue-500" : "bg-red-600" } font-semibold rounded-md`} >{friend == false ? "Add friend" : "remove friend"}</button>
      </div>
    </div>
  );
};

export default Showcard;
