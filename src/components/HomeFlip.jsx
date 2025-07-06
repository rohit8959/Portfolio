import React from "react";

const HomeFlip = () => {
    return (
        <div className="w-content h-content  [perspective:1000px] group justify-center items-center ">
            <div className="  relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform ">
                {/* Front Side */}
                <div className="   relative w-80 h-100 border-2 border-green-600 rounded-full border-2 border-gradient-to-tr from-pink-400 via-purple-500 to-cyan-400  shadow-[0_0_10px_#28d3ee] overflow-hidden shadow-9xl">
                    <img
                        src="./images/rohit photo.jpg" // ✅ image path
                        alt="Rohit"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-white border-4 border-pink-500 animate-pulse"></div>
                </div>

                {/* Back Side */}
                <div className=" absolute w-80 h-100  inset-0 backface-hidden rotate-y-180 bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col items-center justify-center p-4 rounded-full shadow-xl">
                    <p className="text-center text-lg font-semibold leading-relaxed">
                        Hi, I’m Rohit Rajput 👋<br />
                        A passionate Web Developer who builds modern, responsive & fast websites<br />
                        using React, TailwindCSS, Node.js & Java 🚀
                    </p>
                    <p className="text-center text-sm mt-4 ">
                         📩 rohitrajput125061@gmail.com
                    </p>
                    <p className="text-center text-xs mt-2 italic text-gray-100">
                        “Turning ideas into interactive web experiences.”
                    </p>
                    <div className="absolute inset-0 rounded-full border-2 border-white border-2 border-pink-500 animate-pulse"></div>
                </div>

            </div>
        </div>
    );
};

export default HomeFlip;
