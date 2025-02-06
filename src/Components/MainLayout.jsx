import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../Pages/Home";
import DotNETRoutes from "./DotNETRoutes";
import CSharpRoutes from "./CSharpRoutes";

const Dashboard = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen">
        <Sidebar />
        <main className="w-full md:w-3/4 lg:w-4/5 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <DotNETRoutes />
          <CSharpRoutes />
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
