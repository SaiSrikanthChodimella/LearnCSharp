import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="text-2xl font-bold text-white">C# Notes</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
