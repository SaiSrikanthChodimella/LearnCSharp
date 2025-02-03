import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../Pages/HomePage";
import Testpage from "../Pages/TestPage";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <div className="flex flex-col md:flex-row h-screen">
          <Sidebar className="w-full md:w-1/4 lg:w-1/5" />

          {/* Reading Pane */}
          <div className="w-full md:w-3/4 lg:w-4/5 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Test" element={<Testpage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
