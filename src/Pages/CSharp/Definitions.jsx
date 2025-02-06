import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const Definitions = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Section title="Namespace">
        <p>
          A collection of classes, interfaces, structs, enums, and delegates.
        </p>
        <p>
          Using statements at the top of the code page indicate you are using
          those namespace’s classes, etc.
        </p>
        <p>We can create nested namespaces.</p>
        <p>We can also alias the namespace when needed.</p>
      </Section>

      <Section title="Class and Object">
        <p>
          A bundle of code (methods, variables, fields, properties,
          constructors, etc.).
        </p>
        <p>User-defined reference data type.</p>
        <p>It is a blueprint for objects.</p>
        <p>An instance of a class is called an object.</p>
        <p>
          Classes can be static or non-static. If a class is static, its methods
          should be static.
        </p>
        <p>
          When you declare a method or field as static, it belongs to the class
          rather than an instance of the class. Instances cannot access static
          fields and methods.
        </p>
      </Section>

      <Section title="Object Syntax">
        <p>Datatype variableName = new Constructor();</p>
        <p>
          Creates an instance of the class, and we can access it using
          variableName.something().
        </p>
        <p>Example:</p>
        <p>Dog dog1 = new Dog();</p>
        <p>Dog dog2 = new Dog();</p>
        <p>
          We have two different instances of Dog. We can do something like
          dog1.breed = x, dog2.breed = y.
        </p>
      </Section>

      <Section title="Constructor">
        <p>
          A special method in a class that has the same name as the class and
          has no return type. It is used to initialize data in the class.
        </p>
        <p>Automatically called when the class is instantiated.</p>
        <p>Types of constructors: default, copy, parameterized, static, etc.</p>
        <p>Constructor overloading is similar to method overloading.</p>
        <p>Example:</p>
        <p>Dog dog1 = new Dog(x);</p>
        <p>Dog dog2 = new Dog(x, y);</p>
      </Section>

      <Section title="Method">
        <p>
          A section of code that runs a block of code whenever invoked or
          called, eliminating repetitive code.
        </p>
        <p>
          Syntax: AccessSpecifier ReturnType MethodName(Parameters){" "}
          {`{ return variableOfReturnType; }`}
        </p>
        <p>If the return type is void, there is no return value.</p>
        <p>Parameter syntax: Datatype parameterName</p>
        <p>
          All parameters combined are called the signature of the method.
          Example: someMethod(int someInteger)
        </p>
        <p>
          Variables declared inside the method are local variables, only
          available within the scope of the method.
        </p>
      </Section>

      <Section title="Optional Parameter">
        <p>Should be the last parameter in the signature.</p>
        <p>Should have a default or custom value assigned to it.</p>
        <p>We can have only one optional parameter.</p>
        <p>
          If we do not pass a value to that parameter, the assigned value is
          used.
        </p>
        <p>Example:</p>
        <p>
          public void someMethod(int integer, double decimal, string text =
          "someString") {`{ // Does something }`}
        </p>
      </Section>

      <Section title="Params">
        <p>
          A single-dimension array of arguments or parameters for the same
          method.
        </p>
        <p>Syntax:</p>
        <p>public double totalCost(params double[] prices) {`{`}</p>
        <p>var total = 0;</p>
        <p>foreach (var item in prices) {`{`}</p>
        <p>total += item;</p>
        <p>{`}`}</p>
        <p>return total;</p>
        <p>{`}`}</p>
        <p>
          When calling this method, we can pass as many parameters of the same
          data type as needed.
        </p>
      </Section>

      <Section title="Recursive Method">
        <p>
          Advantages: Easier debugging, easier to code, alternative to
          iteration.
        </p>
        <p>Disadvantages: Sometimes slow and high memory consumption.</p>
        <p>
          A method that calls itself repeatedly. It must have a break or return
          statement to stop the cyclic loop.
        </p>
      </Section>
    </div>
  );
};

export default Definitions;
