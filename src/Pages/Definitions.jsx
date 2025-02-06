import React from "react";

const Definitions = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Namespace</h2>
        <p>Collection of Classes, interfaces, Structs, Enums and Delegates</p>
        <p>
          Using Statements on top of the code page indicate you are using those
          namespace’s classes etc
        </p>
        <p>We can create nested Namespaces</p>
        <p>We can Also Alias the Namespace when needed</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Class and Object</h2>
        <p>
          A bundle of Code (Methods, variables, fields, properties, constructor
          etc) (Ref Link)
        </p>
        <p>User Defined Reference Data Type</p>
        <p>Is a blueprint to objects</p>
        <p>An instance of a class is called object</p>
        <p>
          Class can be Static / Non-Static, if its Static then its methods
          should be static
        </p>
        <p>
          When you declare the modifier static to method or field then the field
          will belong to the class rather than the instance of the class and
          instances will not have command over the static modified fields and
          methods.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Object Syntax</h2>
        <p>Datatype variableName = new Constructor ();</p>
        <p>
          Creates an instance of the class and we can access
          variableName.something()
        </p>
        <p>Example:</p>
        <p>Dog Dog1 = new Dog ();</p>
        <p>Dog Dog2 = new Dog ();</p>
        <p>
          We have 2 different instances of Dog, we can do something like
          Dog1.Breed = x, Dog2.Breed = y;
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Constructor</h2>
        <p>
          A special method in Class that has same name as class and has no
          return types, used to initialize data in the class.
        </p>
        <p>Automatically called when the class is initiated.</p>
        <p>Types of constructors (Default, Copy, parameterized, Static etc)?</p>
        <p>Constructor Overloading is similar to that of Method overloading</p>
        <p>Example:</p>
        <p>Dog Dog1 = new Dog (x);</p>
        <p>Dog Dog2 = new Dog (x, y);</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Method</h2>
        <p>
          Section of code to run a block of code whenever invoked / called. So
          that repetitive code can be eliminated
        </p>
        <p>
          Syntax: Access Specifier ReturnType MethodName (Parameters){" "}
          {`{return variable of ReturnType};`}
        </p>
        <p>If Return type is Void, then no return value</p>
        <p>Parameter syntax = Datatype parameter name</p>
        <p>
          All parameters combined are called Signature of the method Example:
          SomeMethod(int someInteger)
        </p>
        <p>
          Variables declared inside the method are member variables only
          available in the scope of the method
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Optional Parameter</h2>
        <p>Should be the last parameter in the signature</p>
        <p>Should have a default or custom value assigned to it</p>
        <p>We can have only 1 optional parameter</p>
        <p>
          So, if we do not pass value to that parameter then the assigned value
          is considered
        </p>
        <p>Example:</p>
        <p>
          Public void SomeMethod(int integer, double decimal, string =
          “someString”) {`{ // Does Something }`}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Params</h2>
        <p>
          Single Dimension Array of arguments / Parameters for a same method
        </p>
        <p>Syntax:</p>
        <p>Public double TotalCost (params double [] price) {`{`}</p>
        <p>Var Total = 0;</p>
        <p>Foreach (var item in price) {`{`}</p>
        <p>Total += price;</p>
        <p>{`}`}</p>
        <p>Return total;</p>
        <p>{`}`}</p>
        <p>
          i.e., while calling this method we can pass as many parameters of
          similar data type to the method
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Recursive Method</h2>
        <p>
          Advantage: Easier debugging, Easier to Code, Alternative to iteration
        </p>
        <p>Disadvantages: Sometimes slow and memory consumption is high</p>
        <p>
          Method calling itself over and over we will have break or return
          statement (to break cyclic loop)
        </p>
      </div>
    </div>
  );
};

export default Definitions;
