import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const CodeBlock = ({ code }) => (
  <pre className="bg-gray-100 p-2 rounded">
    <code>{code}</code>
  </pre>
);

const ParallelProgramming = () => {
  const sections = [
    {
      title: "Introduction",
      content: (
        <>
          <p>
            Parallel programming involves breaking a task into smaller parts and
            executing them simultaneously across multiple CPU cores.
          </p>
          <p>It differs from asynchronous programming in key ways:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Parallel Programming:</strong> Uses multiple CPU cores to
              execute tasks at the same time.
            </li>
            <li>
              <strong>Asynchronous Programming:</strong> Can run on a single CPU
              core by freeing up threads during wait times (e.g., I/O
              operations).
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "When to Use Parallel Programming",
      content: (
        <>
          <p>Parallel programming is ideal for CPU-intensive tasks such as:</p>
          <ul className="list-disc list-inside">
            <li>Video processing</li>
            <li>Complex computations and algorithms</li>
            <li>Large-scale data processing</li>
            <li>
              It is generally unnecessary for web servers since modern
              schedulers distribute requests efficiently across available CPU
              cores.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Key Concepts in Parallel Programming",
      content: (
        <>
          <h3 className="text-lg font-semibold">1. Data Parallelism</h3>
          <p>
            Involves splitting a large dataset into smaller chunks and
            processing them in parallel.
          </p>
          <p>Tools in .NET:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Parallel.For:</strong> Executes a loop in parallel.
            </li>
            <li>
              <strong>Parallel.ForEach:</strong> Iterates over a collection in
              parallel.
            </li>
          </ul>
          <h3 className="text-lg font-semibold">2. Task Parallelism</h3>
          <p>
            Runs multiple tasks (methods or functions) concurrently on separate
            threads.
          </p>
          <p>Tool in .NET:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Parallel.Invoke:</strong> Executes multiple actions
              simultaneously.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Parallel.For and Parallel.ForEach",
      content: (
        <>
          <p>
            These methods replace standard loops to run iterations in parallel
            across multiple CPU cores.
          </p>
          <p>Key features:</p>
          <ul className="list-disc list-inside">
            <li>
              Non-sequential execution: Iterations may complete in any order.
            </li>
            <li>
              Control parallelism with <strong>ParallelOptions</strong> and{" "}
              <strong>MaxDegreeOfParallelism</strong>.
            </li>
          </ul>
          <CodeBlock
            code={`var options = new ParallelOptions { MaxDegreeOfParallelism = 4 };
Parallel.For(0, 100, options, i => { /* Your code */ });`}
          />
        </>
      ),
    },
    {
      title: "Task Parallel Library (TPL)",
      content: (
        <>
          <p>
            The Task Parallel Library (TPL) simplifies parallel programming in
            .NET by handling thread management automatically.
          </p>
          <p>Key features:</p>
          <ul className="list-disc list-inside">
            <li>Distributes tasks efficiently across multiple CPU cores.</li>
            <li>
              Provides high-level APIs like Parallel.For, Parallel.ForEach, and
              Parallel.Invoke.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Parallel LINQ (PLINQ)",
      content: (
        <>
          <p>
            PLINQ extends LINQ with parallel execution capabilities. Adding{" "}
            <strong>.AsParallel()</strong> enables parallel processing.
          </p>
          <p>Example:</p>
          <CodeBlock
            code={`var result = dataSource
    .AsParallel()
    .WithDegreeOfParallelism(4)
    .Where(item => item > 10)
    .Select(item => item * 2);`}
          />
        </>
      ),
    },
    {
      title: "Best Practices for Parallel Programming",
      content: (
        <ul className="list-disc list-inside">
          <li>
            <strong>Limit parallelism:</strong> Excessive threads can degrade
            performance. Use <strong>MaxDegreeOfParallelism</strong> wisely.
          </li>
          <li>
            <strong>Choose parallelism for CPU-bound tasks:</strong> Avoid using
            it for I/O-bound tasks (use asynchronous programming instead).
          </li>
          <li>
            <strong>Ensure thread safety:</strong> Use synchronization
            mechanisms like locks or concurrent collections to prevent race
            conditions.
          </li>
          <li>
            <strong>Test and optimize:</strong> Parallel execution can add
            complexity. Measure performance to confirm actual benefits.
          </li>
        </ul>
      ),
    },
    {
      title: "Summary",
      content: (
        <ul className="list-disc list-inside">
          <li>
            Parallel programming enables simultaneous task execution across
            multiple CPU cores for performance optimization.
          </li>
          <li>
            .NET provides tools like Parallel.For, Parallel.ForEach, and
            Parallel.Invoke for efficient parallel execution.
          </li>
          <li>PLINQ enables parallel processing for LINQ queries.</li>
          <li>
            Always balance parallelism to avoid performance overhead and ensure
            thread safety.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Parallel Programming</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <Section key={index} title={section.title}>
            {section.content}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default ParallelProgramming;
