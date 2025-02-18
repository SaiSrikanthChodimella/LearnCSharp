import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);
const CodeBlock = ({ code }) => (
  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
    <code>{code}</code>
  </pre>
);

const List = ({ items }) => (
  <ul className="list-disc list-inside space-y-2">
    {items.map((item, index) => (
      <li key={index} className="text-gray-700">
        {item}
      </li>
    ))}
  </ul>
);

const CSharpFundamentals = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <Section title="Fundamentals">
          <List
            items={[
              "Instantiation: Creating an object from a class.",
              "Initialization: Assigning a value to a declared variable.",
              "Declaration: Declaring a variable with a specific data type.",
              "Implementation: Writing the logic to fulfill a specific requirement.",
              "Debugging: Running the debugger to step through each line of code.",
              "Statement: A single line of code or instruction.",
              "Runtime: The period when the application is running.",
              "Compile Time: The process of building the code.",
              "Class Members: The fields, properties, methods, and variables inside a class.",
              "Member Variable: A variable that is part of a class.",
              "Local Variable: A variable that exists only within a method's scope.",
              "Global Variable: A variable that is accessible across multiple classes (placed outside of any namespace to make it globally available).",
            ]}
          />
        </Section>

        <Section title="Example Code">
          <CodeBlock
            code={`using System;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}`}
          />
          <h3 className="text-lg font-semibold mt-4 mb-2">Explanation:</h3>
          <List
            items={[
              <span>
                <code>using System;</code> → Includes system libraries
                (Namespace).
              </span>,
              <span>
                <code>class Program</code> → Defines a class named Program
                (Class).
              </span>,
              <span>
                <code>static void Main()</code> → The main entry point of a C#
                program (Method).
              </span>,
              <span>
                <code>Console.WriteLine("Hello, World!");</code> → Prints output
                to the console.
              </span>,
            ]}
          />
        </Section>

        <Section title="Definitions">
          <List
            items={[
              <span>
                <strong>Namespace:</strong> A collection of classes, interfaces,
                structs, enums, and delegates. Using statements at the top of
                the code page indicate that you are using those namespaces.
              </span>,
              <span>
                <strong>Class:</strong> A bundle of code that includes methods,
                variables, fields, properties, and constructors. It is a
                user-defined reference data type and serves as a blueprint for
                objects.
              </span>,
              <span>
                <strong>Object:</strong> An instance of a class. A class can be
                instantiated to create objects.
              </span>,
              <span>
                <strong>Method:</strong> A unit of code that can be reused and
                returns a result.
              </span>,
            ]}
          />
        </Section>

        <Section title="Additional Concepts">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <p className="text-gray-700 mb-2">
              Comments are lines in code that are ignored by the compiler,
              usually used for notes.
            </p>
            <List
              items={[
                <span>
                  <code>// Comments</code> → Single Line
                </span>,
                <span>
                  <code>/* Multi Line Comment */</code>
                </span>,
              ]}
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">String Interpolation</h3>
            <p className="text-gray-700 mb-2">
              Use <code>$</code> before the string and wrap variables inside{" "}
              <code>{`{}`}</code>.
            </p>
            <p className="text-gray-700 mb-2">Why use string interpolation:</p>
            <List
              items={[
                "Easier to read – No need for + operators.",
                "Better for long sentences – Avoids confusion.",
                "Works with expressions – You can use calculations inside {}.",
              ]}
            />
            <CodeBlock
              code={`string name = "Hero"; 
// Standard way (Concatenation)
Console.WriteLine("Hello " + name + "!");

// Using String Interpolation (Cleaner way)
Console.WriteLine($"Hello {name}!");`}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Escape Sequences</h3>
            <p className="text-gray-700 mb-2">
              Output/string literals are modified by the usage of escape
              sequences (e.g., <code>\n</code> for new line, <code>@</code> to
              ignore escape sequences).
            </p>
            <p className="text-gray-700">
              Check wiki for all escape sequences.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default CSharpFundamentals;
