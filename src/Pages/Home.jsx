import React from "react";
import CSharp from "../assets/C_Sharp_Logo_2023.png";
import DotNET from "../assets/Microsoft_.NET_logo.png";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Left Background Image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2">
        <img
          src={CSharp}
          alt="C# Logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <img
          src={DotNET}
          alt=".NET Logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card with Blur and Opacity */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-10 max-w-2xl mx-4 text-center border border-white/10">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to My C# and .NET Website
        </h1>
        <p className="text-xl mb-8">
          Learn C# and .NET concepts along with me.
        </p>
        <a
          href="https://saisrikanthchodimella.github.io/ReactPortfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-violet-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-violet-100 hover:scale-105 transition-all duration-300"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default Home;
