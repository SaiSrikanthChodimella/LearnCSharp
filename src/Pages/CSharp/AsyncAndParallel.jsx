import React from "react";

const Section = ({ title, children }) => (
  <section className="space-y-2">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }) => (
  <section className="space-y-2">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc list-inside space-y-1">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const AsyncAndParallel = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">
        Understanding Async Programming and Parallel Programming
      </h1>
      <p>Let's start by understanding some basic concepts and definitions:</p>

      <Section title="Threads and Processes">
        <p>
          When you run an application, it becomes a process managed by the
          operating system. This process includes memory, system resources, and
          threads. Multiple processes can run at the same time, and the
          operating system manages their execution.
        </p>

        <SubSection title="What is a Process">
          <p>
            A process is an instance of a program that the operating system
            manages. It includes resources like memory and CPU time.
          </p>
          <List
            items={[
              "The operating system provides resources for process execution.",
              "The OS scheduler distributes processes across CPU cores.",
              "A process has at least one thread, usually the main thread.",
              "Each process has a unique Process ID (PID) and runs in its own memory space.",
            ]}
          />
        </SubSection>

        <SubSection title="What is a Thread">
          <p>
            A thread is the smallest unit of execution within a process. A
            process can have multiple threads sharing the same resources.
          </p>
          <List
            items={[
              "Threads exist within a process, and a process must have at least one thread.",
              "Threads are lightweight but can be memory-intensive in large numbers.",
              "Too many threads can cause memory bottlenecks and degrade performance.",
              "The number of threads is usually equal to the number of CPU cores.",
              "Threads are managed in .NET via System.Threading.",
            ]}
          />
        </SubSection>

        <SubSection title="Advantages">
          <List
            items={[
              "Responsive Applications: Keeps the UI responsive by using background threads.",
              "Efficient Resource Use: Utilizes CPU efficiently during I/O-bound operations.",
              "Parallel Processing: Splits large tasks into smaller units for concurrent execution.",
            ]}
          />
        </SubSection>

        <SubSection title="Disadvantages">
          <List
            items={[
              "Performance Overhead: On single-core machines, threading can hurt performance due to context switching.",
              "Complexity: Requires more code compared to single-threaded execution.",
              "Debugging and maintaining threaded code is harder due to potential race conditions and deadlocks.",
            ]}
          />
        </SubSection>

        <p>
          Use threading when the benefits (responsiveness, efficiency,
          parallelism) outweigh the drawbacks (complexity, overhead).
        </p>
      </Section>

      <Section title="ThreadStartDelegate">
        <p>
          A delegate or lambda function that defines the entry point for the
          thread.
        </p>
      </Section>

      <Section title="Background vs Foreground Threads">
        <List
          items={[
            "Background Threads: Automatically terminate when the main thread ends.",
            "Foreground Threads: Keep the application alive until they complete.",
          ]}
        />
      </Section>

      <Section title="ParameterizedThreadStart Delegate">
        <p>
          Allows passing a parameter to the thread’s entry point method. Useful
          when the thread’s method requires input parameters.
        </p>
        <List
          items={[
            "Use a helper class or global variable to pass strongly-typed parameters.",
            "Avoid ParameterizedThreadStart if possible and use ThreadStart with a lambda or delegate.",
          ]}
        />
      </Section>

      <Section title="Thread Pool">
        <p>
          A thread pool is a collection of pre-created threads managed by the
          system. Instead of creating and destroying threads manually, you can
          assign tasks to threads from the pool. The system handles the
          lifecycle of these threads.
        </p>

        <SubSection title="How Does It Work">
          <List
            items={[
              "Pre-created Threads: The thread pool creates a set of threads in advance.",
              "Task Assignment: You add tasks to the thread pool, and it assigns them to available threads.",
              "Thread Reuse: Once a thread completes its task, it returns to the pool.",
              "Thread Limits: You can configure the minimum and maximum number of threads in the pool.",
            ]}
          />
        </SubSection>

        <SubSection title="Advantages of Using a Thread Pool">
          <List
            items={[
              "Simplified Thread Management: The system handles thread lifecycle automatically.",
              "Resource Efficiency: Reusing threads reduces the overhead of creating and destroying threads.",
              "Scalability: The thread pool adjusts the number of threads based on the workload.",
            ]}
          />
        </SubSection>

        <SubSection title="Disadvantages of Using a Thread Pool">
          <List
            items={[
              "Loss of Control: You cannot directly control individual threads.",
              "Limited Customization: Thread pools may not be suitable for highly specialized scenarios.",
              "Overhead for Short Tasks: Managing the thread pool might outweigh the benefits for very short tasks.",
            ]}
          />
        </SubSection>

        <SubSection title="When to Use a Thread Pool">
          <p>Use a thread pool for simple applications or tasks that are:</p>
          <List
            items={[
              "Short-lived.",
              "Independent of each other.",
              "Not highly resource-intensive.",
            ]}
          />
          <p>
            Avoid using a thread pool for tasks that require fine-grained
            control over threads.
          </p>
        </SubSection>

        <SubSection title="Thread Pool Configuration">
          <SubSection title="Default Thread Count">
            <p>
              The default number of threads in the thread pool is typically
              equal to the number of CPU cores.
            </p>
          </SubSection>

          <SubSection title="Maximum Thread Limit">
            <List
              items={[
                "The maximum number of threads in the thread pool depends on the system and framework.",
                "In .NET, the maximum number of threads is quite high but limited by available memory and system resources.",
                "You can configure the maximum limit programmatically, but exceeding the system’s capacity can lead to performance issues.",
              ]}
            />
          </SubSection>
        </SubSection>
      </Section>

      <Section title="Best Practices">
        <List
          items={[
            "Avoid Indefinite Thread Creation: Creating too many threads can exhaust memory and degrade performance. Use the thread pool to limit the number of concurrent threads.",
            "Monitor Thread Usage: Keep an eye on the number of active threads to ensure optimal performance.",
            "Use for Appropriate Tasks: Thread pools are ideal for tasks like handling small I/O operations, background tasks, or parallel processing.",
          ]}
        />
      </Section>

      <Section title="Key Points to Remember">
        <List
          items={[
            "A thread pool is a collection of pre-created threads managed by the system.",
            "It simplifies thread management by handling scheduling, monitoring, and reuse.",
            "You can control the minimum and maximum number of threads to optimize resource usage.",
            "The default number of threads is equal to the number of CPU cores.",
            "The maximum number of threads is limited by system memory and resources.",
            "Use thread pools for simple, short-lived tasks and avoid them for tasks requiring fine-grained thread control.",
          ]}
        />
      </Section>
    </div>
  );
};

export default AsyncAndParallel;
