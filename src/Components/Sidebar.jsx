import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const pages = [
    { name: ".NET in a Nut Shell", href: "/DotNETInNutShell" },
    { name: "All .NETs", href: "/TheDotNETs" },
    { name: ".NET Evolution", href: "/EvolutionDotNet" },
    { name: ".NET Components", href: "/DotNETComponents" },
    { name: ".NET Memory", href: "/DotNETMemory" },
    { name: ".NET Tools", href: "/DotNETTools" },

    // C#Routes

    { name: "C# & .NET", href: "/CSharpDotNet" },
    { name: "C# Fundamentals", href: "/CSharpFundamentals" },
    { name: "ConditionsAndFlows", href: "/ConditionsAndFlows" },
    { name: "DataTypesAndVariable", href: "/DataTypesAndVariable" },
    { name: "Operators", href: "/Operators" },
    { name: "TypeCasting", href: "/TypeCasting" },
  ];

  return (
    <nav className="w-full md:w-1/4 bg-gray-800 text-white p-4">
      <div className="text-[0.9rem] space-y-6">
        <h2 className="text-xl font-bold mb-4">Learn C# and .NET</h2>
        <ul>
          {pages.map((page, index) => (
            <li key={index} className="p-2 cursor-pointer hover:bg-gray-700">
              <Link to={page.href} className="block">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
