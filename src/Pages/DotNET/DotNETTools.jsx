import React from "react";

// A reusable ListItem component to avoid repetition in rendering list items
const ListItem = ({ children }) => (
  <li className="mb-2">
    <span>{children}</span>
  </li>
);

// A reusable Section component to handle common layout for each section
const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

// ImportantClasses component rendering a list of important classes
const ImportantClasses = () => (
  <Section title="Important Classes">
    <ListItem>
      <strong>Math Class</strong> → Provides functions for mathematical
      operations like Math.Sqrt(), Math.Pow(), and Math.Abs().
    </ListItem>
    <ListItem>
      <strong>Random Class</strong> → Generates random numbers using methods
      like Random.Next() and Random.NextDouble().
    </ListItem>
    <ListItem>
      <strong>StringBuilder Class</strong> → Efficiently modifies strings
      without creating multiple objects, useful for performance.
    </ListItem>
    <ListItem>
      <strong>String Methods and Properties</strong> → Includes methods like
      .Substring(), .Replace(), .ToUpper(), and .Trim().
    </ListItem>
    <ListItem>
      <strong>BenchMark .NET</strong> → A tool for performance testing.
    </ListItem>
  </Section>
);

// UsefulTools component rendering a list of useful tools
const UsefulTools = () => (
  <Section title="Useful Tools">
    <ListItem>
      <strong>.NET CLI (Command Line Interface)</strong> → Allows you to run,
      build, and manage .NET projects from the terminal.
    </ListItem>
    <ListItem>
      <strong>dnSpy</strong> → A reverse engineering tool that decompiles MSIL
      (Microsoft Intermediate Language) back into C# code.
    </ListItem>
    <ListItem>
      <strong>PerfView</strong> → A performance analysis tool that helps you
      observe Garbage Collection (GC) behavior in .NET applications.
    </ListItem>
    <ListItem>
      <strong>Mockaroo</strong> → A free tool for generating sample/mock data
      for testing databases and applications.
      <a href="https://mockaroo.com/" className="text-blue-500 underline">
        https://mockaroo.com/
      </a>
    </ListItem>
    <p className="mt-4">
      These tools and classes help you build, debug, optimize, and test .NET
      applications more efficiently.
    </p>
  </Section>
);

// DotNETTools component rendering both ImportantClasses and UsefulTools
const DotNETTools = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-4">
          <ImportantClasses />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <UsefulTools />
        </div>
      </div>
    </div>
  );
};

export default DotNETTools;
