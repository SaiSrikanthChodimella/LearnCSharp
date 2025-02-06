import React from "react";

const AsyncAwait = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Sync Programming</h2>
        <p>
          Is working on single thread so every task is performed one after
          another (so at a time only 1 task is executed), Example Blocked UI
        </p>
        <ul className="list-disc list-inside">
          <li>
            Here the thread is locked for quite some duration (based on task)
          </li>
          <li>
            So, if new requests are added on top, new threads would be created
            as CPU is still busy with the current thread, new threads consume
            loads of memory
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Async Programming</h2>
        <p>
          (To overcome problems in Sync Programming * on Non-CPU Bound
          operations)
        </p>
        <ul className="list-disc list-inside">
          <li>
            We use / reuse threads efficiently by the usage of (async and await
            stuff)
          </li>
          <li>
            Threads are not locked as in Sync Programming (so after execution
            the threads are moved back to the thread pool) and new threads are
            not created, saves a lot of memory and CPU load.
          </li>
          <li>
            Predefined Methods / Custom Async Methods end with Async suffix
          </li>
          <li>Tasks are foundations for Async programming</li>
          <li>Task Based Pattern *</li>
          <li>Event Based Pattern *</li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Async and Await</h2>
        <ul className="list-disc list-inside">
          <li>Using Async Keyword turns a method into Asynchronous method</li>
          <li>
            Await keyword can be used only inside method with Async modifier
          </li>
          <li>
            Await suspends the calling method until the task is completed then,
            returns the control to caller
          </li>
          <li>
            Async wraps the return into a task implicitly and await unwraps the
            task implicitly
          </li>
          <li>Return Type of Async Method is either void or Task</li>
          <li>
            Use Async keyword on methods to mark the method as asynchronous
            method
          </li>
          <li>
            Use Await key word on the operation which is a task (when code
            reached the point, we wait for the task to be finished, once
            finished then we move ahead) – an async method cannot move past
            await until task is done
          </li>
          <li>Also, when calling this method use await Keyword</li>
          <li>Benefit of this is that, this way we do not block the thread.</li>
          <li>
            Also, while using Async the return is wrapped automatically around
            task, to unwarp it use await
          </li>
        </ul>
        <p>Works like magic with Entity Framework</p>
      </div>
    </div>
  );
};

export default AsyncAwait;
