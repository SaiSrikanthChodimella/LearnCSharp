import React from "react";

const DotNETComponents = () => {
  return (
    <div className="p-4">
      <div className="w-full p-2">
        <h1 className="text-2xl font-bold mb-4">
          Understanding .NET Components
        </h1>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Language Compiler</h2>
          <ul className="list-disc list-inside">
            <li>
              Converts source code into MSIL (Microsoft Intermediate Language).
            </li>
            <li>Each language (C#, VB, F#) has its own compiler.</li>
            <li>
              Detects syntax and logical errors (1st phase of compilation).
            </li>
            <li>After compilation, the MSIL is processed by the CLR.</li>
          </ul>
        </div>
      </div>

      {/* CLR CTS CLS and FCL */}
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <h1 className="text-2xl font-bold mb-4">CLR, CTS, CLS, and FCL</h1>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-1">
              Common Language Runtime (CLR)
            </h3>
            <ul className="list-disc list-inside">
              <li>
                The execution engine of .NET, also called VES (Virtual Execution
                System).
              </li>
              <li>
                Functions of CLR:
                <ul className="list-disc list-inside ml-4">
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
                Key Components of CLR:
                <ul className="list-disc list-inside ml-4">
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
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-1">
              Common Type System (CTS)
            </h3>
            <ul className="list-disc list-inside">
              <li>Ensures consistent data types across .NET languages.</li>
              <li>
                Example: int in C# and Integer in VB.NET are both treated as
                Int32 in IL/CLR.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-1">
              Common Language Specification (CLS)
            </h3>
            <ul className="list-disc list-inside">
              <li>
                A set of rules that .NET languages must follow to work together.
              </li>
              <li>
                CLS is a subset of CTS, ensuring compatibility between
                languages.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-1">
              Framework Class Library (FCL)
            </h3>
            <ul className="list-disc list-inside">
              <li>A collection of predefined classes and methods.</li>
              <li>
                Example:
                <ul className="list-disc list-inside ml-4">
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
          </div>
        </div>
      </div>
      <div className="w-full p-2">
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold mb-1">.NET Execution Flow</h3>
          <ul className="list-disc list-inside">
            <li>CTS, CLS, and FCL are used to write the source code.</li>
            <li>Compiler converts source code to MSIL.</li>
            <li>
              CLR picks up the MSIL and executes it with its built-in features.
            </li>
          </ul>
          <p>
            This structure ensures that .NET applications are efficient, secure,
            and cross-platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DotNETComponents;
