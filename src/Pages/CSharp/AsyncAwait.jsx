import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const AsyncAwait = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Section title="Sync Programming">
        <p>
          Sync programming works on a single thread, executing tasks one after
          another. This can lead to blocked UI.
        </p>
        <ul className="list-disc list-inside">
          <li>The thread is locked for the duration of the task.</li>
          <li>
            New threads are created for new requests, consuming a lot of memory.
          </li>
        </ul>
      </Section>
      <Section title="Async Programming">
        <p>
          Async programming helps overcome the limitations of sync programming,
          especially for non-CPU bound operations.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Threads are used efficiently with async and await, reducing memory
            and CPU load.
          </li>
          <li>
            Threads are not locked and are returned to the thread pool after
            execution.
          </li>
          <li>Async methods often have an "Async" suffix.</li>
          <li>Tasks are the foundation of async programming.</li>
          <li>There are Task-Based and Event-Based patterns.</li>
        </ul>
      </Section>
      <Section title="Async and Await">
        <ul className="list-disc list-inside">
          <li>The "async" keyword makes a method asynchronous.</li>
          <li>The "await" keyword can only be used inside an async method.</li>
          <li>
            "Await" pauses the method until the task is complete, then returns
            control to the caller.
          </li>
          <li>
            "Async" wraps the return value in a task, and "await" unwraps it.
          </li>
          <li>Async methods return either void or Task.</li>
          <li>Use "async" to mark a method as asynchronous.</li>
          <li>
            Use "await" on tasks to wait for their completion before moving
            ahead.
          </li>
          <li>When calling an async method, use "await".</li>
          <li>This approach prevents thread blocking.</li>
          <li>
            "Async" automatically wraps the return value in a task; use "await"
            to unwrap it.
          </li>
        </ul>
        <p>Async and await work seamlessly with Entity Framework.</p>
      </Section>
    </div>
  );
};

export default AsyncAwait;
