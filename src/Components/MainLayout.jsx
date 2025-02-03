import React from "react";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="px-4 py-2">
          <div className="flex items-center">
            {/* Brand Logo */}
            <div className="text-xl font-bold text-gray-800">C# Notes</div>
          </div>
        </div>
      </header>

      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Topics</h2>
            <nav className="mt-4">
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Dashboard
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Settings
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Profile
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main Read Page */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome to the Dashboard
            </h1>
            <p className="mt-2 text-gray-600">This is the main content area.</p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
