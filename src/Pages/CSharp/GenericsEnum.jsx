import React from "react";

const CSharpNotes = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">IEnumerable</h2>
        <p>
          IEnumerable is an interface in C# that allows iteration over a
          collection of items one at a time without storing all of them in
          memory. This makes it efficient for handling large data sets.
        </p>
        <h3 className="text-lg font-semibold mt-4">How IEnumerable Works</h3>
        <p>IEnumerable contains only one method:</p>
        <ul className="list-disc list-inside">
          <li>GetEnumerator() → Returns an IEnumerator</li>
        </ul>
        <p>IEnumerator has three important methods:</p>
        <ol className="list-decimal list-inside">
          <li>Current → Returns the current item.</li>
          <li>
            MoveNext() → Moves to the next item and returns true if there is
            one, false if there isn’t.
          </li>
          <li>Reset() → Moves back to the start (not commonly used).</li>
        </ol>
        <h3 className="text-lg font-semibold mt-4">Why we use IEnumerable</h3>
        <ul className="list-disc list-inside">
          <li>
            Lazy Evaluation: Items are processed one at a time when needed,
            instead of loading everything into memory.
          </li>
          <li>
            Better Performance: Suitable for large datasets, where storing all
            values at once is inefficient.
          </li>
          <li>Forward-Only Access: You can only move forward, not backward.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">When to Use IEnumerable</h3>
        <ul className="list-disc list-inside">
          <li>When only reading data (e.g., looping through a list).</li>
          <li>When dealing with large collections to avoid memory issues.</li>
          <li>When forward-only iteration is needed.</li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Enums</h2>
        <p>
          An enum (short for enumeration) is a special value type in C# that
          allows us to define a set of named constants. We use enums when values
          are fixed and do not change (e.g., days of the week, status codes,
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
          To access we use <code>daysofweek.Monday</code> etc.
        </p>
        <h3 className="text-lg font-semibold mt-4">Key Points:</h3>
        <ul className="list-disc list-inside">
          <li>Enum is a value type that represents fixed constant values.</li>
          <li>Default values start at 0 unless explicitly defined.</li>
          <li>
            Casting is required when converting between enums and other types.
          </li>
          <li>Enums are strongly typed and increase code readability.</li>
          <li>
            <code>[Flags]</code> attribute allows enums to act as bit fields
            (useful for permissions).
          </li>
          <li>
            Enums help make your code more readable, maintainable, and
            error-free.
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Generics</h2>
        <p>
          Generics allow you to write code that works with any data type,
          without being tied to a specific one. You can define classes, methods,
          lists, and fields that accept any data type as a parameter. The type
          is specified when you call or instantiate the class or method.
        </p>
        <h3 className="text-lg font-semibold mt-4">Why Use Generics?</h3>
        <ul className="list-disc list-inside">
          <li>
            Generics make your code more flexible and reusable. You do not need
            to write the same logic for different data types.
          </li>
          <li>
            They react based on the type you provide, making it easier to work
            with different kinds of data.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSharpNotes;
