import React from "react";
import Sidebar from "./Sidebar";
import ReadingPane from "./ReadingPane";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main Read Page */}
          <ReadingPane />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
