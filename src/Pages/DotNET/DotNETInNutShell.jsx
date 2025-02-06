import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const DotNETInNutShell = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Section title=".NET Overview">
        <p>
          .NET is a framework for building applications using languages like C#,
          F#, and VB.
        </p>
        <ul className="list-disc list-inside">
          <li>
            .NET Core, .NET Framework, .NET Standard, and Mono/Xamarin are now
            unified under .NET.
          </li>
          <li>
            It is a cross-platform, open-source ecosystem that includes
            languages, runtime support, and libraries.
          </li>
          <li>
            Provides an SDK (Software Development Kit) for developing business
            applications.
          </li>
          <li>Uses NuGet for managing third-party packages and libraries.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-2">Key Components:</h3>
        <ul className="list-disc list-inside">
          <li>.exe (Executable with Main Method)</li>
          <li>.dll (Dynamic Link Library / Assembly)</li>
          <li>.pdb (Portable Debug File)</li>
        </ul>
        <h3 className="text-lg font-semibold mt-2">Common Features:</h3>
        <ul className="list-disc list-inside">
          <li>Lambda Expressions</li>
          <li>Entity Framework</li>
          <li>WinForms, ASP.NET, etc.</li>
        </ul>
        <p>
          .NET is a powerful and flexible platform for modern application
          development.
        </p>
      </Section>
      <Section title="For New Applications or Libraries">
        <ul className="list-disc list-inside">
          <li>Use the latest .NET version.</li>
          <li>
            Check which version has Long-Term Support (LTS) before choosing.
          </li>
          <li>
            Download and learn more here:{" "}
            <a
              href="https://dotnet.microsoft.com/download"
              className="text-blue-500"
            >
              Download .NET
            </a>
            .
          </li>
        </ul>
      </Section>
      <Section title="For Backward-Compatible Libraries">
        <ul className="list-disc list-inside">
          <li>If targeting .NET Core, use .NET Standard 2.1.</li>
          <li>
            If targeting .NET Framework, use .NET Standard 2.0 or lower (many
            older applications still rely on it).
          </li>
        </ul>
        <p>
          This ensures your code remains future-proof while maintaining
          compatibility where needed.
        </p>
      </Section>
    </div>
  );
};

export default DotNETInNutShell;
