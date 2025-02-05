import React from "react";

const DotNETTools = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            Useful Classes and Tools in .NET
          </h2>
          <h3 className="text-lg font-semibold mb-2">Important Classes</h3>
          <ul className="list-disc list-inside">
            <li>
              Math Class → Provides functions for mathematical operations like
              Math.Sqrt() for square roots, Math.Pow() for power calculations,
              and Math.Abs() for absolute values.
            </li>
            <li>
              Random Class → Generates random numbers using methods like
              Random.Next() and Random.NextDouble().
            </li>
            <li>
              StringBuilder Class → Efficiently modifies strings without
              creating multiple objects, which is useful for performance.
            </li>
            <li>
              String Methods and Properties → Includes methods like .Substring()
              for extracting parts of a string, .Replace() for replacing
              characters, .ToUpper() for converting to uppercase, and .Trim()
              for removing whitespace.
            </li>
            <li>BenchMark .NET → A tool for performance testing.</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Useful Tools</h3>
          <ul className="list-disc list-inside">
            <li>
              .NET CLI (Command Line Interface) → Allows you to run, build, and
              manage .NET projects from the terminal.
            </li>
            <li>
              dnSpy → A reverse engineering tool that decompiles MSIL (Microsoft
              Intermediate Language) back into C# code.
            </li>
            <li>
              PerfView → A performance analysis tool that helps you observe
              Garbage Collection (GC) behavior in .NET applications.
            </li>
            <li>
              Mockaroo → A free tool for generating sample/mock data for testing
              databases and applications. Website:{" "}
              <a
                href="https://mockaroo.com/"
                className="text-blue-500 underline"
              >
                https://mockaroo.com/
              </a>
            </li>
          </ul>
          <p className="mt-4">
            These tools and classes help you build, debug, optimize, and test
            .NET applications more efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DotNETTools;
