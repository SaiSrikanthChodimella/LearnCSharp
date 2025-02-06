import React from "react";

const FAQ = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Few Questions and Answers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Struct vs Class</h2>
          <ul className="list-disc pl-5">
            <li>Class is a reference type, Struct is a value type</li>
            <li>
              Class supports inheritance, Struct does not (supports interface
              without implementation)
            </li>
            <li>
              Class variables are stored on Heap, Struct variables are stored on
              Stack
            </li>
            <li>Class can have destructor, Struct will not have destructor</li>
            <li>
              Boxing a class object creates reference to same object, Boxing a
              struct object will create a copy in diff type
            </li>
            <li>
              All the members of Class are private by default, All the members
              of struct are public by default
            </li>
            <li>
              Class is well suited for Data hiding, Structs are not suited for
              Data hiding
            </li>
            <li>
              Copying a class into another class copies the reference variable,
              so changes affect both. Copying a struct creates a new copy, so
              changes do not affect the other.
            </li>
            <li>
              Only the reference variable is destroyed, later GC destroys the
              actual object. Struct is immediately destroyed after scope is
              lost.
            </li>
            <li>
              Class can have parameterless constructor, Struct cannot have
              explicit parameterless constructor
            </li>
            <li>
              Classes are not sealed by default, Structs are sealed types by
              default
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Method Hiding vs Method Overriding vs Overloading
          </h2>
          <ul className="list-disc pl-5">
            <li>Overload = Same Method name but different Signature</li>
            <li>
              Override = Overrides the parent’s Method (virtual modifier in
              Parent and Override modifier in Child method)
            </li>
            <li>
              Hiding = Child Class has same Name and Signature as Parent Method
              without any modifiers
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Base Keyword and This Keyword
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Base Keyword is used to call Base Class Methods or Constructors
              etc (base.parentMethod())
            </li>
            <li>
              To call base class members we can we have 2 other ways:
              <ul className="list-disc pl-5">
                <li>
                  While instantiation child class set data type to parent class
                </li>
                <li>
                  Or Type cast the child to Parent class to access parent
                  properties
                </li>
              </ul>
            </li>
            <li>
              This is used to refer the current reference of the object /
              instance
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Static Vs Instance</h2>
          <ul className="list-disc pl-5">
            <li>
              We can create instance members (which belong to an object) and
              static members (which belong to a class and are shared across all
              objects).
            </li>
            <li>
              Instance: When you create an instance of a class, a new copy of
              that class’s members (fields, properties, and methods) is stored
              in memory.
            </li>
            <li>
              Static: When you mark a class, method, field, or property as
              static, it means only one copy exists for the entire program, and
              you cannot create instances of it.
            </li>
            <li>
              Other Important Static Rules:
              <ul className="list-disc pl-5">
                <li>Static Members Cannot Use this</li>
                <li>Static Classes Cannot Be Instantiated</li>
                <li>
                  Static Constructors Are Called Before Instance Constructors
                </li>
              </ul>
            </li>
            <li>
              When to Use Static?
              <ul className="list-disc pl-5">
                <li>When you need a single, shared value (e.g., Math.PI).</li>
                <li>
                  When writing utility/helper functions that do not need object
                  data (Math.Sqrt()).
                </li>
                <li>
                  When creating constants that do not change (e.g., a database
                  connection string).
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Stack vs Heap</h2>
          <ul className="list-disc pl-5">
            <li>Physical Memory is divided into 2 parts: stack and heap</li>
            <li>
              Reference types are stored in Heap and Value types are stored in
              Stack
            </li>
            <li>
              Reference variables (holds address of the actual object) are
              stored in stack and the actual object is inside heap
            </li>
            <li>
              Destruction of variables:
              <ul className="list-disc pl-5">
                <li>
                  When out of scope the stack data and reference variable are
                  automatically destroyed
                </li>
                <li>
                  The actual object is destroyed by Garbage collector (when GC
                  looks at heap and sees that there is no pointer to the
                  allocated memory, then it destroys it)
                </li>
              </ul>
            </li>
            <li>
              When does GC work:
              <ul className="list-disc pl-5">
                <li>
                  When memory is critically low, or when we explicitly call it
                  or when GC thinks it right time.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Type vs Type Members</h2>
          <ul className="list-disc pl-5">
            <li>
              Type = Classes, Interfaces, Delegates, Structs and Enums (internal
              or Public Access Modifiers only)
            </li>
            <li>
              Type Members = Properties, Fields, Methods, Constructors etc (all
              5 Access Modifiers applicable)
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Attributes / Decorators
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Allows you to add declarative information to your programs, and
              this information can be queried at runtime using reflection (Can
              be applied to types(classes, delegates etc) and type
              members(methods, properties, fields etc)).
            </li>
            <li>
              We can create our custom attributes or use pre-defined attributes.
            </li>
            <li>Attributes are also classes</li>
            <li>
              Examples:
              <ul className="list-disc pl-5">
                <li>[Obsolete] - Indicates that its outdated</li>
                <li>
                  [Serializable] - Indicates that the class can be serialized
                </li>
                <li>[Web Method] – exposes a method as XML web service</li>
              </ul>
            </li>
            <li>
              There are many more attributes (pre-defined), base for them is in
              System.Attributes namespace
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Records</h2>
          <ul className="list-disc pl-5">
            <li>
              New Type of Class (Instead of creating class, then creating
              constructor and passing parameters to that constructor then
              setting properties values of that based on parameters we can use
              records)
            </li>
            <li>Open the curly braces and it behaves like class</li>
            <li>Can use it like a simple data structure</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">is, as Keyword</h2>
          <ul className="list-disc pl-5">
            <li>
              is keyword during run time checks if the data types are same and
              returns bool
            </li>
            <li>
              as keyword is used for casting if casting fails returns null
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">POCO</h2>
          <p>Plain old CLR objects, just a class with bunch of properties</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Yield Keyword</h2>
          <p>
            Instead of creating a new List, and add items to list, we can use
            Yield return (collective return)
          </p>
          <p>This works on any collection that returns IEnumerable</p>
          <pre className="bg-gray-100 p-2 rounded">
            <code>
              {`//List<HeroRecord> listofHerosThatCanFly = new List<HeroRecord>();
foreach (HeroRecord item in listofHeros)
{
        if (heroListDelegate(item))
        {
                yield return item;
                //listofHerosThatCanFly.add(item)
        }
}
// return listofHerosThatCanFly;`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
