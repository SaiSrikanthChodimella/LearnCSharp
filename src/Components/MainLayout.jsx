import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";

import EvolutionDotNet from "../Pages/DotNET/EvolutionDotNet";
import TheDotNETs from "../Pages/DotNET/TheDotNETs";
import DotNETInNutShell from "../Pages/DotNET/DotNETInNutShell";
import DotNETComponents from "../Pages/DotNET/DotNETComponents";
import DotNETMemory from "../Pages/DotNET/DotNETMemory";
import DotNETTools from "../Pages/DotNET/DotNETTools";
import Home from "../Pages/Home";

const Dashboard = () => {
  return (
    <div>
      <Router>
        <div className="flex flex-col md:flex-row h-screen">
          <Sidebar />
          {/* Reading Pane */}
          <div className="w-full md:w-3/4 lg:w-4/5 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/EvolutionDotNet" element={<EvolutionDotNet />} />
              <Route path="/TheDotNETs" element={<TheDotNETs />} />
              <Route path="/DotNETInNutShell" element={<DotNETInNutShell />} />
              <Route path="/DotNETComponents" element={<DotNETComponents />} />
              <Route path="/DotNETMemory" element={<DotNETMemory />} />
              <Route path="/DotNETTools" element={<DotNETTools />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
