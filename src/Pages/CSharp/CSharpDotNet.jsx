import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow">
    <h2 className="font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{children}</p>
  </div>
);

const Overview = () => {
  const sections = [
    { title: "Web Applications", content: "ASP.NET Core" },
    { title: "Windows Application", content: "WinForms, WPF and UPF" },
    { title: "Mobile Application", content: ".NET MAUI" },
    { title: "Graphics / Games", content: "Unity" },
    { title: "Cross Platform Application", content: ".NET Core Framework" },
    { title: "Cloud", content: ".NET Aspire" },
    { title: "IOT", content: ".NET nanoFramework, Meadow" },
    { title: "AI applications", content: "ML .NET" },
    { title: "Opensource", content: "Lots of support on Stack Overflow etc" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Why C# and .NET ?</h1>
      <p className="text-gray-700 mb-2">
        <strong>C#</strong> is a versatile programming language for building
        different types of applications with <strong>.NET</strong>, especially
        for Business apps:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <Section key={index} title={section.title}>
            {section.content}
          </Section>
        ))}
      </div>
      <p className="text-gray-700 mt-4">
        Current Version C# 12 (Refer wiki for Iterations details)
      </p>
      <p className="text-gray-700 mt-2">OOPS (Object Oriented Programming)</p>
    </div>
  );
};

export default Overview;
