"use client";
import React, { useState } from 'react';
 
const Hero = ({bg, title, subtitle}: {bg: string, title: string, subtitle: string}) => {
    const [bgImage, setBgImage] = useState(bg);
    return (
        <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-[50vh] bg-cover bg-center bg-no-repeat relative flex items-center"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0 relative z-20">
        <div className=" gap-4 flex flex-col justify-center items-center relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-white blur-[30px] rounded-full"></div>
          <p className="text-black font-medium leading-[160%] relative z-20">{"["}{subtitle}{"]"}</p>
          <h1 className="instrument-font text-[44px] xl:text-[56px] leading-[104%] text-[#228573] relative z-20">
            {title}
          </h1>
        </div>
      </div>
    </div>
    );
};
 
export default Hero;
 