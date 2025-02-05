import React from "react";

const TypeCasting = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Type Casting</h2>
        <p>
          Type casting means converting a value from one data type to another.
          There are two types of type casting:
        </p>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">
            1. Implicit Casting (Automatic Conversion)
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Happens automatically when converting a smaller data type to a
              larger one.
            </li>
            <li>No data is lost.</li>
            <li>
              <code>int i = 50;</code>
            </li>
            <li>
              <code>long j = i; // Implicit casting from int to long</code>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">
            2. Explicit Casting (Manual Conversion)
          </h3>
          <ul className="list-disc list-inside">
            <li>Requires a cast operator or helper methods.</li>
            <li>Used when converting a larger data type to a smaller one.</li>
            <li>May result in data loss.</li>
            <li>
              <code>float f = 50.5f;</code>
            </li>
            <li>
              <code>int i = (int)f; // Using cast operator (keyword)</code>
            </li>
            <li>
              <code>int j = Convert.ToInt32(f); // Using helper method</code>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Boxing and Unboxing</h2>
        <p>
          Boxing and unboxing deal with converting between value types and
          reference types.
        </p>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">
            1. Boxing (Value Type → Reference Type)
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Automatically converts a value type (like int) into an object.
            </li>
            <li>
              <code>int i = 10;</code>
            </li>
            <li>
              <code>object o = i; // Boxing</code>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">
            2. Unboxing (Reference Type → Value Type)
          </h3>
          <ul className="list-disc list-inside">
            <li>Converts an object back into a value type.</li>
            <li>Must be done explicitly.</li>
            <li>
              <code>object o = 123;</code>
            </li>
            <li>
              <code>int i = (int)o; // Unboxing</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TypeCasting;
