import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to My C# and .NET Website
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          learn C# and .NET concpets along with me.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
