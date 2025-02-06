import React from "react";

const FAQItem = ({ title, children }) => (
  <div className="p-4 border rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

const FAQList = ({ items }) => (
  <ul className="list-disc pl-5">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const FAQ = () => {
  const faqData = [
    {
      title: "Struct vs Class",
      items: [
        "Class is a reference type, Struct is a value type",
        "Class supports inheritance, Struct does not (supports interface without implementation)",
        "Class variables are stored on Heap, Struct variables are stored on Stack",
        "Class can have destructor, Struct will not have destructor",
        "Boxing a class object creates reference to same object, Boxing a struct object will create a copy in diff type",
        "All the members of Class are private by default, All the members of struct are public by default",
        "Class is well suited for Data hiding, Structs are not suited for Data hiding",
        "Copying a class into another class copies the reference variable, so changes affect both. Copying a struct creates a new copy, so changes do not affect the other.",
        "Only the reference variable is destroyed, later GC destroys the actual object. Struct is immediately destroyed after scope is lost.",
        "Class can have parameterless constructor, Struct cannot have explicit parameterless constructor",
        "Classes are not sealed by default, Structs are sealed types by default",
      ],
    },
    {
      title: "Method Hiding vs Method Overriding vs Overloading",
      items: [
        "Overload = Same Method name but different Signature",
        "Override = Overrides the parent’s Method (virtual modifier in Parent and Override modifier in Child method)",
        "Hiding = Child Class has same Name and Signature as Parent Method without any modifiers",
      ],
    },
    {
      title: "Base Keyword and This Keyword",
      items: [
        "Base Keyword is used to call Base Class Methods or Constructors etc (base.parentMethod())",
        "To call base class members we can we have 2 other ways:",
        "While instantiation child class set data type to parent class",
        "Or Type cast the child to Parent class to access parent properties",
        "This is used to refer the current reference of the object / instance",
      ],
    },
    {
      title: "Static Vs Instance",
      items: [
        "We can create instance members (which belong to an object) and static members (which belong to a class and are shared across all objects).",
        "Instance: When you create an instance of a class, a new copy of that class’s members (fields, properties, and methods) is stored in memory.",
        "Static: When you mark a class, method, field, or property as static, it means only one copy exists for the entire program, and you cannot create instances of it.",
        "Other Important Static Rules:",
        "Static Members Cannot Use this",
        "Static Classes Cannot Be Instantiated",
        "Static Constructors Are Called Before Instance Constructors",
        "When to Use Static?",
        "When you need a single, shared value (e.g., Math.PI).",
        "When writing utility/helper functions that do not need object data (Math.Sqrt()).",
        "When creating constants that do not change (e.g., a database connection string).",
      ],
    },
    {
      title: "Stack vs Heap",
      items: [
        "Physical Memory is divided into 2 parts: stack and heap",
        "Reference types are stored in Heap and Value types are stored in Stack",
        "Reference variables (holds address of the actual object) are stored in stack and the actual object is inside heap",
        "Destruction of variables:",
        "When out of scope the stack data and reference variable are automatically destroyed",
        "The actual object is destroyed by Garbage collector (when GC looks at heap and sees that there is no pointer to the allocated memory, then it destroys it)",
        "When does GC work:",
        "When memory is critically low, or when we explicitly call it or when GC thinks it right time.",
      ],
    },
    {
      title: "Type vs Type Members",
      items: [
        "Type = Classes, Interfaces, Delegates, Structs and Enums (internal or Public Access Modifiers only)",
        "Type Members = Properties, Fields, Methods, Constructors etc (all 5 Access Modifiers applicable)",
      ],
    },
    {
      title: "Attributes / Decorators",
      items: [
        "Allows you to add declarative information to your programs, and this information can be queried at runtime using reflection (Can be applied to types(classes, delegates etc) and type members(methods, properties, fields etc)).",
        "We can create our custom attributes or use pre-defined attributes.",
        "Attributes are also classes",
        "Examples:",
        "[Obsolete] - Indicates that its outdated",
        "[Serializable] - Indicates that the class can be serialized",
        "[Web Method] – exposes a method as XML web service",
        "There are many more attributes (pre-defined), base for them is in System.Attributes namespace",
      ],
    },
    {
      title: "Records",
      items: [
        "New Type of Class (Instead of creating class, then creating constructor and passing parameters to that constructor then setting properties values of that based on parameters we can use records)",
        "Open the curly braces and it behaves like class",
        "Can use it like a simple data structure",
      ],
    },
    {
      title: "is, as Keyword",
      items: [
        "is keyword during run time checks if the data types are same and returns bool",
        "as keyword is used for casting if casting fails returns null",
      ],
    },
    {
      title: "POCO",
      items: ["Plain old CLR objects, just a class with bunch of properties"],
    },
    {
      title: "Yield Keyword",
      items: [
        "Instead of creating a new List, and add items to list, we can use Yield return (collective return)",
        "This works on any collection that returns IEnumerable",
      ],
      code: `//List<HeroRecord> listofHerosThatCanFly = new List<HeroRecord>();
foreach (HeroRecord item in listofHeros)
{
  if (heroListDelegate(item))
  {
    yield return item;
    //listofHerosThatCanFly.add(item)
  }
}
// return listofHerosThatCanFly;`,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Few Questions and Answers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} title={faq.title}>
            {faq.items && <FAQList items={faq.items} />}
            {faq.code && (
              <pre className="bg-gray-100 p-2 rounded">
                <code>{faq.code}</code>
              </pre>
            )}
          </FAQItem>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
