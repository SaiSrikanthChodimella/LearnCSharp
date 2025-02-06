import React from "react";

const AsyncAndParallel2 = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Retrieving Data from Thread</h2>
        <p>
          Delegates can be used to retrieve data from a thread by implementing a
          callback function.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Define a delegate that matches the signature of the callback method.
          </li>
          <li>Pass the callback method to the thread.</li>
          <li>
            The thread invokes the callback method to return data once it
            completes its task.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">Thread.IsAlive</h3>
        <p>Checks if the thread is still running or has terminated</p>
        <p>
          Returns: true if the thread is alive; false if it has completed or
          terminated.
        </p>
        <h3 className="text-lg font-semibold mt-4">Thread.Priority</h3>
        <p>Sets or gets the scheduling priority of the thread.</p>
        <ul className="list-disc pl-5">
          <li>ThreadPriority.Low</li>
          <li>ThreadPriority.BelowNormal</li>
          <li>ThreadPriority.Normal (default)</li>
          <li>ThreadPriority.AboveNormal</li>
          <li>ThreadPriority.High</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">Thread.Join</h3>
        <p>
          Blocks the calling thread until the thread with the Join method
          completes.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Without timeout: Waits indefinitely for the thread to complete.
          </li>
          <li>
            With timeout: Waits for a specified time (in milliseconds) and
            returns true if the thread completes within the timeout; otherwise,
            false.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">Key Points</h3>
        <ul className="list-disc pl-5">
          <li>
            Use delegates to retrieve data from threads via callback functions.
          </li>
          <li>Use Thread.IsAlive to check if a thread is still running.</li>
          <li>
            Adjust Thread.Priority to control the scheduling priority of
            threads.
          </li>
          <li>
            Use Thread.Join to synchronize threads when their outputs are
            dependent on each other.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Protecting Shared Resources</h2>
        <p>
          When multiple threads access shared resources, inconsistency can occur
          if the resources are not protected. To ensure thread safety, use
          synchronization mechanisms.
        </p>
        <h3 className="text-lg font-semibold mt-4">
          Synchronization Mechanisms
        </h3>
        <h4 className="text-md font-semibold mt-2">Interlocked Class</h4>
        <p>
          Provides atomic operations for simple variables (e.g., incrementing a
          counter).
        </p>
        <ul className="list-disc pl-5">
          <li>
            Advantages: Better performance than locks for simple operations.
          </li>
          <li>
            Limitations: Limited to basic operations like increment, decrement,
            and exchange.
          </li>
        </ul>
        <h4 className="text-md font-semibold mt-2">Lock Statement</h4>
        <p>Ensures only one thread can access a code block at a time.</p>
        <p>Use Case: Simple and effective for most synchronization needs.</p>
        <h4 className="text-md font-semibold mt-2">Monitor Class</h4>
        <p>Provides more control over locking than the lock statement.</p>
        <ul className="list-disc pl-5">
          <li>Enter and Exit: Acquire and release locks.</li>
          <li>TryEnter: Attempts to acquire a lock with a timeout.</li>
          <li>Wait: Releases the lock and waits for a signal.</li>
          <li>Pulse and PulseAll: Signal waiting threads.</li>
          <li>Use Case: When you need advanced synchronization features.</li>
        </ul>
        <h4 className="text-md font-semibold mt-2">Mutex</h4>
        <p>
          A synchronization primitive that allows only one thread to access a
          resource at a time.
        </p>
        <p>For cross-process synchronization.</p>
        <h4 className="text-md font-semibold mt-2">Semaphore</h4>
        <p>
          Limits the number of threads that can access a resource
          simultaneously.
        </p>
        <p>
          When you need to control access to a resource for a limited number of
          threads.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">
          ManualResetEvent and AutoResetEvent
        </h2>
        <h3 className="text-lg font-semibold mt-4">ManualResetEvent</h3>
        <p>Acts like a gate that stays open once signalled.</p>
        <ul className="list-disc pl-5">
          <li>Set: Opens the gate, allowing all waiting threads to proceed.</li>
          <li>Reset: Closes the gate.</li>
          <li>WaitOne: Blocks the thread until the gate is opened.</li>
          <li>Use Case: When you want to signal multiple threads at once.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">AutoResetEvent</h3>
        <p>Acts like a gate that opens for one thread at a time.</p>
        <ul className="list-disc pl-5">
          <li>Set: Opens the gate for one waiting thread.</li>
          <li>WaitOne: Blocks the thread until the gate is opened.</li>
          <li>Use Case: When you want to signal one thread at a time.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">Example Scenario</h3>
        <p>File Reader and Writer:</p>
        <p>
          Use ManualResetEvent or AutoResetEvent to ensure only one thread
          (reader or writer) accesses the file at a time.
        </p>
        <h3 className="text-lg font-semibold mt-4">Deadlock Resolution</h3>
        <p>
          Deadlocks occur when threads wait indefinitely for resources held by
          each other.
        </p>
        <ul className="list-disc pl-5">
          <li>Lock Ordering: Always acquire locks in a consistent order.</li>
          <li>
            Timeout: Use Monitor.TryEnter or Mutex.WaitOne with a timeout to
            avoid indefinite waiting.
          </li>
          <li>
            Avoid Nested Locks: Minimize locking multiple resources
            simultaneously.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">
          Performance Considerations
        </h3>
        <ul className="list-disc pl-5">
          <li>
            Processor Count: Use Environment.ProcessorCount to determine the
            number of CPU cores.
          </li>
          <li>
            Parallelization: On a single-core machine, threads share the CPU,
            leading to context switching overhead. On a multi-core machine,
            threads can run in parallel, improving performance.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">Summary</h3>
        <ul className="list-disc pl-5">
          <li>Use Interlocked for simple atomic operations.</li>
          <li>Use Lock for basic synchronization.</li>
          <li>Use Monitor for advanced synchronization features.</li>
          <li>Use Mutex for cross-process synchronization.</li>
          <li>Use Semaphore to limit concurrent access to a resource.</li>
          <li>Use ManualResetEvent and AutoResetEvent for thread signaling.</li>
          <li>Prevent deadlocks by following consistent locking practices.</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Thread vs Task</h2>
        <h3 className="text-lg font-semibold mt-4">Thread</h3>
        <p>
          A low-level way to run code in parallel. It directly represents an
          operating system thread.
        </p>
        <h3 className="text-lg font-semibold mt-4">Task</h3>
        <p>
          A higher-level abstraction for running code asynchronously or in
          parallel. It uses threads from the thread pool but simplifies the
          process.
        </p>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Feature</th>
              <th className="px-4 py-2">Thread</th>
              <th className="px-4 py-2">Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Level of Abstraction</td>
              <td className="border px-4 py-2">
                Low-level (directly represents an OS thread). You have to manage
                the thread lifecycle (starting, stopping, etc.).
              </td>
              <td className="border px-4 py-2">
                High-level (abstracts thread management). The system manages the
                underlying threads for you.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Resource Usage</td>
              <td className="border px-4 py-2">
                Consumes significant resources (memory, CPU). Creating too many
                threads can overload the system.
              </td>
              <td className="border px-4 py-2">
                Uses threads from the thread pool, making it more efficient.
                This makes tasks more efficient for short-lived operations.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Control</td>
              <td className="border px-4 py-2">
                Full control over thread lifecycle (start, stop, priority,
                etc.).
              </td>
              <td className="border px-4 py-2">
                Limited control over the underlying thread, but easier to use.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Use Cases</td>
              <td className="border px-4 py-2">
                Best for long-running operations requiring fine-grained control.
              </td>
              <td className="border px-4 py-2">
                Best for short-lived, asynchronous operations or parallel tasks.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Return Values</td>
              <td className="border px-4 py-2">Does not return a value.</td>
              <td className="border px-4 py-2">
                Can return a result and provide status (e.g., completed,
                cancelled).
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cancellation</td>
              <td className="border px-4 py-2">
                Cancelling a thread is complex and not recommended.
              </td>
              <td className="border px-4 py-2">
                Supports easy cancellation using Cancellation Token.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Multiple Operations</td>
              <td className="border px-4 py-2">
                A thread can only run one task at a time.
              </td>
              <td className="border px-4 py-2">
                A task can represent multiple operations or be part of a larger
                workflow.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Thread Pool Integration</td>
              <td className="border px-4 py-2">
                Not tied to the thread pool. Threads are created and managed
                manually.
              </td>
              <td className="border px-4 py-2">
                Automatically uses threads from the thread pool. Threads are
                reused.
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-lg font-semibold mt-4">Example Scenarios</h3>
        <ul className="list-disc pl-5">
          <li>
            Thread: Long-running background processes. Complex operations
            requiring fine-tuning.
          </li>
          <li>
            Task: Fetching data asynchronously. Running multiple small tasks in
            parallel.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">When to Use What</h3>
        <ul className="list-disc pl-5">
          <li>
            Use Thread when you need full control over the thread or are dealing
            with long-running operations.
          </li>
          <li>
            Use Task when you want to run short-lived, asynchronous operations,
            need to return a result or check the status of the operation, want
            to cancel operations easily, or are working with the thread pool for
            better resource management.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsyncAndParallel2;
