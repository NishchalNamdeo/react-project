import React, { useEffect, useState } from "react";

const Services = () => {
    const [first, setfirst] = useState("normal data")
    const [second, setsecond] = useState("very important data")

  useEffect(() => {
    console.log("Services mounted");
    return () => {
      console.log("Services unmounted");
    }; // this will run when the component is unmounted (when the page is refreshed)
  });


  return <div className="p-10">
    
    <h1>{first}</h1>
    <button onClick={() => setfirst("normal data has been changed")} className="px-2 py-1 bg-red-500 mt-2">change normal data</button>

    <h1 className="mt-10" >{second}</h1>
    <button onClick={() => setsecond("large data has been changed")} className="px-2 py-1 bg-blue-500 mt-2">change large data</button>
  </div>;
};

export default Services;
