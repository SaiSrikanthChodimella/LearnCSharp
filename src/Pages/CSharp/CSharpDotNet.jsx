import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow">
    <h2 className="font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{children}</p>
  </div>
);

const Overview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Why C# and .NET ?</h1>
        <p className="text-gray-700 mb-2">
          <strong>C#</strong> is versatile programming language for building
          differnt types of applications with <strong>.NET</strong>, especially
          for Business apps:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Section title="Web Applications">ASP.NET Core</Section>
          <Section title="Windows Application">WinForms, WPF and UPF</Section>
          <Section title="Mobile Application">.NET MAUI</Section>
          <Section title="Graphics / Games">Unity</Section>
          <Section title="Cross Platform Application">
            .NET Core Framework
          </Section>
          <Section title="Cloud">.NET Aspire</Section>
          <Section title="IOT">.NET nanoFramework, Meadow</Section>
          <Section title=" AI applications">ML .NET</Section>
          <Section title="Opensource">
            Lots of support on Stack Overflow etc
          </Section>
        </div>
        <p className="text-gray-700 mt-4">
          Current Version C# 12 (Refer wiki for Iterations details)
        </p>
        <p className="text-gray-700 mt-2">OOPS (Object Oriented Programming)</p>
      </div>
    </div>
  );
};

export default Overview;
