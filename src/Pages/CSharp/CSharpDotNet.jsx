import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const Overview = () => {
  const sections = [
    { title: "Web Applications", content: "ASP.NET Core" },
    { title: "Windows Applications", content: "WinForms, WPF, and UPF" },
    { title: "Mobile Applications", content: ".NET MAUI" },
    { title: "Graphics / Games", content: "Unity" },
    { title: "Cross-Platform Applications", content: ".NET Core Framework" },
    { title: "Cloud", content: ".NET Aspire" },
    { title: "IoT", content: ".NET nanoFramework, Meadow" },
    { title: "AI Applications", content: "ML .NET" },
    {
      title: "Open Source",
      content: "Lots of support on Stack Overflow, etc.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Why Choose C# and .NET?</h1>
        <p className="text-gray-700 mb-6">
          <strong>C#</strong> is a versatile programming language that lets you
          create many types of applications using <strong>.NET</strong>. It's
          particularly good for business applications:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map(({ title, content }) => (
            <Section key={title} title={title}>
              {content}
            </Section>
          ))}
        </div>
        <p className="text-gray-700 mt-6">
          The latest version is C# 12. Check the wiki for more details on its
          updates.
        </p>
        <p className="text-gray-700 mt-2">
          It supports Object-Oriented Programming (OOP).
        </p>
      </div>
    </div>
  );
};

export default Overview;
