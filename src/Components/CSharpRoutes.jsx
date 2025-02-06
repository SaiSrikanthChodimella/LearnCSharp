import { Route, Routes } from "react-router-dom";

import CSharpDotNet from "../Pages/CSharp/CSharpDotNet";
import CSharpFundamentals from "../Pages/CSharp/CSharpFundamentals";
import ConditionsAndFlows from "../Pages/CSharp/ConditionsAndFlows";
import DataTypesAndVariable from "../Pages/CSharp/DataTypesAndVariable";
import Operators from "../Pages/CSharp/Operators";
import TypeCasting from "../Pages/CSharp/TypeCasting";

import OOPS from "../Pages/CSharp/OOPS";
import LINQ from "../Pages/CSharp/LINQ";
import GenericsEnum from "../Pages/CSharp/GenericsEnum";
import FAQ2 from "../Pages/CSharp/FAQ2";
import FAQ from "../Pages/CSharp/FAQ";
import ExceptionHandling from "../Pages/CSharp/ExceptionHandling";
import EntityFrameWork from "../Pages/CSharp/EntityFrameWork";
import Delegates from "../Pages/CSharp/Delegates";
import DBClass from "../Pages/CSharp/DBClass";
import CRUDInEF from "../Pages/CSharp/CRUDInEF";
import Collections from "../Pages/CSharp/Collections";
import AsyncAwait from "../Pages/CSharp/AsyncAwait";
import AsyncAndParallel2 from "../Pages/CSharp/AsyncAndParallel2";
import AsyncAndParallel from "../Pages/CSharp/AsyncAndParallel";
import ParallelProgramming from "../Pages/CSharp/ParallelProgramming";

const CSharpRoutes = () => (
  <Routes>
    <Route path="/CSharpDotNet" element={<CSharpDotNet />} />
    <Route path="/CSharpFundamentals" element={<CSharpFundamentals />} />
    <Route path="/ConditionsAndFlows" element={<ConditionsAndFlows />} />
    <Route path="/DataTypesAndVariable" element={<DataTypesAndVariable />} />
    <Route path="/Operators" element={<Operators />} />
    <Route path="/TypeCasting" element={<TypeCasting />} />
    <Route path="/OOPS" element={<OOPS />} />
    <Route path="/LINQ" element={<LINQ />} />
    <Route path="/GenericsEnum" element={<GenericsEnum />} />
    <Route path="/FAQ2" element={<FAQ2 />} />
    <Route path="/FAQ" element={<FAQ />} />
    <Route path="/ExceptionHandling" element={<ExceptionHandling />} />
    <Route path="/EntityFrameWork" element={<EntityFrameWork />} />
    <Route path="/Delegates" element={<Delegates />} />
    <Route path="/DBClass" element={<DBClass />} />
    <Route path="/CRUDInEF" element={<CRUDInEF />} />
    <Route path="/Collections" element={<Collections />} />
    <Route path="/AsyncAwait" element={<AsyncAwait />} />
    <Route path="/AsyncAndParallel2" element={<AsyncAndParallel2 />} />
    <Route path="/AsyncAndParallel" element={<AsyncAndParallel />} />
    <Route path="/ParallelProgramming" element={<ParallelProgramming />} />
  </Routes>
);

export default CSharpRoutes;
