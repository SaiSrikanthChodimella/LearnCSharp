import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    {children}
  </div>
);

const ExceptionHandling = () => {
  return (
    <div className="p-6">
      <Section title="Exception Handling">
        <p>
          Exception handling allows us to manage errors in a program without
          crashing it.
        </p>
      </Section>

      <Section title="Structure of Exception Handling">
        <ol className="list-decimal list-inside">
          <li>try block – Code that might cause an error.</li>
          <li>catch block – Handles the error if one occurs.</li>
          <li>finally block – Runs no matter what (used for cleanup).</li>
        </ol>
        <p>
          We can have multiple catch blocks for different errors, and the
          finally block always runs, whether there is an error or not.
        </p>
      </Section>

      <Section title="Why Use Exception Handling?">
        <p>Prevents the application from crashing.</p>
        <p>Catches specific errors, such as:</p>
        <ul className="list-disc list-inside">
          <li>DivideByZeroException (dividing by zero).</li>
          <li>FormatException (wrong data format).</li>
          <li>NullReferenceException (using a null object).</li>
        </ul>
      </Section>

      <Section title="Best Practices for Exception Handling">
        <ul className="list-disc list-inside">
          <li>Use specific catch blocks for different errors.</li>
          <li>Always inform the user about the error.</li>
          <li>
            Use the finally block for cleanup, like closing files or database
            connections.
          </li>
          <li>
            Don't overuse try-catch – Validate inputs to prevent errors instead.
          </li>
        </ul>
      </Section>

      <Section title="What is Throw">
        <p>
          The throw keyword is used to manually trigger (raise) an exception.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Always check if the inner exception is null before passing it.
          </li>
          <li>Custom exceptions help create meaningful error messages.</li>
          <li>
            Use custom exceptions when built-in ones do not describe the issue
            well.
          </li>
        </ul>
      </Section>

      <Section title="When to Use throw?">
        <ul className="list-disc list-inside">
          <li>To rethrow an existing exception (preserving details).</li>
          <li>To create a new exception when something goes wrong.</li>
          <li>
            To handle inner exceptions (track the original cause of an error).
          </li>
        </ul>
      </Section>

      <Section title="Creating a Custom Exception">
        <p>
          We can define our own exception by creating a class that inherits from
          Exception.
        </p>
        <h4 className="text-md font-bold mb-2">
          Steps to Create a Custom Exception
        </h4>
        <ol className="list-decimal list-inside">
          <li>Create a class that extends Exception.</li>
          <li>Call the base Exception constructor inside the class.</li>
          <li>Optionally, include additional details in the exception.</li>
        </ol>
      </Section>
    </div>
  );
};

export default ExceptionHandling;
