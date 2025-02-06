import React from "react";
import { Link } from "react-router-dom";

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
      { name: "C# Definitions", href: "/Definitions" },
      { name: "Data Types And Variables", href: "/DataTypesAndVariable" },
      { name: "Type Casting", href: "/TypeCasting" },
      { name: "Operators", href: "/Operators" },
      { name: "Conditions And Flows", href: "/ConditionsAndFlows" },
      { name: "Exception Handling", href: "/ExceptionHandling" },
      { name: "Generics And Enums", href: "/GenericsEnum" },
      { name: "Collections", href: "/Collections" },
      { name: "Delegates", href: "/Delegates" },
    ],
  },
  {
    title: "Object oriented Programming",
    pages: [{ name: "Object oriented Programming", href: "/OOPS" }],
  },
  {
    title: "LINQ",
    pages: [{ name: "LINQ", href: "/LINQ" }],
  },
  {
    title: "Advanced C#",
    pages: [
      { name: "Async And Parallel", href: "/AsyncAndParallel" },
      { name: "Async And Parallel", href: "/AsyncAndParallel2" },
      { name: "Async Await", href: "/AsyncAwait" },
      { name: "Parallel Programming", href: "/ParallelProgramming" },
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
      { name: "Q&A", href: "/FAQ" },
      { name: "Q&A cont.", href: "/FAQ2" },
    ],
  },
];

const SidebarSection = ({ title, pages }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
);

const Sidebar = () => (
  <nav className="w-full md:w-1/4 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
    <div className="text-[0.9rem] space-y-6">
      <h2 className="text-xl font-bold mb-4">Learn C# and .NET</h2>
      {sections.map((section, index) => (
        <SidebarSection
          key={index}
          title={section.title}
          pages={section.pages}
        />
      ))}
    </div>
  </nav>
);

export default Sidebar;
