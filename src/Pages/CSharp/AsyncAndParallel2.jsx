import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <>
    <h3 className="text-lg font-semibold mt-4">{title}</h3>
    {children}
  </>
);

const List = ({ items }) => (
  <ul className="list-disc pl-5">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Table = ({ headers, rows }) => (
  <table className="table-auto w-full mt-4">
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

const AsyncAndParallel2 = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Section title="Retrieving Data from Thread">
        <p>
          Use delegates to get data from a thread by implementing a callback
          function.
        </p>
        <List
          items={[
            "Define a delegate that matches the callback method's signature.",
            "Pass the callback method to the thread.",
            "The thread calls the callback method to return data once it finishes its task.",
          ]}
        />
        <SubSection title="Thread.IsAlive">
          <p>Checks if the thread is still running or has stopped.</p>
          <p>
            Returns: true if the thread is running; false if it has finished or
            stopped.
          </p>
        </SubSection>
        <SubSection title="Thread.Priority">
          <p>Sets or gets the thread's scheduling priority.</p>
          <List
            items={[
              "ThreadPriority.Low",
              "ThreadPriority.BelowNormal",
              "ThreadPriority.Normal (default)",
              "ThreadPriority.AboveNormal",
              "ThreadPriority.High",
            ]}
          />
        </SubSection>
        <SubSection title="Thread.Join">
          <p>
            Blocks the calling thread until the thread with the Join method
            finishes.
          </p>
          <List
            items={[
              "Without timeout: Waits indefinitely for the thread to finish.",
              "With timeout: Waits for a specified time (in milliseconds) and returns true if the thread finishes within the timeout; otherwise, false.",
            ]}
          />
        </SubSection>
        <SubSection title="Key Points">
          <List
            items={[
              "Use delegates to get data from threads via callback functions.",
              "Use Thread.IsAlive to check if a thread is still running.",
              "Adjust Thread.Priority to control the thread's scheduling priority.",
              "Use Thread.Join to synchronize threads when their outputs depend on each other.",
            ]}
          />
        </SubSection>
      </Section>

      <Section title="Protecting Shared Resources">
        <p>
          When multiple threads access shared resources, inconsistency can occur
          if the resources are not protected. Use synchronization mechanisms to
          ensure thread safety.
        </p>
        <SubSection title="Synchronization Mechanisms">
          <SubSection title="Interlocked Class">
            <p>
              Provides atomic operations for simple variables (e.g.,
              incrementing a counter).
            </p>
            <List
              items={[
                "Advantages: Better performance than locks for simple operations.",
                "Limitations: Limited to basic operations like increment, decrement, and exchange.",
              ]}
            />
          </SubSection>
          <SubSection title="Lock Statement">
            <p>Ensures only one thread can access a code block at a time.</p>
            <p>
              Use Case: Simple and effective for most synchronization needs.
            </p>
          </SubSection>
          <SubSection title="Monitor Class">
            <p>Provides more control over locking than the lock statement.</p>
            <List
              items={[
                "Enter and Exit: Acquire and release locks.",
                "TryEnter: Attempts to acquire a lock with a timeout.",
                "Wait: Releases the lock and waits for a signal.",
                "Pulse and PulseAll: Signal waiting threads.",
                "Use Case: When you need advanced synchronization features.",
              ]}
            />
          </SubSection>
          <SubSection title="Mutex">
            <p>
              A synchronization primitive that allows only one thread to access
              a resource at a time.
            </p>
            <p>For cross-process synchronization.</p>
          </SubSection>
          <SubSection title="Semaphore">
            <p>
              Limits the number of threads that can access a resource
              simultaneously.
            </p>
            <p>
              Use Case: When you need to control access to a resource for a
              limited number of threads.
            </p>
          </SubSection>
        </SubSection>
      </Section>

      <Section title="ManualResetEvent and AutoResetEvent">
        <SubSection title="ManualResetEvent">
          <p>Acts like a gate that stays open once signaled.</p>
          <List
            items={[
              "Set: Opens the gate, allowing all waiting threads to proceed.",
              "Reset: Closes the gate.",
              "WaitOne: Blocks the thread until the gate is opened.",
              "Use Case: When you want to signal multiple threads at once.",
            ]}
          />
        </SubSection>
        <SubSection title="AutoResetEvent">
          <p>Acts like a gate that opens for one thread at a time.</p>
          <List
            items={[
              "Set: Opens the gate for one waiting thread.",
              "WaitOne: Blocks the thread until the gate is opened.",
              "Use Case: When you want to signal one thread at a time.",
            ]}
          />
        </SubSection>
        <SubSection title="Example Scenario">
          <p>File Reader and Writer:</p>
          <p>
            Use ManualResetEvent or AutoResetEvent to ensure only one thread
            (reader or writer) accesses the file at a time.
          </p>
        </SubSection>
        <SubSection title="Deadlock Resolution">
          <p>
            Deadlocks occur when threads wait indefinitely for resources held by
            each other.
          </p>
          <List
            items={[
              "Lock Ordering: Always acquire locks in a consistent order.",
              "Timeout: Use Monitor.TryEnter or Mutex.WaitOne with a timeout to avoid indefinite waiting.",
              "Avoid Nested Locks: Minimize locking multiple resources simultaneously.",
            ]}
          />
        </SubSection>
        <SubSection title="Performance Considerations">
          <List
            items={[
              "Processor Count: Use Environment.ProcessorCount to determine the number of CPU cores.",
              "Parallelization: On a single-core machine, threads share the CPU, leading to context switching overhead. On a multi-core machine, threads can run in parallel, improving performance.",
            ]}
          />
        </SubSection>
        <SubSection title="Summary">
          <List
            items={[
              "Use Interlocked for simple atomic operations.",
              "Use Lock for basic synchronization.",
              "Use Monitor for advanced synchronization features.",
              "Use Mutex for cross-process synchronization.",
              "Use Semaphore to limit concurrent access to a resource.",
              "Use ManualResetEvent and AutoResetEvent for thread signaling.",
              "Prevent deadlocks by following consistent locking practices.",
            ]}
          />
        </SubSection>
      </Section>

      <Section title="Thread vs Task">
        <SubSection title="Thread">
          <p>
            A low-level way to run code in parallel. It directly represents an
            operating system thread.
          </p>
        </SubSection>
        <SubSection title="Task">
          <p>
            A higher-level abstraction for running code asynchronously or in
            parallel. It uses threads from the thread pool but simplifies the
            process.
          </p>
        </SubSection>
        <Table
          headers={["Feature", "Thread", "Task"]}
          rows={[
            [
              "Level of Abstraction",
              "Low-level (directly represents an OS thread). You have to manage the thread lifecycle (starting, stopping, etc.).",
              "High-level (abstracts thread management). The system manages the underlying threads for you.",
            ],
            [
              "Resource Usage",
              "Consumes significant resources (memory, CPU). Creating too many threads can overload the system.",
              "Uses threads from the thread pool, making it more efficient. This makes tasks more efficient for short-lived operations.",
            ],
            [
              "Control",
              "Full control over thread lifecycle (start, stop, priority, etc.).",
              "Limited control over the underlying thread, but easier to use.",
            ],
            [
              "Use Cases",
              "Best for long-running operations requiring fine-grained control.",
              "Best for short-lived, asynchronous operations or parallel tasks.",
            ],
            [
              "Return Values",
              "Does not return a value.",
              "Can return a result and provide status (e.g., completed, cancelled).",
            ],
            [
              "Cancellation",
              "Cancelling a thread is complex and not recommended.",
              "Supports easy cancellation using Cancellation Token.",
            ],
            [
              "Multiple Operations",
              "A thread can only run one task at a time.",
              "A task can represent multiple operations or be part of a larger workflow.",
            ],
            [
              "Thread Pool Integration",
              "Not tied to the thread pool. Threads are created and managed manually.",
              "Automatically uses threads from the thread pool. Threads are reused.",
            ],
          ]}
        />
        <SubSection title="Example Scenarios">
          <List
            items={[
              "Thread: Long-running background processes. Complex operations requiring fine-tuning.",
              "Task: Fetching data asynchronously. Running multiple small tasks in parallel.",
            ]}
          />
        </SubSection>
        <SubSection title="When to Use What">
          <List
            items={[
              "Use Thread when you need full control over the thread or are dealing with long-running operations.",
              "Use Task when you want to run short-lived, asynchronous operations, need to return a result or check the status of the operation, want to cancel operations easily, or are working with the thread pool for better resource management.",
            ]}
          />
        </SubSection>
      </Section>
    </div>
  );
};

export default AsyncAndParallel2;
