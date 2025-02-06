import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const List = ({ items }) => (
  <ul className="list-disc list-inside">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Table = ({ headers, rows }) => (
  <table className="table-auto w-full">
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="px-4 py-2">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="border px-4 py-2">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const Delegates = () => {
  return (
    <div className="p-4">
      <Section title="Delegates">
        <p>
          A delegate is a type-safe pointer to a method. It allows you to call a
          method indirectly at runtime. Think of it as a container for
          functions.
        </p>
      </Section>
      <Section title="Key Points">
        <List
          items={[
            "Used for callbacks (communication between components).",
            "A reference type that holds a method's address.",
            "Helps decouple code (avoids hardcoded logic).",
            "Lambda expressions are built on delegates.",
            "The delegate's signature must match the method it points to.",
            "Acts like a class—you create an instance of a delegate and pass it around.",
            "Has a similar syntax to a method but uses the delegate keyword as a modifier.",
          ]}
        />
      </Section>

      <Section title="Delegates and Event Handling">
        <p>
          Delegates are heavily used in event handling to create loosely coupled
          applications.
        </p>
        <p>Event handling works like this:</p>
        <List
          items={[
            "A publisher (event sender) raises an event.",
            "A subscriber (event receiver) listens to the event and reacts.",
            "The publisher does not need to know about subscribers, making the system flexible.",
          ]}
        />
        <p>
          The idea is to hook receivers to the publisher, and publishers have no
          information about subscribers.
        </p>
      </Section>

      <Section title="Anonymous Methods">
        <p>
          Anonymous methods allow you to create inline methods without
          explicitly defining a new function.
        </p>
      </Section>

      <Section title="Multicast Delegate">
        <p>
          A multicast delegate can hold multiple methods and execute them in
          order.
        </p>
        <p>Key Points:</p>
        <List
          items={[
            "Use += to add methods.",
            "Use -= to remove methods.",
            "If the delegate has a return type, it returns the result of the last method in the list.",
          ]}
        />
        <p>The functions are invoked in the order they were registered.</p>
      </Section>

      <Section title="Func, Action, Predicate">
        <p>
          Predefined delegates to avoid creating custom delegate types. They can
          have 0 to 16 parameters.
        </p>
        <List
          items={[
            "Action<T> (No Return Type) - Always returns void.",
            "Func<T, TResult> (Returns a Value) - The last type is the return type.",
            "Predicate<T> (Returns bool) - Used when you need to check a condition and return true or false.",
          ]}
        />
        <p>LINQ is entirely based on Actions, Func, and Predicates.</p>
      </Section>

      <Section title="Summary of Delegates">
        <Table
          headers={["Concept", "Description"]}
          rows={[
            ["Delegate", "Type-safe pointer to a method."],
            ["Anonymous Methods", "Inline methods using delegate."],
            [
              "Multicast Delegate",
              "Delegate that calls multiple methods (+=, -=).",
            ],
            [
              "Events",
              "Used for communication between objects (Publisher/Subscriber).",
            ],
            ["Func<T>", "Predefined delegate with a return value."],
            ["Action<T>", "Predefined delegate without a return value."],
            ["Predicate<T>", "Predefined delegate with a bool return value."],
          ]}
        />
      </Section>
    </div>
  );
};

export default Delegates;
