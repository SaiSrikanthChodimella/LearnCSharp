import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const lessons = [
    { name: "Home", href: "/" },
    { name: "Basics", href: "/Basics" },
    { name: "Settings", href: "/settings" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="w-full md:w-1/4 bg-gray-800 text-white p-4">
      <div className="text-[0.9rem] space-y-6">
        <h2 className="text-xl font-bold mb-4">Learn C# and .NET</h2>
        <ul>
          {lessons.map((lesson, index) => (
            <li key={index} className="p-2 cursor-pointer hover:bg-gray-700">
              <Link to={lesson.href} className="block">
                {lesson.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
