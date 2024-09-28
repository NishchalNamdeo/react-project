import React, { useState, useEffect } from 'react';

const LiveTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='h-50 w-52 p-10'>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default LiveTimer;
