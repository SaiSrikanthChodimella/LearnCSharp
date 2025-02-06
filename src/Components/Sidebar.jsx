import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sections = [
    {
      title: ".NET",
      pages: [
        { name: ".NET in a Nut Shell", href: "/DotNETInNutShell" },
        { name: "All .NETs", href: "/TheDotNETs" },
        { name: ".NET Evolution", href: "/EvolutionDotNet" },
        { name: ".NET Components", href: "/DotNETComponents" },
        { name: ".NET Memory", href: "/DotNETMemory" },
        { name: ".NET Tools", href: "/DotNETTools" },
      ],
    },
    {
      title: "C# Basics",
      pages: [
        { name: "C# & .NET", href: "/CSharpDotNet" },
        { name: "C# Fundamentals", href: "/CSharpFundamentals" },
        { name: "Conditions And Flows", href: "/ConditionsAndFlows" },
        { name: "Data Types And Variables", href: "/DataTypesAndVariable" },
        { name: "Operators", href: "/Operators" },
        { name: "Type Casting", href: "/TypeCasting" },
        { name: "Collections", href: "/Collections" },
      ],
    },
    {
      title: "Advanced C#",
      pages: [
        { name: "Async And Parallel", href: "/AsyncAndParallel" },
        { name: "Async And Parallel 2", href: "/AsyncAndParallel2" },
        { name: "Async Await", href: "/AsyncAwait" },
        { name: "Parallel Programming", href: "/ParallelProgramming" },
      ],
    },
    {
      title: "OOP and LINQ",
      pages: [
        { name: "OOPS", href: "/OOPS" },
        { name: "LINQ", href: "/LINQ" },
        { name: "Generics And Enums", href: "/GenericsEnum" },
      ],
    },
    {
      title: "Entity Framework",
      pages: [
        { name: "Entity Framework", href: "/EntityFrameWork" },
        { name: "Database Classes", href: "/DBClass" },
        { name: "CRUD In EF", href: "/CRUDInEF" },
      ],
    },
    {
      title: "Miscellaneous",
      pages: [
        { name: "FAQ", href: "/FAQ" },
        { name: "Exception Handling", href: "/ExceptionHandling" },
      ],
    },
  ];

  return (
    <nav className="w-full md:w-1/4 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
      <div className="text-[0.9rem] space-y-6">
        <h2 className="text-xl font-bold mb-4">Learn C# and .NET</h2>
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <ul>
              {section.pages.map((page, pageIndex) => (
                <li
                  key={pageIndex}
                  className="p-2 cursor-pointer hover:bg-gray-700"
                >
                  <Link to={page.href} className="block">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
