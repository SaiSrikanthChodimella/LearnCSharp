import React from "react";

const Basics = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hello World Program</h1>
      <p className="mb-4">
        This is the simplest C# program that prints "Hello, World!" to the
        console.
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        {`using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}`}
      </pre>
      <p className="mb-2">
        <span className="font-semibold">using System;</span> imports the System
        namespace, which contains fundamental classes like Console.
      </p>
      <p className="mb-2">
        <span className="font-semibold">class Program</span> defines a class
        named Program.
      </p>
      <p className="mb-2">
        <span className="font-semibold">static void Main(string[] args)</span>{" "}
        is the entry point of the program.
      </p>
      <p className="mb-2">
        <span className="font-semibold">Console.WriteLine()</span> is used to
        output text to the console.
      </p>
    </div>
  );
};

export default Basics;
