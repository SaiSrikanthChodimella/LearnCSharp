import React from "react";

const Collections = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Collections</h1>
      <p className="mb-4">
        Collections in C# are data structures that hold multiple items. They
        provide a way to store, retrieve, and manage data in a more organized
        manner. In C#, collections are part of the System.Collections and
        System.Collections.Generic namespaces.
      </p>
      <p className="mb-4">
        There are several types of collections in C#, each with its own features
        and use cases. (Ref Link)
      </p>
      <p className="mb-4">
        Data Structures – is a named location that can be used to store data and
        organise data to improve efficiency and memory management of code. All
        the collections are ADT, that is they are all abstracted. So, we do not
        know the background implementation of it. Unless we read the
        documentation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Array</h2>
          <p>
            An array is a collection of elements of the same type, stored in
            contiguous memory locations. The key feature of an array is that it
            has a fixed size once created.
          </p>
          <h3 className="font-semibold mt-2">Advantages of Arrays:</h3>
          <ul className="list-disc list-inside">
            <li>
              Fast access: You can quickly access elements using the index
              (e.g., array[0]).
            </li>
            <li>Efficient storage: Arrays are simple and use less memory.</li>
          </ul>
          <h3 className="font-semibold mt-2">Disadvantages of Arrays:</h3>
          <ul className="list-disc list-inside">
            <li>
              Fixed size: Once created, the size of the array cannot be changed.
            </li>
            <li>
              Difficult insertion/removal: Adding or removing elements requires
              creating a new array and copying the elements.
            </li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Multi-Dimensional Array
          </h2>
          <p>Like a Grid, array of array or a rubix cube</p>
          <p>Grid =2D and Rubix = 3D</p>
          <p>
            Example of 2D:{" "}
            <code>
              String [,] GridArray = [["honda", "GTR"], ["ford", "Mustang"],
              ["Audi", "A4"]]{" "}
            </code>
          </p>
          <p>
            Example for 3D:{" "}
            <code>
              String [,,] RubixArray =
              [[["Red",1],["Red",2]],[["Blue",1],["Blue",2]],[["Green",1],["Green",2]]]
            </code>
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">List</h2>
          <p>
            A List is a dynamic array that can grow and shrink in size as
            needed. It is part of the System.Collections.Generic namespace.
            Unlike arrays, lists allow you to add or remove elements during
            runtime.
          </p>
          <h3 className="font-semibold mt-2">Advantages of Lists:</h3>
          <ul className="list-disc list-inside">
            <li>
              Flexible size: The size of a List can change dynamically as
              elements are added or removed.
            </li>
            <li>
              Built-in methods: Lists come with many useful methods, such as
              Add(), Insert(), Remove(), Sort(), and Clear().
            </li>
            <li>
              Indexed access: Like arrays, you can access elements by their
              index.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Disadvantages of Lists:</h3>
          <ul className="list-disc list-inside">
            <li>
              Performance: Lists are not as fast as arrays when accessing
              elements, especially for large collections.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Common List Methods:</h3>
          <ul className="list-disc list-inside">
            <li>Add(): Adds an element to the end of the list.</li>
            <li>Insert(): Inserts an element at a specified index.</li>
            <li>Remove(): Removes the first occurrence of an element.</li>
            <li>Sort(): Sorts the elements in the list.</li>
            <li>Reverse(): Reverses the order of elements.</li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Stacks</h2>
          <p>
            A Stack is a collection that follows the Last-In, First-Out (LIFO)
            principle. This means that the last element added to the stack will
            be the first one to be removed.
          </p>
          <h3 className="font-semibold mt-2">Advantages of Stacks:</h3>
          <ul className="list-disc list-inside">
            <li>
              Efficient for LIFO operations: Stacks are perfect for situations
              where you need to access the most recently added elements first
              (e.g., undo operations).
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Disadvantages of Stacks:</h3>
          <ul className="list-disc list-inside">
            <li>
              Limited access: You can only access the top element directly.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Common Stack Methods:</h3>
          <ul className="list-disc list-inside">
            <li>Push(): Adds an element to the top of the stack.</li>
            <li>Pop(): Removes and returns the top element from the stack.</li>
            <li>Peek(): Returns the top element without removing it.</li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Queues</h2>
          <p>
            A Queue is a collection that follows the First-In, First-Out (FIFO)
            principle. This means that the first element added to the queue will
            be the first one to be removed.
          </p>
          <h3 className="font-semibold mt-2">Advantages of Queues:</h3>
          <ul className="list-disc list-inside">
            <li>
              Efficient for FIFO operations: Queues are ideal for managing
              tasks, such as print jobs or customer service lines.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Disadvantages of Queues:</h3>
          <ul className="list-disc list-inside">
            <li>
              Limited access: You can only access the front and rear elements.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Common Queue Methods:</h3>
          <ul className="list-disc list-inside">
            <li>Enqueue(): Adds an element to the end of the queue.</li>
            <li>
              Dequeue(): Removes and returns the first element from the queue.
            </li>
            <li>Peek(): Returns the first element without removing it.</li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Dictionaries</h2>
          <p>
            A Dictionary is a collection of key-value pairs. You can quickly
            retrieve values using keys, similar to looking up words in a
            dictionary.
          </p>
          <h3 className="font-semibold mt-2">Advantages of Dictionaries:</h3>
          <ul className="list-disc list-inside">
            <li>
              Fast lookups: You can retrieve values in constant time using the
              key.
            </li>
            <li>No duplicates: Each key must be unique.</li>
          </ul>
          <h3 className="font-semibold mt-2">Disadvantages of Dictionaries:</h3>
          <ul className="list-disc list-inside">
            <li>
              Memory usage: Dictionaries use more memory than lists because of
              the key-value structure.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Common Dictionary Methods:</h3>
          <ul className="list-disc list-inside">
            <li>Add(): Adds a new key-value pair to the dictionary.</li>
            <li>Remove(): Removes a key-value pair from the dictionary.</li>
            <li>
              ContainsKey(): Checks if a specific key exists in the dictionary.
            </li>
            <li>
              TryGetValue(): Retrieves the value associated with a key without
              throwing an error if the key does not exist.
            </li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Linked Lists</h2>
          <p>
            A Linked List is a collection of nodes where each node contains data
            and a reference (or link) to the next node. Linked lists can grow
            and shrink dynamically, unlike arrays.
          </p>
          <h3 className="font-semibold mt-2">Advantages of Linked Lists:</h3>
          <ul className="list-disc list-inside">
            <li>
              Dynamic size: Linked lists can grow or shrink in size without
              wasting memory.
            </li>
            <li>
              Efficient insertion/deletion: Inserting or removing elements is
              faster compared to arrays.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Disadvantages of Linked Lists:</h3>
          <ul className="list-disc list-inside">
            <li>
              Slower access: Accessing elements is slower since you must
              traverse the list from the head to find the element.
            </li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Tuples</h2>
          <p>
            A Tuple is a simple data structure that can hold multiple values of
            different types. You can use it to group related data.
          </p>
          <h3 className="font-semibold mt-2">Advantages of Tuples:</h3>
          <ul className="list-disc list-inside">
            <li>
              Compact: Useful for returning multiple values from a method.
            </li>
          </ul>
          <h3 className="font-semibold mt-2">Disadvantages of Tuples:</h3>
          <ul className="list-disc list-inside">
            <li>
              Readability: Tuples may be less readable than using a custom
              class.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collections;
