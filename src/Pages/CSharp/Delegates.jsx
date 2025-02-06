import React from "react";

const Delegates = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-bold mb-2">Delegates</h2>
        <p>
          A delegate is a type-safe pointer to a method that allows you to call
          a method indirectly at runtime. You can think of it as a container for
          functions.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-lg font-bold mb-2">Key Points</h3>
        <ul className="list-disc list-inside">
          <li>Used for callbacks (communication between two components).</li>
          <li>A reference type that holds the address of a method.</li>
          <li>Helps decouple code (avoids hardcoded logic).</li>
          <li>Lambda expressions are built on delegates.</li>
          <li>Signature of the delegate must match the method it points to.</li>
          <li>
            Acts like a class—you create an instance of a delegate and pass it
            around.
          </li>
          <li>
            Has similar Syntax as method but has as delegate keyword as modifier
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-lg font-bold mb-2">Delegates and Event Handling</h3>
        <p>
          Delegates are heavily used in event handling to create loosely coupled
          applications.
        </p>
        <p>Event handling works like this:</p>
        <ul className="list-disc list-inside">
          <li>A publisher (event sender) raises an event.</li>
          <li>
            A subscriber (event receiver) listens to the event and reacts.
          </li>
          <li>
            The publisher does not need to know about subscribers, making the
            system flexible.
          </li>
        </ul>
        <p>
          Idea is to hook receivers to respective publisher, and publishers have
          no information on subscribers
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-lg font-bold mb-2">Anonymous Methods</h3>
        <p>
          Anonymous methods allow you to create inline methods without
          explicitly defining a new function.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-lg font-bold mb-2">Multicast Delegate</h3>
        <p>
          A multicast delegate can hold multiple methods and execute them in
          order.
        </p>
        <p>Key Points:</p>
        <ul className="list-disc list-inside">
          <li>Use += to add methods.</li>
          <li>Use -= to remove methods.</li>
          <li>
            If the delegate has a return type, it returns the result of the last
            method in the list.
          </li>
        </ul>
        <p>
          The functions are invoked as per invocation List Order (that order is
          defined by in which order you register them)
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-lg font-bold mb-2">Func, Action, Predicate</h3>
        <p>
          Predefined delegates to avoid creating custom delegate types and can
          have 0 to 16 parameters.
        </p>
        <ul className="list-disc list-inside">
          <li>Action&lt;T&gt; (No Return Type) - Always returns void.</li>
          <li>
            Func&lt;T, TResult&gt; (Returns a Value) - The last type is the
            return type.
          </li>
          <li>
            Predicate&lt;T&gt; (Returns bool) - Used when you need to check a
            condition and return true or false
          </li>
        </ul>
        <p>LINQ is entirely based on Actions, Func and Predicates</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-lg font-bold mb-2">Summary of Delegates</h3>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Concept</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Delegate</td>
              <td className="border px-4 py-2">
                Type-safe pointer to a method.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Anonymous Methods</td>
              <td className="border px-4 py-2">
                Inline methods using delegate
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Multicast Delegate</td>
              <td className="border px-4 py-2">
                Delegate that calls multiple methods (+=, -=).
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Events</td>
              <td className="border px-4 py-2">
                Used for communication between objects (Publisher/Subscriber).
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Func&lt;T&gt;</td>
              <td className="border px-4 py-2">
                Predefined delegate with a return value.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Action&lt;T&gt;</td>
              <td className="border px-4 py-2">
                Predefined delegate without a return value.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Predicate&lt;T&gt;</td>
              <td className="border px-4 py-2">
                Predefined delegate with a bool return value.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Delegates;
