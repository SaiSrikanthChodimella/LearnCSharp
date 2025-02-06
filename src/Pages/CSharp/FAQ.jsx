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
        "Class is a reference type, Struct is a value type.",
        "Class supports inheritance, Struct does not (supports interface without implementation).",
        "Class variables are stored on the Heap, Struct variables are stored on the Stack.",
        "Class can have a destructor, Struct cannot.",
        "Boxing a class object creates a reference to the same object, Boxing a struct object creates a copy.",
        "All members of a Class are private by default, All members of a Struct are public by default.",
        "Class is well suited for data hiding, Structs are not.",
        "Copying a class copies the reference, so changes affect both. Copying a struct creates a new copy, so changes do not affect the other.",
        "Only the reference variable is destroyed, later GC destroys the actual object. Struct is immediately destroyed after scope is lost.",
        "Class can have a parameterless constructor, Struct cannot.",
        "Classes are not sealed by default, Structs are sealed by default.",
      ],
    },
    {
      title: "Method Hiding vs Method Overriding vs Overloading",
      items: [
        "Overloading: Same method name but different signature.",
        "Overriding: Overrides the parent’s method (virtual modifier in parent and override modifier in child method).",
        "Hiding: Child class has the same name and signature as the parent method without any modifiers.",
      ],
    },
    {
      title: "Base Keyword and This Keyword",
      items: [
        "Base keyword is used to call base class methods or constructors (base.parentMethod()).",
        "To call base class members, you can:",
        "Set the data type to the parent class while instantiating the child class.",
        "Or type cast the child to the parent class to access parent properties.",
        "This keyword is used to refer to the current instance of the object.",
      ],
    },
    {
      title: "Static vs Instance",
      items: [
        "Instance members belong to an object, static members belong to a class and are shared across all objects.",
        "Instance: Creating an instance of a class stores a new copy of that class’s members in memory.",
        "Static: Marking a class, method, field, or property as static means only one copy exists for the entire program, and you cannot create instances of it.",
        "Other important static rules:",
        "Static members cannot use 'this'.",
        "Static classes cannot be instantiated.",
        "Static constructors are called before instance constructors.",
        "When to use static?",
        "When you need a single, shared value (e.g., Math.PI).",
        "When writing utility/helper functions that do not need object data (Math.Sqrt()).",
        "When creating constants that do not change (e.g., a database connection string).",
      ],
    },
    {
      title: "Stack vs Heap",
      items: [
        "Physical memory is divided into two parts: stack and heap.",
        "Reference types are stored in the heap, value types are stored in the stack.",
        "Reference variables (holding the address of the actual object) are stored in the stack, the actual object is in the heap.",
        "Destruction of variables:",
        "When out of scope, stack data and reference variables are automatically destroyed.",
        "The actual object is destroyed by the garbage collector (GC) when it sees no pointer to the allocated memory.",
        "When does GC work?",
        "When memory is critically low, when explicitly called, or when GC thinks it's the right time.",
      ],
    },
    {
      title: "Type vs Type Members",
      items: [
        "Type: Classes, interfaces, delegates, structs, and enums (internal or public access modifiers only).",
        "Type members: Properties, fields, methods, constructors, etc. (all five access modifiers applicable).",
      ],
    },
    {
      title: "Attributes / Decorators",
      items: [
        "Attributes allow you to add declarative information to your programs, which can be queried at runtime using reflection (can be applied to types and type members).",
        "You can create custom attributes or use predefined attributes.",
        "Attributes are also classes.",
        "Examples:",
        "[Obsolete] - Indicates that it's outdated.",
        "[Serializable] - Indicates that the class can be serialized.",
        "[WebMethod] – Exposes a method as an XML web service.",
        "There are many more predefined attributes, based in the System.Attributes namespace.",
      ],
    },
    {
      title: "Records",
      items: [
        "A new type of class. Instead of creating a class, then a constructor, and passing parameters to that constructor, you can use records.",
        "Open the curly braces and it behaves like a class.",
        "Can be used like a simple data structure.",
      ],
    },
    {
      title: "is, as Keyword",
      items: [
        "is keyword checks at runtime if the data types are the same and returns a boolean.",
        "as keyword is used for casting; if casting fails, it returns null.",
      ],
    },
    {
      title: "POCO",
      items: [
        "Plain Old CLR Objects, just a class with a bunch of properties.",
      ],
    },
    {
      title: "Yield Keyword",
      items: [
        "Instead of creating a new list and adding items to it, you can use yield return (collective return).",
        "This works on any collection that returns IEnumerable.",
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
