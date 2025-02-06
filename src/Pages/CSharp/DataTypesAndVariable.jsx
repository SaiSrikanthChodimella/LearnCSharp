import React from "react";

const dataTypes = {
  valueTypes: [
    {
      type: "int",
      description: "Stores whole numbers",
      example: "int num = 10;",
    },
    {
      type: "double",
      description: "Stores decimal numbers",
      example: "double pi = 3.14;",
    },
    {
      type: "char",
      description: "Stores a single character",
      example: "char letter = 'A';",
    },
    {
      type: "bool",
      description: "Stores true/false values",
      example: "bool isCSharpFun = true;",
    },
    {
      type: "float",
      description: "Stores small floating-point numbers",
      example: "float value = 3.5f;",
    },
    {
      type: "long",
      description: "Stores large whole numbers",
      example: "long bigNumber = 9876543210;",
    },
  ],
  referenceTypes: [
    {
      type: "string",
      description: "Stores a sequence of characters",
      example: 'string name = "John";',
    },
    {
      type: "object",
      description: "Can store any data type",
      example: "object obj = 10;",
    },
    {
      type: "dynamic",
      description: "Can change type at runtime",
      example: 'dynamic data = "Hello"; data = 10;',
    },
  ],
};

const Table = ({ data }) => (
  <table className="w-full mb-4 border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 border border-gray-300">Data Type</th>
        <th className="px-4 py-2 border border-gray-300">Description</th>
        <th className="px-4 py-2 border border-gray-300">Example</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="odd:bg-white even:bg-gray-100">
          <td className="border px-4 py-2">{item.type}</td>
          <td className="border px-4 py-2">{item.description}</td>
          <td className="border px-4 py-2">{item.example}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const InfoBox = ({ children }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">{children}</div>
);

const CodeBlock = ({ children }) => (
  <pre className="bg-gray-100 p-4 rounded mt-2">{children}</pre>
);

const DataTypesAndVariables = () => (
  <div className="p-6 bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">Data Types and Variables</h2>
    <p className="mb-4">
      C# has different data types to store various kinds of data.
    </p>

    <Section title="Value Types (Stored in Stack)">
      <Table data={dataTypes.valueTypes} />
    </Section>

    <Section title="Reference Types (Stored in Heap)">
      <Table data={dataTypes.referenceTypes} />
    </Section>

    <InfoBox>
      <Section title="Variables and Constants">
        <p className="mb-4">
          Variables store data values and their values can change, but not the
          type.
        </p>
        <p className="mb-4">
          Constants (const): Their values remain the same throughout the
          program.
        </p>
      </Section>
    </InfoBox>

    <InfoBox>
      <Section title="Memory: Stack and Heap">
        <p className="mb-2">
          Reference types are stored in the Heap and Value types are stored in
          the Stack. Reference variables (which hold the address of the actual
          object) are stored in the Stack, while the actual object is inside the
          Heap.
        </p>
        <p className="mb-2">Destruction of variables:</p>
        <ul className="list-disc list-inside mb-2">
          <li>
            When out of scope, the stack data and reference variable are
            automatically destroyed.
          </li>
          <li>
            The actual object is destroyed by the Garbage Collector (when the GC
            looks at the heap and sees that there is no pointer to the allocated
            memory, it destroys it).
          </li>
        </ul>
      </Section>
    </InfoBox>

    <InfoBox>
      <Section title="The var Keyword in C#">
        <p className="text-gray-700 leading-relaxed mb-4">
          The var keyword lets you declare a variable without specifying its
          type. The compiler figures out the type based on the value you assign.
          This makes things easy but it's only limited to local scope. Use var
          when the type is obvious or when working with complex types like LINQ
          or anonymous objects.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For example:
          <CodeBlock>
            var number = 10; // Compiler knows it's an 'int' <br />
            var name = "John"; // Compiler knows it's a 'string'
          </CodeBlock>
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once the type is set, you <strong>cannot</strong> change it. For
          example:
          <CodeBlock>
            var number = 10; <br />
            number = "Hello"; // Error! Can't change to a string
          </CodeBlock>
        </p>
      </Section>
    </InfoBox>
  </div>
);

export default DataTypesAndVariables;
