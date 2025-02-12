import React from "react";
import CSharp from "../assets/C_Sharp_Logo_2023.png";
import DotNET from "../assets/Microsoft_.NET_logo.png";
import Notes from "../assets/CSharpNotes.pdf";

const Home = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-slate-800 overflow-hidden">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4">
        <img
          src={CSharp}
          alt="C# Logo"
          className="h-full w-full object-contain opacity-70"
        />
      </div>

      {/* Card with Blur and Opacity */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-2xl text-center border border-white/10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Learn C# and .NET concepts along with me.
          </p>
          <a
            href={Notes}
            download="CSharpNotes"
            className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-3 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            Download Notes
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4">
        <img
          src={DotNET}
          alt=".NET Logo"
          className="h-full w-full object-contain opacity-70"
        />
      </div>
    </div>
  );
};

export default Home;
