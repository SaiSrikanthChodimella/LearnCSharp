import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const DotNETMemory = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Understanding Memory Management in .NET Performance
        </h1>
        <p className="mb-8">
          .NET automatically manages memory using a Garbage Collector (GC),
          which removes objects that are no longer in use. This helps free up
          memory for new tasks. GC is part of CLR (Ref Link)
        </p>

        {/* Stack and Heap Memory Section */}
        <Section title="Stack and Heap Memory">
          <p className="mb-4">
            When a .NET application starts, the operating system assigns a chunk
            of memory (virtual memory). This memory is divided into two parts:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Stack – Stores local variables and method calls.</li>
            <li>
              Heap – Stores objects that need to persist beyond a single method
              call.
            </li>
          </ul>
          <p className="mt-4">
            Even though the stack and heap share the same memory space, they
            work differently:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              The Stack is unmanaged – It clears itself when a method finishes.
              This makes it very fast.
            </li>
            <li>
              The Heap is managed by the Garbage Collector – It checks which
              objects are still needed and removes unused ones. This makes it
              slower than the stack.
            </li>
            <li>Both Stack and Heap can grow in size.</li>
          </ul>
        </Section>

        {/* How .NET Stores Data Section */}
        <Section title="How .NET Stores Data">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Value types (like <code>int</code>, <code>float</code>,{" "}
              <code>bool</code>, <code>struct</code>) are stored in the stack.
            </li>
            <li>
              Reference types (like <code>class</code>, <code>array</code>,{" "}
              <code>string</code>) are stored in the heap.
            </li>
            <li>
              If a struct has a reference type property, that property is stored
              in the heap, even though the struct itself is in the stack.
            </li>
            <li>
              A class is stored in the heap, but a variable holding its
              reference is in the stack.
            </li>
            <li>
              Value types are stored close together in memory, making them
              faster to access. We can use special attributes to control how
              they are stored.
            </li>
            <li>
              Memory allocation (reserving space) in C# is very fast, but
              freeing up memory (deallocation) takes longer because the Garbage
              Collector has to clean up unused objects.
            </li>
            <li>
              Arrays are reference types, meaning they are stored in the heap.
              However, they can be optimized for better performance.
            </li>
            <li>
              Stack memory is cleared quickly – When a function ends, everything
              above the pointer is removed at once, making it very efficient.
            </li>
            <li>
              Each method call creates a "stack frame", which is added to the
              stack. This happens separately for each thread in the application.
            </li>
          </ul>
        </Section>

        {/* Memory Layout of an Object – Reference Type Section */}
        <Section title="Memory Layout of an Object – Reference Type">
          <p className="mb-4">
            When an object is being created, there are a lot of allocations
            happening.
          </p>
          <h3 className="text-lg font-semibold mb-4">Object Memory Layout</h3>
          <p className="mb-4">When an object is created, it consists of:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Sync Block Index – Used for threading (e.g., locks).</li>
            <li>
              Method Table Pointer – A 4-byte reference to methods of the class.
            </li>
            <li>Base Method Table – Links to parent class methods.</li>
            <li>
              Constructor (ctor) and Destructor (cctor) – Handle object creation
              and cleanup.
            </li>
            <li>Type Object Pointer – Used internally for managing types.</li>
            <li>
              Bare minimum size of a .NET object is 12 Bytes in 32-bit and 24
              bytes in 64-bit.
            </li>
          </ul>
        </Section>

        {/* Why Are Loops and Method Calls Expensive? Section */}
        <Section title="Why Are Loops and Method Calls Expensive?">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Every method call creates a stack frame, which takes time to
              manage.
            </li>
            <li>
              Loops and methods cause frequent memory allocations, increasing
              CPU workload.
            </li>
            <li>
              Procedural programming (sequential execution) is faster because of
              better memory layout.
            </li>
            <li>
              JIT Compiler (Just-In-Time Compiler) optimizes performance during
              execution.
            </li>
          </ul>
        </Section>

        {/* What Are Inline Methods? Section */}
        <Section title="What Are Inline Methods?">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Inlining is when the compiler replaces a method call with the
              actual method code to improve performance.
            </li>
            <li>
              It reduces the overhead of method calls, making execution faster,
              which simplifies memory management in .NET while keeping
              performance in mind.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default DotNETMemory;
