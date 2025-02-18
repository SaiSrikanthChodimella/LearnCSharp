import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mt-2">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="list-disc list-inside">{children}</ul>
  </div>
);

const TypeCasting = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <Section title="Type Casting">
          <p>
            Type casting is the process of converting a value from one data type
            to another. There are two types:
          </p>
          <SubSection title="1. Implicit Casting (Automatic Conversion)">
            <li>
              Happens automatically when converting a smaller data type to a
              larger one.
            </li>
            <li>There is no loss of data.</li>
            <li>
              <code>int i = 50;</code>
            </li>
            <li>
              <code>long j = i; // Automatically converts int to long</code>
            </li>
          </SubSection>
          <SubSection title="2. Explicit Casting (Manual Conversion)">
            <li>Requires a cast operator or helper methods.</li>
            <li>Used when converting a larger data type to a smaller one.</li>
            <li>May result in data loss.</li>
            <li>
              <code>float f = 50.5f;</code>
            </li>
            <li>
              <code>int i = (int)f; // Using a cast operator</code>
            </li>
            <li>
              <code>int j = Convert.ToInt32(f); // Using a helper method</code>
            </li>
          </SubSection>
        </Section>

        <Section title="Boxing and Unboxing">
          <p>
            Boxing and unboxing involve converting between value types and
            reference types.
          </p>
          <SubSection title="1. Boxing (Value Type → Reference Type)">
            <li>
              Automatically converts a value type (e.g., int) into an object.
            </li>
            <li>
              <code>int i = 10;</code>
            </li>
            <li>
              <code>object o = i; // Boxing</code>
            </li>
          </SubSection>
          <SubSection title="2. Unboxing (Reference Type → Value Type)">
            <li>Converts an object back into a value type.</li>
            <li>Must be done explicitly.</li>
            <li>
              <code>object o = 123;</code>
            </li>
            <li>
              <code>int i = (int)o; // Unboxing</code>
            </li>
          </SubSection>
        </Section>
      </div>
    </div>
  );
};

export default TypeCasting;
