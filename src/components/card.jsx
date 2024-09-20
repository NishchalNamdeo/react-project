import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "amazon",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at aliquid nemo",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "object",

      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1685134731677-1f5021c1f764?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "News",
      description: "Lorem, ipsum dolor sit amet .",
    },
  ];
  return (
    <div className=" w-full h-screen flex items-center justify-center gap-10 bg-gray-300">
      {data.map((elem, index) => (
        <div key={index} className="w-52  bg-white  rounded-md overflow-hidden">
          <div className="w-full h-32 bg-pink-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>

          <div className="w-full px-3 py-4">
            <h2 className="text-xl font-bold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
