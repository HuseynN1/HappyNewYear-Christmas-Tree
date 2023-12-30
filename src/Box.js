import React, { useEffect, useState } from "react";

const Box = () => {
  const [color, setColor] = useState("rgb(255,255,255)");
  const colorGenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    setColor(`rgb(${red},${blue},${green})`);
  };
  useEffect(colorGenerator, []);
  
  useEffect(()=>{
    setInterval(() => {
        colorGenerator();
      }, 1000);

  },[])
  

  return (
    <div
      onClick={colorGenerator}
      style={{ backgroundColor: color, width: "50px", height: "50px" }}
    ></div>
  );
};

export default Box;
