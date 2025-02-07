import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../Pages/Home";
import CleanCode from "../Pages/CleanCode";
import DotNETRoutes from "./DotNETRoutes";
import CSharpRoutes from "./CSharpRoutes";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <Router basename="/LearnCSharp">
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-lg z-10">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto m-4 md:ml-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CleanCode" element={<CleanCode />} />
          </Routes>
          <DotNETRoutes />
          <CSharpRoutes />

          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
