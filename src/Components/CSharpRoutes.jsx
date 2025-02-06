import { Route, Routes } from "react-router-dom";

import CSharpDotNet from "../Pages/CSharp/CSharpDotNet";
import CSharpFundamentals from "../Pages/CSharp/CSharpFundamentals";
import Definitions from "../Pages/CSharp/Definitions";
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

const routes = [
  { path: "/CSharpDotNet", component: CSharpDotNet },
  { path: "/CSharpFundamentals", component: CSharpFundamentals },
  { path: "/Definitions", component: Definitions },
  { path: "/ConditionsAndFlows", component: ConditionsAndFlows },
  { path: "/DataTypesAndVariable", component: DataTypesAndVariable },
  { path: "/Operators", component: Operators },
  { path: "/TypeCasting", component: TypeCasting },
  { path: "/OOPS", component: OOPS },
  { path: "/LINQ", component: LINQ },
  { path: "/GenericsEnum", component: GenericsEnum },
  { path: "/FAQ2", component: FAQ2 },
  { path: "/FAQ", component: FAQ },
  { path: "/ExceptionHandling", component: ExceptionHandling },
  { path: "/EntityFrameWork", component: EntityFrameWork },
  { path: "/Delegates", component: Delegates },
  { path: "/DBClass", component: DBClass },
  { path: "/CRUDInEF", component: CRUDInEF },
  { path: "/Collections", component: Collections },
  { path: "/AsyncAwait", component: AsyncAwait },
  { path: "/AsyncAndParallel2", component: AsyncAndParallel2 },
  { path: "/AsyncAndParallel", component: AsyncAndParallel },
  { path: "/ParallelProgramming", component: ParallelProgramming },
];

const CSharpRoutes = () => (
  <Routes>
    {routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
);

export default CSharpRoutes;
