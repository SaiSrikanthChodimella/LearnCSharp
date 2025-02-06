import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const DotNETComponents = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Understanding .NET Components
        </h1>

        {/* Language Compiler Section */}
        <Section title="Language Compiler">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Converts source code into MSIL (Microsoft Intermediate Language).
            </li>
            <li>Each language (C#, VB, F#) has its own compiler.</li>
            <li>
              Detects syntax and logical errors (1st phase of compilation).
            </li>
            <li>After compilation, the MSIL is processed by the CLR.</li>
          </ul>
        </Section>

        {/* CLR, CTS, CLS, and FCL Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="Common Language Runtime (CLR)">
            <ul className="list-disc list-inside space-y-2">
              <li>
                The execution engine of .NET, also called VES (Virtual Execution
                System).
              </li>
              <li>
                <strong>Functions of CLR:</strong>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Memory Management (Garbage Collection).</li>
                  <li>Converts MSIL to native machine code.</li>
                  <li>Ensures type safety.</li>
                  <li>
                    Provides language, platform, and architecture independence.
                  </li>
                  <li>Optimizes performance and security.</li>
                </ul>
              </li>
              <li>
                <strong>Key Components of CLR:</strong>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    JIT (Just-in-Time Compiler) → Converts MSIL to native code
                    (2nd phase of compilation).
                  </li>
                  <li>Class Loader → Loads required classes at runtime.</li>
                  <li>Thread Support → Manages multithreading.</li>
                  <li>Code Manager → Handles runtime code execution.</li>
                  <li>Exception Handling → Manages runtime errors.</li>
                </ul>
              </li>
              <li>
                No pointers in .NET (improves safety but may slightly reduce
                speed).
              </li>
            </ul>
          </Section>

          <Section title="Common Type System (CTS)">
            <ul className="list-disc list-inside space-y-2">
              <li>Ensures consistent data types across .NET languages.</li>
              <li>
                Example: <code>int</code> in C# and <code>Integer</code> in
                VB.NET are both treated as <code>Int32</code> in IL/CLR.
              </li>
            </ul>
          </Section>

          <Section title="Common Language Specification (CLS)">
            <ul className="list-disc list-inside space-y-2">
              <li>
                A set of rules that .NET languages must follow to work together.
              </li>
              <li>
                CLS is a subset of CTS, ensuring compatibility between
                languages.
              </li>
            </ul>
          </Section>

          <Section title="Framework Class Library (FCL)">
            <ul className="list-disc list-inside space-y-2">
              <li>A collection of predefined classes and methods.</li>
              <li>
                Example:
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Namespaces like <code>using System;</code> allow access to
                    built-in functionality.
                  </li>
                  <li>
                    Methods like <code>Console.WriteLine()</code> come from FCL.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>
        </div>

        {/* .NET Execution Flow Section */}
        <Section title=".NET Execution Flow">
          <ul className="list-disc list-inside space-y-2">
            <li>CTS, CLS, and FCL are used to write the source code.</li>
            <li>Compiler converts source code to MSIL.</li>
            <li>
              CLR picks up the MSIL and executes it with its built-in features.
            </li>
          </ul>
          <p className="mt-4">
            This structure ensures that .NET applications are efficient, secure,
            and cross-platform.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default DotNETComponents;
