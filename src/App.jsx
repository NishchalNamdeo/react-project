import React, { useState } from "react";
import Card from "./components/card";
import State from "./components/State";
import Animation from "./components/Animation";
import Live from "./components/Live";
import Showcard from "./components/Showcard";

function App() {
  const data = [
    {
      name: "john",
      profession: "artist",
      image:
        "https://images.unsplash.com/photo-1726211438453-2996fec54c23?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "sumit",
      profession: "gamer",
      image:
        "https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "amit",
      profession: "reader",
      image:
        "https://plus.unsplash.com/premium_photo-1695219820238-34851be608fc?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: true,
    },
    {
      name: "sunita",
      profession: "gamer",
      image:
        "https://images.unsplash.com/photo-1726864175528-2773f04a3327?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
  ];

  const [realdata, setrealdata] = useState(data);

  const handleFriendbtn = (cardindex) => {
    setrealdata((previous) => {
      return previous.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friend: !item.friend };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <Card />
      <State />
      <Animation text="Download" color="bg-red-500" />
      <Live />
      <div className="w-full h-screen bg-slate-400 flex gap-4 items-center justify-center">
        {realdata.map((item, index) => (
          <Showcard key={index} index={index} handleClick={handleFriendbtn} values={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
