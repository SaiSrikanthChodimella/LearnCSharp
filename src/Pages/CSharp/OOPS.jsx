import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const OOPS = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section title="OOPs">
          <p>
            Object-Oriented Programming (OOP) helps organize code using
            real-world concepts like Inheritance, Abstraction, Polymorphism, and
            Encapsulation.
          </p>
        </Section>

        <Section title="Inheritance">
          <p>Inheritance allows code to be reused and organized efficiently.</p>
          <p>
            For example, consider a Vehicle class as the parent. It has common
            properties like Speed, Year, Make, and Capacity. Child classes such
            as Bicycle, Car, SUV, and Bus inherit these properties while adding
            their own unique features.
          </p>
          <ul className="list-disc list-inside">
            <li>
              A child class inherits properties and methods from the parent
              class.
            </li>
            <li>
              The parent class constructor runs before the child class
              constructor.
            </li>
            <li>
              Use the sealed keyword to prevent a class from being inherited.
            </li>
            <li>
              The syntax for inheritance is:{" "}
              <code>class ChildClass : ParentClass</code>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-2">Types of Inheritance:</h3>
          <ol className="list-decimal list-inside">
            <li>Single-Level – One parent, one child.</li>
            <li>
              Multi-Level – A child class acts as a parent to another class.
            </li>
            <li>Hierarchical – One parent, multiple child classes.</li>
            <li>
              Multiple – Not directly supported in C#, but achieved using
              interfaces.
            </li>
          </ol>
        </Section>

        <Section title="Abstraction">
          <p>
            Abstraction defines a blueprint for other classes. It hides
            implementation details while exposing only essential features.
          </p>
          <ul className="list-disc list-inside">
            <li>An abstract class is declared using the abstract keyword.</li>
            <li>
              It cannot be instantiated (objects cannot be created from it).
            </li>
            <li>
              It can contain both regular methods (with implementation) and
              abstract methods (without a body).
            </li>
            <li>
              Abstract methods must be implemented in the child class using the
              override keyword.
            </li>
            <li>
              Every child class must provide an implementation for abstract
              methods.
            </li>
          </ul>
        </Section>

        <Section title="Polymorphism">
          <p>
            Polymorphism allows a child class to provide a new version of a
            method defined in the parent class. This is a key feature where the
            child class method overrides the parent class method.
          </p>
          <ul className="list-disc list-inside">
            <li>
              The parent class method must be marked with virtual or abstract to
              allow overriding.
            </li>
            <li>
              virtual means the method can have an implementation, but the child
              class can optionally override it.
            </li>
            <li>
              abstract means the method has no implementation in the parent
              class, and the child class must override it.
            </li>
            <li>
              In the child class, the override keyword is used to provide a new
              implementation of the method.
            </li>
            <li>
              If a method is overridden in the child class, the child class
              version dominates the parent class version.
            </li>
            <li>
              If no override is provided in the child class, the parent class
              version is called instead.
            </li>
          </ul>
        </Section>

        <Section title="Encapsulation">
          <p>
            Encapsulation bundles related data and methods that operate on that
            data into a single unit, typically a class. This helps control how
            the data is accessed and modified.
          </p>
          <ul className="list-disc list-inside">
            <li>
              It involves hiding the internal details (fields and methods) of a
              class and providing public interfaces (properties and methods) to
              interact with the data.
            </li>
            <li>
              Access modifiers like private, public, and protected are used to
              control the visibility and accessibility of class members.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-2">Benefits:</h3>
          <ul className="list-disc list-inside">
            <li>
              Data protection: You can restrict direct access to fields and only
              expose them through properties or methods, ensuring the integrity
              of the data.
            </li>
            <li>
              Code maintainability: By grouping related data and operations
              together, it’s easier to maintain and update the class.
            </li>
          </ul>
        </Section>

        <Section title="Access Modifiers">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Key / Accessibility</th>
                <th>Containing Class</th>
                <th>Derived Class</th>
                <th>Containing Assembly</th>
                <th>Outside Assembly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Private</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Protected</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Protected Internal</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Internal</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Public</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Interface">
          <p>
            An interface defines a contract or a set of requirements that a
            class must follow. It acts as a mediator between classes, promoting
            loose coupling and enabling better modularity, security, and
            multiple inheritance (through interfaces).
          </p>
          <ul className="list-disc list-inside">
            <li>
              Interfaces define method signatures, properties, delegates,
              events, but not fields. The implementation of these methods is
              provided by the class that implements the interface.
            </li>
            <li>
              An interface cannot be instantiated directly. Instead, objects of
              the implementing class are assigned to the interface reference.
            </li>
            <li>
              Interfaces enable multiple inheritance. A class can implement
              multiple interfaces.
            </li>
            <li>
              Access modifiers: By default, everything in an interface is
              public. You cannot specify access modifiers like private or
              protected.
            </li>
            <li>
              An interface can inherit from other interfaces, creating a chain
              of interfaces.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-2">
            Explicit Interface Implementation:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              When a class implements multiple interfaces that have methods with
              the same signature, you can use explicit interface implementation
              to avoid conflicts. This way, methods are only accessible through
              the interface reference.
            </li>
            <li>
              No access modifiers (like public) should be used when explicitly
              implementing interface methods.
            </li>
          </ul>
        </Section>

        <Section title="Properties">
          <p>
            Properties provide controlled access to the fields of a class. They
            are a blend of fields (for storing data) and methods (for
            controlling access to data). Properties are part of encapsulation,
            as they allow you to control how data is accessed and modified.
          </p>
          <ul className="list-disc list-inside">
            <li>
              Getters (get) and Setters (set) are used to retrieve and assign
              values to the property, respectively.
            </li>
            <li>The getter retrieves the value of the property.</li>
            <li>
              The setter assigns a value to the property, and often includes
              logic for validation or manipulation before setting the value.
            </li>
            <li>
              Auto-implemented properties are simpler and do not require
              explicit backing fields. C# automatically provides the backing
              field behind the scenes.
            </li>
            <li>
              Full properties (also called propfull) provide a backing field,
              allowing you to implement custom logic for both the getter and
              setter.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-2">When to Use:</h3>
          <ul className="list-disc list-inside">
            <li>
              Use auto-implemented properties for simple properties where no
              validation or custom logic is required.
            </li>
            <li>
              Use full properties when you need to validate or manipulate the
              value before setting it, or when you want to implement custom
              logic for getting or setting the value.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default OOPS;
