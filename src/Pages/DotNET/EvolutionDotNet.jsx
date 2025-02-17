import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const sectionsData = [
  {
    title: "Early Microsoft Development",
    items: [
      "Microsoft started with Visual Basic (VB), which was user-friendly but not suitable for complex applications.",
      "Developers used C++ for Windows applications, but it was complex and challenging.",
    ],
  },
  {
    title: "Java Competition",
    items: [
      "Java introduced a cross-platform Virtual Machine (JVM) and modern programming principles, becoming a strong competitor.",
    ],
  },
  {
    title: "Introduction of .NET",
    items: [
      "Microsoft launched .NET to create a unified development framework.",
      "The core of .NET is the Common Language Runtime (CLR), enabling different programming languages to work together.",
      "Initially, .NET supported Java, but it remained closed-source and focused on Windows.",
    ],
  },
  {
    title: "Mono and Open-Source Movement",
    items: [
      "The open-source community developed Mono, an alternative CLR for non-Windows platforms, sometimes outperforming Microsoft's CLR.",
      "Microsoft responded by open-sourcing the CLR, C# compiler, and Base Class Library (BCL).",
      "They simplified and optimized .NET, leading to .NET Core.",
    ],
  },
  {
    title: "Integration of Mono and .NET Core",
    items: [
      "The Mono team joined Microsoft's .NET team.",
      "With open-source collaboration, they gained direct access to BCL and other essential components.",
    ],
  },
  {
    title: "Why Microsoft Went Open Source",
    items: [
      "Previously, Microsoft relied on licensing revenue from products like SQL Server, Office, and .NET Framework.",
      "With the rise of cloud computing, licensing became less effective.",
      "Linux dominated cloud servers, prompting Microsoft to adapt by:",
      <ul
        className="list-disc list-inside ml-4 space-y-2"
        key="why-open-source"
      >
        <li>Making .NET Core free and open-source.</li>
        <li>Releasing VS Code for free.</li>
        <li>Integrating Linux support in Windows (WSL, Docker, etc.).</li>
        <li>Focusing on cloud services like Azure for revenue.</li>
      </ul>,
    ],
  },
  {
    title: ".NET Today",
    items: [
      ".NET Framework is now considered legacy.",
      ".NET Core has evolved into .NET, which is the future.",
      "The .NET Foundation, a non-profit organization, oversees the .NET ecosystem and C# development.",
      "Microsoft shares .NET source code, team meetings, and development updates publicly.",
    ],
  },
];

const EvolutionDotNet = () => (
  <div className="p-6 bg-gray-100 text-gray-800">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Evolution of .NET and Microsoft's Open-Source Journey
      </h1>

      <div className="space-y-6">
        {sectionsData.map((section, index) => (
          <Section key={index} title={section.title}>
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>
        ))}
      </div>

      <p className="mt-8 text-center">
        <a
          href="https://source.dot.net/"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Explore the .NET source code here
        </a>
      </p>
    </div>
  </div>
);

export default EvolutionDotNet;
