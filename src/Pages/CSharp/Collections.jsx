import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const List = ({ title, items }) => (
  <>
    <h3 className="font-semibold mt-2">{title}</h3>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);

const Collections = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Collections</h1>
      <Section>
        <p className="mb-4">
          Collections in C# are data structures that hold multiple items. They
          help you store, retrieve, and manage data efficiently. Collections are
          part of the System.Collections and System.Collections.Generic
          namespaces.
        </p>
        <p className="mb-4">
          There are different types of collections in C#, each with unique
          features and use cases. (Ref Link)
        </p>
        <p className="mb-4">
          Data Structures are named locations used to store and organize data,
          improving efficiency and memory management. All collections are
          abstract data types (ADT), meaning their implementation details are
          hidden unless you read the documentation.
        </p>
      </Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Section title="Array">
          <p>
            An array is a collection of elements of the same type, stored in
            contiguous memory locations. Arrays have a fixed size once created.
          </p>
          <List
            title="Advantages of Arrays:"
            items={[
              "Fast access: Quickly access elements using the index (e.g., array[0]).",
              "Efficient storage: Arrays are simple and use less memory.",
            ]}
          />
          <List
            title="Disadvantages of Arrays:"
            items={[
              "Fixed size: The size of the array cannot be changed once created.",
              "Difficult insertion/removal: Adding or removing elements requires creating a new array and copying the elements.",
            ]}
          />
        </Section>

        <Section title="Multi-Dimensional Array">
          <p>Like a grid, array of arrays, or a Rubik's cube.</p>
          <p>Grid = 2D and Rubik's = 3D</p>
          <p>
            Example of 2D:{" "}
            <code>
              String [,] GridArray = [["Honda", "GTR"], ["Ford", "Mustang"],
              ["Audi", "A4"]]
            </code>
          </p>
          <p>
            Example of 3D:{" "}
            <code>
              String [,,] RubikArray =
              [[["Red",1],["Red",2]],[["Blue",1],["Blue",2]],[["Green",1],["Green",2]]]
            </code>
          </p>
        </Section>

        <Section title="List">
          <p>
            A List is a dynamic array that can grow and shrink in size as
            needed. It is part of the System.Collections.Generic namespace.
            Unlike arrays, lists allow you to add or remove elements during
            runtime.
          </p>
          <List
            title="Advantages of Lists:"
            items={[
              "Flexible size: The size of a List can change dynamically as elements are added or removed.",
              "Built-in methods: Lists come with many useful methods, such as Add(), Insert(), Remove(), Sort(), and Clear().",
              "Indexed access: Like arrays, you can access elements by their index.",
            ]}
          />
          <List
            title="Disadvantages of Lists:"
            items={[
              "Performance: Lists are not as fast as arrays when accessing elements, especially for large collections.",
            ]}
          />
          <List
            title="Common List Methods:"
            items={[
              "Add(): Adds an element to the end of the list.",
              "Insert(): Inserts an element at a specified index.",
              "Remove(): Removes the first occurrence of an element.",
              "Sort(): Sorts the elements in the list.",
              "Reverse(): Reverses the order of elements.",
            ]}
          />
        </Section>

        <Section title="Stacks">
          <p>
            A Stack is a collection that follows the Last-In, First-Out (LIFO)
            principle. The last element added to the stack is the first one to
            be removed.
          </p>
          <List
            title="Advantages of Stacks:"
            items={[
              "Efficient for LIFO operations: Stacks are perfect for situations where you need to access the most recently added elements first (e.g., undo operations).",
            ]}
          />
          <List
            title="Disadvantages of Stacks:"
            items={[
              "Limited access: You can only access the top element directly.",
            ]}
          />
          <List
            title="Common Stack Methods:"
            items={[
              "Push(): Adds an element to the top of the stack.",
              "Pop(): Removes and returns the top element from the stack.",
              "Peek(): Returns the top element without removing it.",
            ]}
          />
        </Section>

        <Section title="Queues">
          <p>
            A Queue is a collection that follows the First-In, First-Out (FIFO)
            principle. The first element added to the queue is the first one to
            be removed.
          </p>
          <List
            title="Advantages of Queues:"
            items={[
              "Efficient for FIFO operations: Queues are ideal for managing tasks, such as print jobs or customer service lines.",
            ]}
          />
          <List
            title="Disadvantages of Queues:"
            items={[
              "Limited access: You can only access the front and rear elements.",
            ]}
          />
          <List
            title="Common Queue Methods:"
            items={[
              "Enqueue(): Adds an element to the end of the queue.",
              "Dequeue(): Removes and returns the first element from the queue.",
              "Peek(): Returns the first element without removing it.",
            ]}
          />
        </Section>

        <Section title="Dictionaries">
          <p>
            A Dictionary is a collection of key-value pairs. You can quickly
            retrieve values using keys, similar to looking up words in a
            dictionary.
          </p>
          <List
            title="Advantages of Dictionaries:"
            items={[
              "Fast lookups: You can retrieve values in constant time using the key.",
              "No duplicates: Each key must be unique.",
            ]}
          />
          <List
            title="Disadvantages of Dictionaries:"
            items={[
              "Memory usage: Dictionaries use more memory than lists because of the key-value structure.",
            ]}
          />
          <List
            title="Common Dictionary Methods:"
            items={[
              "Add(): Adds a new key-value pair to the dictionary.",
              "Remove(): Removes a key-value pair from the dictionary.",
              "ContainsKey(): Checks if a specific key exists in the dictionary.",
              "TryGetValue(): Retrieves the value associated with a key without throwing an error if the key does not exist.",
            ]}
          />
        </Section>

        <Section title="Linked Lists">
          <p>
            A Linked List is a collection of nodes where each node contains data
            and a reference (or link) to the next node. Linked lists can grow
            and shrink dynamically, unlike arrays.
          </p>
          <List
            title="Advantages of Linked Lists:"
            items={[
              "Dynamic size: Linked lists can grow or shrink in size without wasting memory.",
              "Efficient insertion/deletion: Inserting or removing elements is faster compared to arrays.",
            ]}
          />
          <List
            title="Disadvantages of Linked Lists:"
            items={[
              "Slower access: Accessing elements is slower since you must traverse the list from the head to find the element.",
            ]}
          />
        </Section>

        <Section title="Tuples">
          <p>
            A Tuple is a simple data structure that can hold multiple values of
            different types. You can use it to group related data.
          </p>
          <List
            title="Advantages of Tuples:"
            items={[
              "Compact: Useful for returning multiple values from a method.",
            ]}
          />
          <List
            title="Disadvantages of Tuples:"
            items={[
              "Readability: Tuples may be less readable than using a custom class.",
            ]}
          />
        </Section>
      </div>
    </div>
  );
};

export default Collections;
