import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const List = ({ items, ordered = false }) => {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag
      className={`${ordered ? "list-decimal" : "list-disc"} list-inside`}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
};

const CSharpNotes = () => (
  <div className="p-6 bg-gray-100 text-gray-800">
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Section title="IEnumerable">
        <p>
          IEnumerable is an interface in C# that lets you iterate over a
          collection of items one at a time without storing them all in memory.
          This makes it efficient for handling large data sets.
        </p>
        <h3 className="text-lg font-semibold mt-4">How IEnumerable Works</h3>
        <p>IEnumerable has one method:</p>
        <List items={["GetEnumerator() → Returns an IEnumerator"]} />
        <p>IEnumerator has three key methods:</p>
        <List
          ordered
          items={[
            "Current → Returns the current item.",
            "MoveNext() → Moves to the next item and returns true if there is one, false if there isn’t.",
            "Reset() → Moves back to the start (not commonly used).",
          ]}
        />
        <h3 className="text-lg font-semibold mt-4">Why Use IEnumerable</h3>
        <List
          items={[
            "Lazy Evaluation: Processes items one at a time when needed, instead of loading everything into memory.",
            "Better Performance: Ideal for large datasets, where storing all values at once is inefficient.",
            "Forward-Only Access: You can only move forward, not backward.",
          ]}
        />
        <h3 className="text-lg font-semibold mt-4">When to Use IEnumerable</h3>
        <List
          items={[
            "When only reading data (e.g., looping through a list).",
            "When dealing with large collections to avoid memory issues.",
            "When forward-only iteration is needed.",
          ]}
        />
      </Section>

      <Section title="Enums">
        <p>
          An enum (short for enumeration) is a special value type in C# that
          lets you define a set of named constants. Use enums when values are
          fixed and do not change (e.g., days of the week, status codes,
          directions, etc.)
        </p>
        <h3 className="text-lg font-semibold mt-4">Example</h3>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            enum daysofweek{" "}
            {"{Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}"}
          </code>
        </pre>
        <p>
          To access, use <code>daysofweek.Monday</code> etc.
        </p>
        <h3 className="text-lg font-semibold mt-4">Key Points:</h3>
        <List
          items={[
            "Enum is a value type that represents fixed constant values.",
            "Default values start at 0 unless explicitly defined.",
            "Casting is required when converting between enums and other types.",
            "Enums are strongly typed and increase code readability.",
            "[Flags] attribute allows enums to act as bit fields (useful for permissions).",
            "Enums help make your code more readable, maintainable, and error-free.",
          ]}
        />
      </Section>

      <Section title="Generics">
        <p>
          Generics let you write code that works with any data type, without
          being tied to a specific one. You can define classes, methods, lists,
          and fields that accept any data type as a parameter. The type is
          specified when you call or instantiate the class or method.
        </p>
        <h3 className="text-lg font-semibold mt-4">Why Use Generics?</h3>
        <List
          items={[
            "Generics make your code more flexible and reusable. You do not need to write the same logic for different data types.",
            "They react based on the type you provide, making it easier to work with different kinds of data.",
          ]}
        />
      </Section>
    </div>
  </div>
);

export default CSharpNotes;
