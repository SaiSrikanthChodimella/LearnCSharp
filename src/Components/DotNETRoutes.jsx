import EvolutionDotNet from "../Pages/DotNET/EvolutionDotNet";
import TheDotNETs from "../Pages/DotNET/TheDotNETs";
import DotNETInNutShell from "../Pages/DotNET/DotNETInNutShell";
import DotNETComponents from "../Pages/DotNET/DotNETComponents";
import DotNETMemory from "../Pages/DotNET/DotNETMemory";
import DotNETTools from "../Pages/DotNET/DotNETTools";

import React from "react";
import { Route, Routes } from "react-router-dom";

const DotNETRoutes = () => {
  return (
    <Routes>
      <Route path="/EvolutionDotNet" element={<EvolutionDotNet />} />
      <Route path="/TheDotNETs" element={<TheDotNETs />} />
      <Route path="/DotNETInNutShell" element={<DotNETInNutShell />} />
      <Route path="/DotNETComponents" element={<DotNETComponents />} />
      <Route path="/DotNETMemory" element={<DotNETMemory />} />
      <Route path="/DotNETTools" element={<DotNETTools />} />
    </Routes>
  );
};

export default DotNETRoutes;
