import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sections = [
  {
    pages: [{ name: "Home", href: "/" }],
  },
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
    title: "Object Oriented Programming",
    pages: [{ name: "Object Oriented Programming", href: "/OOPS" }],
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

const SidebarSection = ({ title, pages }) => {
  const location = useLocation();
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
        {title}
      </h3>
      <ul className="space-y-1">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              to={page.href}
              className={`flex items-center p-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === page.href
                  ? "bg-blue-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="p-3 m-2 text-white bg-blue-600 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white h-full overflow-y-auto transform transition-transform md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
        aria-label="Sidebar"
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-8">
            Learn C# and .NET
          </h2>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <SidebarSection
                key={index}
                title={section.title}
                pages={section.pages}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
