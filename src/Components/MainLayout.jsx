import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../Pages/Home";
import DotNETRoutes from "./DotNETRoutes";
import CSharpRoutes from "./CSharpRoutes";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <Router basename="/LearnCSharp">
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-white shadow-lg rounded-lg m-4">
          <Routes>
            <Route path="/" element={<Home />} />
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
