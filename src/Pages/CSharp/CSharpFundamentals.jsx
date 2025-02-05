import React from "react";

const CSharpFundamentals = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-bold mb-2">Fundamentals</h2>
        <ul className="list-disc list-inside">
          <li>Instantiation: Creating an object from a class.</li>
          <li>Initialization: Assigning a value to a declared variable.</li>
          <li>Declaration: Declaring a variable with a specific data type.</li>
          <li>
            Realization / Implementation: Writing the logic to fulfill a
            specific requirement.
          </li>
          <li>
            Debugging: Running the debugger to step through each line of code.
          </li>
          <li>Statement: A single line of code or instruction.</li>
          <li>Runtime: The period when the application is running.</li>
          <li>Compile Time: The process of building the code.</li>
          <li>
            Class Members: The fields, properties, methods, and variables inside
            a class.
          </li>
          <li>Member Variable: A variable that is part of a class.</li>
          <li>
            Local Variable: A variable that exists only within a method's scope.
          </li>
          <li>
            Global Variable: A variable that is accessible across multiple
            classes (placed outside of any namespace to make it globally
            available).
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-bold mb-2">Example Code</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code>
            {`using System;
class Program
{
        static void Main(string[] args)
        {
                Console.WriteLine("Hello, World!");
        }
}`}
          </code>
        </pre>
        <h3 className="text-lg font-semibold mt-4">Explanation:</h3>
        <ul className="list-disc list-inside">
          <li>
            <code>using System;</code> → Includes system libraries (Namespace).
          </li>
          <li>
            <code>class Program</code> → Defines a class named Program (Class).
          </li>
          <li>
            <code>static void Main()</code> → The main entry point of a C#
            program (Method).
          </li>
          <li>
            <code>Console.WriteLine("Hello, World!");</code> → Prints output to
            the console.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-bold mb-2">Definitions</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Namespace:</strong> A collection of classes, interfaces,
            structs, enums, and delegates. Using statements at the top of the
            code page indicate that you are using those namespaces.
          </li>
          <li>
            <strong>Class:</strong> A bundle of code that includes methods,
            variables, fields, properties, and constructors. It is a
            user-defined reference data type and serves as a blueprint for
            objects.
          </li>
          <li>
            <strong>Object:</strong> An instance of a class. A class can be
            instantiated to create objects.
          </li>
          <li>
            <strong>Method:</strong> A unit of code that can be reused and
            returns a result.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Additional Concepts</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Comments</h3>
          <p>Comments are ignorable lines in code usually for notes in code.</p>
          <ul className="list-disc list-inside">
            <li>
              <code>// Comments</code> → Single Line
            </li>
            <li>
              <code>/* Multi Line Comment */</code>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">String Interpolation</h3>
          <p>
            Use <code>$</code> before the string and wrap variables inside{" "}
            <code>{`{}`}</code>.
          </p>
          <p>Why use string interpolation:</p>
          <ul className="list-disc list-inside">
            <li>
              Easier to read – No need for <code>+</code> operators.
            </li>
            <li>Better for long sentences – Avoids confusion.</li>
            <li>
              Works with expressions – You can use calculations inside{" "}
              <code>{`{}`}</code>.
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>
              {`string name = "Hero"; 
// Standard way (Concatenation)
Console.WriteLine("Hello " + name + "!");

// Using String Interpolation (Cleaner way)
Console.WriteLine($"Hello {name}!");`}
            </code>
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Escape Sequences</h3>
          <p>
            Output/string literals are modified by the usage of escape sequences
            (e.g., <code>/n</code> for new line, <code>@</code> to ignore escape
            sequences).
          </p>
          <p>Check wiki for all escape sequences.</p>
        </div>
      </div>
    </div>
  );
};

export default CSharpFundamentals;
