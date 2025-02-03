import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="text-2xl font-bold">C# Notes</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
