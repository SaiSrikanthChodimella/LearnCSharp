import React from "react";

const ExceptionHandling = () => {
  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Exception Handling</h2>
        <p>
          Exception handling helps us deal with errors in a program without
          crashing the application.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">
          Structure of Exception Handling
        </h3>
        <ol className="list-decimal list-inside">
          <li>try block – Code that might cause an error.</li>
          <li>catch block – Handles the error if one occurs.</li>
          <li>finally block – Runs no matter what (used for cleanup).</li>
        </ol>
        <p>
          We can have infinite types of distinct catch blocks and the finally
          block always runs, whether there is an error or not.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">Why Use Exception Handling?</h3>
        <p>Prevents the application from crashing.</p>
        <p>Catches specific errors, like:</p>
        <ul className="list-disc list-inside">
          <li>DivideByZeroException (dividing by zero).</li>
          <li>FormatException (wrong data format).</li>
          <li>NullReferenceException (trying to use a null object).</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">
          Best Practices for Exception Handling
        </h3>
        <ul className="list-disc list-inside">
          <li>Use specific catch blocks to handle different errors.</li>
          <li>Always inform the user about the error.</li>
          <li>
            Use the finally block for cleanup, like closing files or database
            connections.
          </li>
          <li>
            Don't overuse try-catch – Instead, validate inputs to prevent
            errors.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">What is Throw</h3>
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
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">When to Use throw?</h3>
        <ul className="list-disc list-inside">
          <li>To rethrow an existing exception (preserving details).</li>
          <li>To create a new exception when something goes wrong.</li>
          <li>
            To handle inner exceptions (track the original cause of an error).
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">Creating a Custom Exception</h3>
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
      </div>
    </div>
  );
};

export default ExceptionHandling;
