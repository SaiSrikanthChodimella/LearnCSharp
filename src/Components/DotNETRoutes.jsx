import React from "react";
import { Route, Routes } from "react-router-dom";

import EvolutionDotNet from "../Pages/DotNET/EvolutionDotNet";
import TheDotNETs from "../Pages/DotNET/TheDotNETs";
import DotNETInNutShell from "../Pages/DotNET/DotNETInNutShell";
import DotNETComponents from "../Pages/DotNET/DotNETComponents";
import DotNETMemory from "../Pages/DotNET/DotNETMemory";
import DotNETTools from "../Pages/DotNET/DotNETTools";

const routes = [
  { path: "/EvolutionDotNet", element: <EvolutionDotNet /> },
  { path: "/TheDotNETs", element: <TheDotNETs /> },
  { path: "/DotNETInNutShell", element: <DotNETInNutShell /> },
  { path: "/DotNETComponents", element: <DotNETComponents /> },
  { path: "/DotNETMemory", element: <DotNETMemory /> },
  { path: "/DotNETTools", element: <DotNETTools /> },
];

const DotNETRoutes = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default DotNETRoutes;
