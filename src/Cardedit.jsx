import React, { useState } from "react";
import Music from "./components/music";
import Navbar from "./components/Navbar";


const Cardedit = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "chanllage",
      artist: "footwaller",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1673757117872-47a1e6004d3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "loose",
      artist: "painter",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661378669684-6572d36f9511?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "win",
      artist: "singer",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1727447903891-f4a3bad38598?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "greater",
      artist: "musian",
      added: true,
    },
  ];

  const [song, setsong] = useState(data);

  const handleClick = (index) => {
    setsong((prev) => {
      return prev.map((item, itemindex) => {
        if ((itemindex == index)) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-300 p-10">
        <Navbar data={song}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {song.map((obj, index) => (
            <Music
              data={obj}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          ))}
        </div>


        
       
        
      </div>
     

     
    </>
  );
};

export default Cardedit;
