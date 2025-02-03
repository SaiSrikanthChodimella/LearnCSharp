import React from "react";

const TestPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Type Casting</h1>
        <p className="mb-2">Converting one data type to another data type</p>
        <p className="mb-2">
          2 Types of casting: Explicit and Implicit type casting
        </p>
        <p className="mb-2">
          Implicit is automatic and its lower data type to Higher Data type
        </p>
        <p className="mb-2">Explicit is using keywords or Class Helpers</p>
        <p className="mb-2">Example:</p>
        <p className="mb-2">
          Implicit:{" "}
          <code className="bg-gray-200 p-1 rounded">
            int I = 50; long int j = I;
          </code>
        </p>
        <p className="mb-2">
          Explicit:{" "}
          <code className="bg-gray-200 p-1 rounded">
            float f = 50.5; int I = convert.toint32(f);
          </code>{" "}
          -- Using Class Helper
        </p>
        <p className="mb-2">
          <code className="bg-gray-200 p-1 rounded">
            Float f = 50.5; int I = (int)f;
          </code>{" "}
          -- Using Keywords
        </p>
      </div>
    </div>
  );
};

export default TestPage;
