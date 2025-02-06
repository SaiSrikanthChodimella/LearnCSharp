import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const FAQ2 = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section title="Closures">
          <ul className="list-disc pl-5">
            <li>Occurs when writing higher-order functions</li>
            <li>
              Functions that return another function are called higher-order
              functions
            </li>
            <li>
              When returning a function, it might have a variable that is
              short-lived because it is on the stack. During runtime, this can
              cause an exception because the variable is destroyed as it is out
              of scope.
            </li>
            <li>
              To handle this, C# binds the lifetime of the variable to the
              function by capturing the variable (promoting it from stack to
              heap). In the background, it's like creating a class with a field
              for the stack variable and a method that returns the function,
              hence promoting it to the heap.
            </li>
          </ul>
        </Section>

        <Section title="C# Version History">
          <p>(New features added in each iteration)</p>
          <h3 className="text-lg font-semibold mt-2">
            Top Level Statements in C# 9 and above
          </h3>
          <ul className="list-disc pl-5">
            <li>Writing programs without Main statements</li>
          </ul>
        </Section>

        <Section title="What is Dynamic">
          <p>(Too complicated and out of scope for now)</p>
          <ul className="list-disc pl-5">
            <li>Use Dynamic to change the data type at runtime</li>
            <li>
              It acts as a bridge between statically typed languages (C#) and
              dynamically typed languages (use only if necessary)
            </li>
            <li>EdgeJs Library is one way to do it</li>
            <li>
              COM (Component Object Model) and OLE (Object Linking and
              Embedding) are reasons for its existence
            </li>
          </ul>
        </Section>

        <Section title="Why Override ToString() Method">
          <ul className="list-disc pl-5">
            <li>
              Calling ToString() on a base class (System.Object) generates
              namespace.Class as output. To get a meaningful string, we override
              it as per our requirement.
            </li>
          </ul>
        </Section>

        <Section title="Why Override Equals() Method">
          <ul className="list-disc pl-5">
            <li>For value types, it works as intended</li>
            <li>
              For reference types, while checking equality, we have two things:
              <ul className="list-disc pl-5">
                <li>1) Value equality</li>
                <li>
                  2) Reference equality (object reference variables pointing to
                  the same object)
                </li>
              </ul>
            </li>
            <li>== checks reference equality</li>
            <li>.Equals() checks value equality</li>
            <li>
              Good practice to override the Hashcode when overriding Equals()
            </li>
          </ul>
        </Section>

        <Section title="Convert.ToString() vs .ToString()">
          <ul className="list-disc pl-5">
            <li>
              ToString gives string representation and comes from System.Object
              base class
            </li>
            <li>Convert.ToString() converts null to String.Empty</li>
            <li>.ToString throws an exception when the object is null</li>
            <li>Both return the same value, with no performance difference</li>
          </ul>
        </Section>

        <Section title="StringBuilder vs System.String">
          <p>
            StringBuilders are mutable, and System.Strings are immutable. For
            string manipulation, it's better to use StringBuilder.
          </p>
          <ul className="list-disc pl-5">
            <li>
              Immutable means unchangeable once created, and mutable is the
              opposite.
            </li>
          </ul>
          <p>
            With System.String, every time you perform an operation like
            concatenation, a new object is created, and the reference variable
            points to the new object. Previous objects remain in the heap as
            orphaned objects, leading to memory constraints.
          </p>
          <p>
            To use StringBuilder, create an object of StringBuilder and use that
            object (e.g., for concatenation, use the .Append() method).
          </p>
          <p>System.String is in the System namespace</p>
          <p>StringBuilder is in the System.Text namespace</p>
        </Section>

        <Section title="Class vs Record vs Struct vs Record Struct">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Class</th>
                <th>Record</th>
                <th>Struct</th>
                <th>Record Struct</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inheritance</td>
                <td>Interface, Class</td>
                <td>Interface</td>
                <td>Interface</td>
              </tr>
              <tr>
                <td>Memory Allocation</td>
                <td>Heap</td>
                <td>Stack</td>
                <td>Stack</td>
              </tr>
              <tr>
                <td>Methods</td>
                <td colSpan="3">All can implement methods</td>
              </tr>
              <tr>
                <td>Mutability</td>
                <td>Mutable</td>
                <td>Immutable</td>
                <td>Immutable</td>
              </tr>
              <tr>
                <td>Equality Operator</td>
                <td>Compares using reference equality</td>
                <td colSpan="2">Value equality by default</td>
              </tr>
              <tr>
                <td>Use Case</td>
                <td>Handles complex objects better</td>
                <td>Small, lightweight objects on the stack</td>
                <td>
                  Ideal for data structures that benefit from staying on the
                  stack
                </td>
              </tr>
              <tr>
                <td>Constructor</td>
                <td colSpan="3">Multiple constructors</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Squiggly Lines while Coding">
          <ul className="list-disc pl-5">
            <li>Red squiggly line indicates an error</li>
            <li>Green squiggly line indicates a warning</li>
          </ul>
        </Section>

        <Section title="Partial Classes">
          <p>
            Use the partial modifier to make a class partial (the same applies
            to structs and interfaces).
          </p>
          <p>What does that mean:</p>
          <ul className="list-disc pl-5">
            <li>
              Two or more partial classes combine to form a normal class, and
              standard rules apply (if either is marked abstract or sealed, the
              entire combined class has that modifier applied).
            </li>
          </ul>
          <p>Why use partial classes:</p>
          <ul className="list-disc pl-5">
            <li>
              To split a class into multiple physical files for better
              organization.
            </li>
          </ul>
          <p>
            Syntax: partial ClassA and partial class A (in different files).
            Both should have the same access specifier.
          </p>
          <p>
            Example: When we have lots of auto-generated code, mark it as
            partial so that the auto-generated code is in one physical file and
            our manual code is in a separate file.
          </p>
        </Section>

        <Section title="Partial Methods">
          <p>Similar to partial classes</p>
          <ul className="list-disc pl-5">
            <li>
              In one partial class, we have the definition, and in another, we
              have the implementation
            </li>
            <li>
              If there is no implementation, the compiler removes all calls to
              that method
            </li>
            <li>
              They are private by default and cannot have virtual, abstract,
              override, new, sealed, or extern modifiers
            </li>
            <li>Return type must be void</li>
            <li>
              If both declaration and implementation are provided at the same
              time, a compilation error occurs
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default FAQ2;
