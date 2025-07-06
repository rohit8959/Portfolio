import React from "react";
import Tilt from "react-parallax-tilt";

const FlipCard = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      className="w-64 h-80 [perspective:1000px] mx-auto"
    >
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d group transition-transform ">
        {/* Front Side */}
        <div className="  relative w-60 h-80  border-2 border-green-600 rounded-full border-2 border-gradient-to-tr from-pink-400 via-purple-500 to-cyan-400  shadow-[0_0_10px_#28d3ee] overflow-hidden shadow-9xl">
          <img
            src="./images/rohit photo.jpg" // make sure file is in public/images/
            alt="Rohit"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full border-2 border-white border-4 border-pink-500 animate-pulse rounded-full"></div>
        </div>

        {/* Back Side (Optional Flip) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center p-4 rounded-xl shadow-xl z-10">
          <p className="text-center text-lg font-semibold">
            Hi, I’m Rohit Rajput — Passionate Frontend Developer skilled in React, Tailwind, and Java!
          </p>
          <p className="text-white text-center">🚀 FlipCard is working - Vercel Test</p>
        </div>
      </div>
    </Tilt>
  );
};

export default FlipCard;

