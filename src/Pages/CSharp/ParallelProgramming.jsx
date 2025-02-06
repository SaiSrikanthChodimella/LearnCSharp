import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
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
            Parallel programming is about dividing a task into smaller units and
            executing them simultaneously across multiple CPU cores.
          </p>
          <p>It is not the same as asynchronous programming:</p>
          <ul className="list-disc list-inside">
            <li>
              Parallel Programming: Requires multiple CPU cores to execute tasks
              simultaneously.
            </li>
            <li>
              Asynchronous Programming: Can run on a single CPU core by freeing
              up threads during waiting periods (e.g., I/O operations).
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "When to Use Parallel Programming",
      content: (
        <>
          <p>Use parallel programming for CPU-intensive tasks such as:</p>
          <ul className="list-disc list-inside">
            <li>Video processing.</li>
            <li>Complex algorithms.</li>
            <li>Data processing or transformations.</li>
            <li>
              It is not typically needed for web servers because the scheduler
              automatically distributes requests across threads and CPU cores.
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
            What it is: Splitting a large dataset into smaller chunks and
            processing them in parallel.
          </p>
          <p>
            How it works: Each chunk is processed by a separate thread running
            on a different CPU core.
          </p>
          <p>Tools in .NET:</p>
          <ul className="list-disc list-inside">
            <li>Parallel.For: Executes a loop in parallel.</li>
            <li>Parallel.ForEach: Iterates over a collection in parallel.</li>
          </ul>
          <h3 className="text-lg font-semibold">2. Task Parallelism</h3>
          <p>
            What it is: Executing multiple tasks (methods or functions) in
            parallel.
          </p>
          <p>How it works: Each task runs on a separate thread.</p>
          <p>Tools in .NET:</p>
          <ul className="list-disc list-inside">
            <li>Parallel.Invoke: Executes multiple actions in parallel.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Parallel.For and Parallel.ForEach",
      content: (
        <>
          <p>
            Parallel.For: Replaces a standard for loop with a parallel version.
          </p>
          <p>
            Parallel.ForEach: Replaces a standard foreach loop with a parallel
            version.
          </p>
          <p>Key Features:</p>
          <ul className="list-disc list-inside">
            <li>
              Non-Sequential Execution: Unlike regular loops, these methods run
              iterations on multiple threads, so the order of execution is not
              guaranteed.
            </li>
            <li>
              Use the ParallelOptions class to set the MaxDegreeOfParallelism
              (maximum number of threads to use).To have control over
              Parallelism
            </li>
          </ul>
          <p>Example:</p>
          <CodeBlock
            code={`var options = new ParallelOptions { MaxDegreeOfParallelism = 4 };
Parallel.For(0, 100, options, i => { /* Your code */ });`}
          />
        </>
      ),
    },
    {
      title: "Breaking Out of Loops",
      content: (
        <>
          <p>
            Use ParallelLoopState.Break() to stop further iterations after the
            current one.
          </p>
          <p>Use ParallelLoopState.Stop() to terminate the loop immediately.</p>
          <p>Example:</p>
          <CodeBlock
            code={`Parallel.For(0, 10, i => 
{
    Console.WriteLine($"Iteration {i} on thread {Thread.CurrentThread.ManagedThreadId}");
});`}
          />
        </>
      ),
    },
    {
      title: "Task Parallel Library (TPL)",
      content: (
        <>
          <p>
            A set of APIs in the System.Threading and System.Threading.Tasks
            namespaces that simplifies parallelism and concurrency by
            abstracting low-level thread management.
          </p>
          <p>Key Features:</p>
          <ul className="list-disc list-inside">
            <li>
              Encapsulates Multi-Core Execution: Automatically distributes tasks
              across CPU cores.
            </li>
            <li>
              High-Level Abstractions: Provides easy-to-use methods like
              Parallel.For, Parallel.ForEach, and Parallel.Invoke.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Parallel.Invoke",
      content: (
        <>
          <p>
            Executes multiple actions (methods or delegates) in parallel and
            each action runs on a separate thread.
          </p>
          <p>Syntax:</p>
          <CodeBlock
            code={`Parallel.Invoke(
    () => Method1(),
    () => Method2(),
    () => Method3()
);`}
          />
          <p>Control Over Parallelism:</p>
          <p>
            You can pass ParallelOptions to limit the number of threads used:
          </p>
          <CodeBlock
            code={`var options = new ParallelOptions { MaxDegreeOfParallelism = 2 };
Parallel.Invoke(options, Method1, Method2, Method3);`}
          />
        </>
      ),
    },
    {
      title: "Parallel LINQ (PLINQ)",
      content: (
        <>
          <p>
            An extension of LINQ (Language Integrated Query) that enables
            parallel execution of queries.
          </p>
          <p>Add .AsParallel() to your LINQ query to enable parallelism.</p>
          <p>
            Use .WithDegreeOfParallelism() to limit the number of threads used.
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
            Avoid Over-Parallelization: Creating too many threads can lead to
            thread contention and performance degradation. Use
            MaxDegreeOfParallelism to limit the number of threads.
          </li>
          <li>
            Use for CPU-Intensive Tasks: Parallel programming is ideal for tasks
            that require heavy computation. Avoid using it for I/O-bound tasks
            (use asynchronous programming instead).
          </li>
          <li>
            Ensure Thread Safety: Use synchronization mechanisms like locks or
            concurrent collections to avoid race conditions.
          </li>
          <li>
            Test and Measure: Parallel programming can introduce complexity and
            overhead. Always test and measure performance to ensure it provides
            a benefit.
          </li>
        </ul>
      ),
    },
    {
      title: "Summary",
      content: (
        <ul className="list-disc list-inside">
          <li>
            Parallel Programming is about executing tasks simultaneously across
            multiple CPU cores.
          </li>
          <li>
            Use Parallel.For, Parallel.ForEach, and Parallel.Invoke for data and
            task parallelism.
          </li>
          <li>
            The Task Parallel Library (TPL) simplifies parallelism by
            abstracting low-level thread management.
          </li>
          <li>PLINQ enables parallel execution of LINQ queries.</li>
          <li>
            Always control the degree of parallelism and ensure thread safety
            for optimal performance.
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
