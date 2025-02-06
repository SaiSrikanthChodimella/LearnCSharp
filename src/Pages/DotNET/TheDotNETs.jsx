import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const DotNetContinued = () => {
  const sections = [
    {
      title: ".NET Framework",
      content: (
        <>
          <li>
            Used for building web applications (ASP.NET), Windows applications
            (WinForms, WPF), Windows server apps, and Azure apps.
          </li>
          <li>
            Includes the Base Class Library (BCL) and Common Language Runtime
            (CLR).
          </li>
          <li>Provides built-in services such as:</li>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Memory management</li>
            <li>Type and memory safety</li>
            <li>Security</li>
            <li>Networking</li>
            <li>Application deployment</li>
            <li>Data structures and APIs for low-level operations</li>
            <li>Supports around 100 programming languages</li>
          </ul>
        </>
      ),
    },
    {
      title: ".NET Core",
      content: (
        <>
          <li>
            Includes all essential features of .NET Framework but removes
            outdated and unnecessary components.
          </li>
          <li>Cross-platform and open-source</li>
          <li>Officially supports C#, F#, and VB</li>
        </>
      ),
    },
    {
      title: ".NET Standard",
      content: (
        <>
          <li>
            A set of rules that every .NET platform must follow to ensure
            compatibility.
          </li>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Why was it needed?
          </h3>
          <li>
            Mono was used for cross-platform apps, while .NET Framework was for
            Windows apps.
          </li>
          <li>These two were separate and could not be easily merged.</li>
          <li>
            .NET Standard defined common features to make shared libraries work
            across different platforms.
          </li>
          <p className="mt-4">
            When writing libraries, target .NET Standard for maximum
            compatibility.
          </p>
        </>
      ),
    },
    {
      title: ".NET (Modern .NET – No More Core or Standard)",
      content: (
        <>
          <li>
            Everything is merged into one unified framework—.NET Core, .NET
            Framework, Mono, and Xamarin are now just .NET.
          </li>
          <li>
            .NET 5 was the first version of this unified approach (now out of
            support).
          </li>
          <li>.NET 7 is the current standard support version.</li>
          <li>.NET 8 is the latest Long-Term Support (LTS) version.</li>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Where does .NET 7+ run?
          </h3>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Smart TVs</li>
            <li>iOS</li>
            <li>Android</li>
            <li>Web browsers</li>
            <li>Unity</li>
            <li>Windows</li>
            <li>Linux</li>
            <li>macOS</li>
          </ul>
          <p className="mt-4">
            With .NET 7 and beyond, code runs anywhere .NET runs, making
            development easier.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Section key={index} title={section.title}>
            {section.content}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default DotNetContinued;
