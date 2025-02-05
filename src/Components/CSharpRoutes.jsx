import React from "react";
import { Route, Routes } from "react-router-dom";

import CSharpDotNet from "../Pages/CSharp/CSharpDotNet";
import CSharpFundamentals from "../Pages/CSharp/CSharpFundamentals";
import ConditionsAndFlows from "../Pages/CSharp/ConditionsAndFlows";
import DataTypesAndVariable from "../Pages/CSharp/DataTypesAndVariable";
import Operators from "../Pages/CSharp/Operators";
import TypeCasting from "../Pages/CSharp/TypeCasting";

const CSharpRoutes = () => {
  return (
    <Routes>
      <Route path="/CSharpDotNet" element={<CSharpDotNet />} />
      <Route path="/CSharpFundamentals" element={<CSharpFundamentals />} />
      <Route path="/ConditionsAndFlows" element={<ConditionsAndFlows />} />
      <Route path="/DataTypesAndVariable" element={<DataTypesAndVariable />} />
      <Route path="/Operators" element={<Operators />} />
      <Route path="/TypeCasting" element={<TypeCasting />} />
    </Routes>
  );
};

export default CSharpRoutes;
