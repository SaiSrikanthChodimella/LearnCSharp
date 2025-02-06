import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const DotNETInNutShell = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">.NET in a Nutshell</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* .NET Overview Section */}
          <Section title=".NET Overview">
            <p className="mb-4">
              .NET is a framework for building applications using languages like
              C#, F#, and VB.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                .NET Core, .NET Framework, .NET Standard, and Mono/Xamarin are
                now unified under .NET.
              </li>
              <li>
                It is a cross-platform, open-source ecosystem that includes
                languages, runtime support, and libraries.
              </li>
              <li>
                Provides an SDK (Software Development Kit) for developing
                business applications.
              </li>
              <li>
                Uses NuGet for managing third-party packages and libraries.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-4">Key Components:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <code>.exe</code> (Executable with Main Method)
              </li>
              <li>
                <code>.dll</code> (Dynamic Link Library / Assembly)
              </li>
              <li>
                <code>.pdb</code> (Portable Debug File)
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-4">Common Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Lambda Expressions</li>
              <li>Entity Framework</li>
              <li>WinForms, ASP.NET, etc.</li>
            </ul>
            <p className="mt-4">
              .NET is a powerful and flexible platform for modern application
              development.
            </p>
          </Section>

          {/* For New Applications or Libraries Section */}
          <Section title="For New Applications or Libraries">
            <ul className="list-disc list-inside space-y-2">
              <li>Use the latest .NET version.</li>
              <li>
                Check which version has Long-Term Support (LTS) before choosing.
              </li>
              <li>
                Download and learn more here:{" "}
                <a
                  href="https://dotnet.microsoft.com/download"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download .NET
                </a>
                .
              </li>
            </ul>
          </Section>

          {/* For Backward-Compatible Libraries Section */}
          <Section title="For Backward-Compatible Libraries">
            <ul className="list-disc list-inside space-y-2">
              <li>If targeting .NET Core, use .NET Standard 2.1.</li>
              <li>
                If targeting .NET Framework, use .NET Standard 2.0 or lower
                (many older applications still rely on it).
              </li>
            </ul>
            <p className="mt-4">
              This ensures your code remains future-proof while maintaining
              compatibility where needed.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default DotNETInNutShell;
