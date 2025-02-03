import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg rounded-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">Topics</h2>
        <nav className="mt-6">
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                Settings
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
