import React from "react";

const AsyncAndParallel = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">
        Understanding Async Programming and Parallel Programming
      </h1>
      <p>
        To get started with this we need to understand some fundamentals and
        definitions:
      </p>

      <h2 className="text-xl font-semibold">Threads and Processes</h2>
      <p>
        When you build an application, it is stored as an executable file on
        disk. When you run the application, the operating system loads it into
        RAM and manages its execution. The application runs as a process, which
        includes allocated memory, system resources, and threads necessary for
        execution. Multiple processes can run simultaneously on a system, and
        the operating system handles their scheduling and resource allocation.
      </p>

      <h3 className="text-lg font-semibold">What is a Process</h3>
      <p>
        A process is an instance of a program that the operating system manages
        and executes. It consists of allocated resources such as memory,
        security context, and CPU time.
      </p>
      <ul className="list-disc list-inside">
        <li>
          The operating system facilitates process execution by providing
          necessary resources (memory, security context, file handles, etc.).
        </li>
        <li>
          The OS scheduler distributes processes across available CPU cores for
          efficient execution.
        </li>
        <li>
          A process has at least one thread, known as the main (or primary)
          thread. In GUI applications, this is typically the UI thread.
        </li>
        <li>
          Each process has a unique Process ID (PID) and runs in an isolated
          memory space, ensuring that processes do not interfere with each
          other.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">What is a Thread</h3>
      <p>
        A thread is the smallest unit of execution within a process. A single
        process can have multiple threads that share the same memory and
        resources.
      </p>
      <ul className="list-disc list-inside">
        <li>
          Threads exist within a process, meaning a process must have at least
          one thread.
        </li>
        <li>
          Threads are lightweight in terms of execution overhead but can be
          memory-intensive when created in large numbers.
        </li>
        <li>
          Creating too many threads can lead to memory bottlenecks and degrade
          performance.
        </li>
        <li>
          By default, the number of threads available is equal to the number of
          CPU cores.
        </li>
        <li>Threads are managed in .NET via System.Threading.</li>
      </ul>

      <h3 className="text-lg font-semibold">Advantages</h3>
      <ul className="list-disc list-inside">
        <li>
          Responsive Applications: Keeps the UI responsive by offloading work to
          background threads.
        </li>
        <li>
          Efficient Resource Use: Utilizes CPU efficiently during I/O-bound
          operations (e.g., waiting for file or network operations).
        </li>
        <li>
          Parallel Processing: Splits large tasks into smaller units for
          concurrent execution.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">Disadvantages</h3>
      <ul className="list-disc list-inside">
        <li>
          Performance Overhead: On single-core machines, threading can hurt
          performance due to context switching (time taken to switch between
          threads).
        </li>
        <li>
          Complexity: Requires more code to achieve the same task compared to
          single-threaded execution.
        </li>
        <li>
          Debugging and maintaining threaded code is harder due to potential
          race conditions and deadlocks.
        </li>
      </ul>

      <p>
        Use threading when the advantages (responsiveness, efficiency,
        parallelism) outweigh the disadvantages (complexity, overhead).
      </p>

      <h3 className="text-lg font-semibold">ThreadStartDelegate</h3>
      <p>
        A delegate or lambda function that defines the entry point for the
        thread.
      </p>

      <h3 className="text-lg font-semibold">
        Background vs Foreground Threads
      </h3>
      <ul className="list-disc list-inside">
        <li>
          Background Threads: Automatically terminate when the main thread ends.
        </li>
        <li>
          Foreground Threads: Keep the application alive until they complete.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">
        ParameterizedThreadStart Delegate
      </h3>
      <p>
        Allows passing a parameter to the thread’s entry point method. And
        useful when the thread’s method requires input parameters.
      </p>
      <ul className="list-disc list-inside">
        <li>
          Use a helper class or global variable to pass strongly-typed
          parameters.
        </li>
        <li>
          Avoid ParameterizedThreadStart if possible and use ThreadStart with a
          lambda or delegate.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">Thread Pool</h3>
      <p>
        A thread pool is a collection of pre-created threads that are managed by
        the system. Instead of creating and destroying threads manually, you can
        assign tasks (work items) to threads from the pool. The system handles
        the lifecycle of these threads, including scheduling and monitoring.
      </p>

      <h3 className="text-lg font-semibold">How Does It Work</h3>
      <ul className="list-disc list-inside">
        <li>
          Pre-created Threads: The thread pool creates a set of threads in
          advance but does not start them immediately.
        </li>
        <li>
          Task Assignment: You add tasks (work items) to the thread pool, and it
          assigns them to available threads.
        </li>
        <li>
          Thread Reuse: Once a thread completes its task, it returns to the pool
          and becomes available for new tasks.
        </li>
        <li>
          Thread Limits: You can configure the minimum and maximum number of
          threads in the pool to control resource usage.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">
        Advantages of Using a Thread Pool
      </h3>
      <ul className="list-disc list-inside">
        <li>
          Simplified Thread Management: You do not need to worry about creating,
          scheduling, or monitoring threads. The system handles the lifecycle of
          threads automatically.
        </li>
        <li>
          Resource Efficiency: Reusing threads reduces the overhead of creating
          and destroying threads repeatedly. Prevents overloading the processor
          by limiting the number of concurrent threads.
        </li>
        <li>
          Scalability: The thread pool dynamically adjusts the number of threads
          based on the workload.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">
        Disadvantages of Using a Thread Pool
      </h3>
      <ul className="list-disc list-inside">
        <li>
          Loss of Control: You cannot directly control individual threads (e.g.,
          setting priority or aborting a thread).
        </li>
        <li>
          Limited Customization: Thread pools are designed for general-purpose
          tasks and may not be suitable for highly specialized scenarios.
        </li>
        <li>
          Overhead for Short Tasks: For very short tasks, the overhead of
          managing the thread pool might outweigh the benefits.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">When to Use a Thread Pool</h3>
      <p>Use a thread pool for simple applications or tasks that are:</p>
      <ul className="list-disc list-inside">
        <li>Short-lived.</li>
        <li>Independent of each other.</li>
        <li>Not highly resource-intensive.</li>
      </ul>
      <p>
        Avoid using a thread pool for tasks that require fine-grained control
        over threads.
      </p>

      <h3 className="text-lg font-semibold">Thread Pool Configuration</h3>
      <h4 className="text-md font-semibold">Default Thread Count</h4>
      <p>
        The default number of threads in the thread pool is typically equal to
        the number of CPU cores.
      </p>

      <h4 className="text-md font-semibold">Maximum Thread Limit</h4>
      <ul className="list-disc list-inside">
        <li>
          The maximum number of threads in the thread pool depends on the system
          and framework.
        </li>
        <li>
          In .NET, for example, the maximum number of threads is quite high
          (e.g., thousands), but it’s limited by available memory and system
          resources.
        </li>
        <li>
          You can configure the maximum limit programmatically, but exceeding
          the system’s capacity can lead to performance degradation or
          out-of-memory errors.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">Best Practices</h3>
      <ul className="list-disc list-inside">
        <li>
          Avoid Indefinite Thread Creation: Creating too many threads can
          exhaust memory and degrade performance. Use the thread pool to limit
          the number of concurrent threads.
        </li>
        <li>
          Monitor Thread Usage: Keep an eye on the number of active threads to
          ensure optimal performance.
        </li>
        <li>
          Use for Appropriate Tasks: Thread pools are ideal for tasks like
          handling small I/O operations, background tasks, or parallel
          processing.
        </li>
      </ul>

      <h3 className="text-lg font-semibold">Key Points to Remember</h3>
      <ul className="list-disc list-inside">
        <li>
          A thread pool is a collection of pre-created threads managed by the
          system.
        </li>
        <li>
          It simplifies thread management by handling scheduling, monitoring,
          and reuse.
        </li>
        <li>
          You can control the minimum and maximum number of threads to optimize
          resource usage.
        </li>
        <li>
          The default number of threads is equal to the number of CPU cores.
        </li>
        <li>
          The maximum number of threads is limited by system memory and
          resources.
        </li>
        <li>
          Use thread pools for simple, short-lived tasks and avoid them for
          tasks requiring fine-grained thread control.
        </li>
      </ul>
    </div>
  );
};

export default AsyncAndParallel;
