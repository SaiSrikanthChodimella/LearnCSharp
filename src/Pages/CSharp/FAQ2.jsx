import React from "react";

const FAQItem = ({ title, children }) => (
  <div className="p-4 border rounded-lg shadow-md bg-white">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const FAQ2 = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <FAQItem title="Closures">
        <ul className="list-disc pl-5">
          <li>Occurs when we are writing higher order functions</li>
          <li>
            Functions that return another function are called higher order
            functions
          </li>
          <li>
            While returning a function that function might have a variable (that
            is short lived because it is on stack), so during run time we run
            into an exception, cause that variable is destroyed as its out of
            its scope
          </li>
          <li>
            So, to tackle this C# binds the lifetime of the variable to the
            function by capturing the variable (so the variable is promoted from
            stack to heap) – in background it’s like creating a class that has a
            field with stack variable and a method which returns the function,
            hence promoted to heap.
          </li>
        </ul>
      </FAQItem>

      <FAQItem title="C# version History">
        <p>(All new stuff that have been getting added in each iteration)</p>
        <h3 className="text-lg font-semibold mt-2">
          Top Level Statements in C# 9 and above
        </h3>
        <ul className="list-disc pl-5">
          <li>Writing Program without Main Statements</li>
        </ul>
      </FAQItem>

      <FAQItem title="What is Dynamic">
        <p>(To complicated and out of scope for now)</p>
        <ul className="list-disc pl-5">
          <li>
            Use Dynamic to change the data type, at runtime you can do this
          </li>
          <li>
            Is a bridge between Statically typed language (C#) and Dynamically
            Typed Language (and only use this if you have to do this)
          </li>
          <li>EdgeJs Library is one way to do it</li>
          <li>
            COM (Component Object Model) and OLE (Object linking and embedding)
            (Reason that this exists)
          </li>
        </ul>
      </FAQItem>

      <FAQItem title="Why do we Override ToString() Method">
        <ul className="list-disc pl-5">
          <li>
            When we call ToString() Method we actually base class to string (ie
            System.Object). This generates namespace.Class as output but in most
            cases, we would like to get a meaningful string so, we override it
            as per our requirement
          </li>
        </ul>
      </FAQItem>

      <FAQItem title="Why do we Override Equals() Method">
        <ul className="list-disc pl-5">
          <li>For value type it works as intended</li>
          <li>
            For reference type (While checking equality we have 2 things
            <ul className="list-disc pl-5">
              <li>1) value equality</li>
              <li>
                2) reference equality i.e., object reference variables pointing
                to same object(same references))
              </li>
            </ul>
          </li>
          <li>== is reference equality</li>
          <li>.Equals() is value equality comparator</li>
          <li>
            Good Practice to override the Hashcode when overriding Equals()
          </li>
        </ul>
      </FAQItem>

      <FAQItem title="Convert.ToString() vs .ToString()">
        <ul className="list-disc pl-5">
          <li>
            ToString gives string representation and comes from system.Object
            base class
          </li>
          <li>Convert.ToString(), converts null to String.Empty</li>
          <li>So .ToString throws an exception when object is null</li>
          <li>
            Both will return same value, and performance wise no difference
          </li>
        </ul>
      </FAQItem>

      <FAQItem title="String Builder vs System.String">
        <p>
          String Builders are mutable and System.String are immutable, for
          string manipulation it better to use string builder
        </p>
        <ul className="list-disc pl-5">
          <li>
            Immutable means unchangeable once created, and mutable is vice
            versa.
          </li>
        </ul>
        <p>
          So, on System.String every time you make an operation like concat etc
          a new object is created and the reference variable is pointing to that
          new object and previous objects are still present in heap as orphaned
          objects as they are not pointing to any reference variable (Memory
          constraint).
        </p>
        <p>
          To use string builder, we create an object of string builder and use
          that object (Example for concat we use .Append() method).
        </p>
        <p>System.String is in System namespace</p>
        <p>StringBuilder is in System.Text namespace</p>
      </FAQItem>

      <FAQItem title="Class vs Record vs Struct vs Record Struct">
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
              <td colSpan="3">All of them can implement Methods</td>
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
              <td>Complex Objects are better handled here</td>
              <td>Small light weight objects residing on stack</td>
              <td>
                Ideal for data structures when they benefit from staying on
                stack
              </td>
            </tr>
            <tr>
              <td>Constructor</td>
              <td colSpan="3">Multiple constructors</td>
            </tr>
          </tbody>
        </table>
      </FAQItem>

      <FAQItem title="Squiggly Lines while coding">
        <ul className="list-disc pl-5">
          <li>Red squiggly line is Error</li>
          <li>Green squiggly is warning</li>
        </ul>
      </FAQItem>

      <FAQItem title="Partial Classes">
        <p>
          Use Partial modifier to make the class as partial (same properties can
          be applied to structs, interfaces)
        </p>
        <p>What does that mean:</p>
        <ul className="list-disc pl-5">
          <li>
            These two or more partial classes combine to form a normal class and
            standard rules apply (if either is marked abstract or sealed entire
            combined class has that modifier applied).
          </li>
        </ul>
        <p>Why use partial class:</p>
        <ul className="list-disc pl-5">
          <li>
            if we want to split a class (into multiple physical files)
            functionality we can achieve this by partial class.
          </li>
        </ul>
        <p>
          Syntax: partial ClassA and partial class A (in different file). (Both
          should have same access specifier)
        </p>
        <p>
          Example when we have lots of auto generated code mark that as partial
          so that autogenerated code is in one physical file and our manual code
          in separate code
        </p>
      </FAQItem>

      <FAQItem title="Partial Methods">
        <p>Similar to that of partial class</p>
        <ul className="list-disc pl-5">
          <li>
            In one partial class we have definition and in another we have
            implementation
          </li>
          <li>
            So, if we do not have an implementation, the compiler removes all
            the calls to that method.
          </li>
          <li>
            Are private by default and cannot have virtual, abstract, override,
            new, sealed and extern modifiers
          </li>
          <li>Return Type must be only be void</li>
          <li>
            If we implement both declaration and implementation at same time
            then you get compilation error
          </li>
        </ul>
      </FAQItem>
    </div>
  );
};

export default FAQ2;
