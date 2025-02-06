import React from "react";

const LINQPage = () => {
  const sections = [
    {
      title: "Why Use LINQ?",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Concise and Readable:</strong> LINQ expressions are easier
            to read than traditional loops and conditions.
          </li>
          <li>
            <strong>Type Safety:</strong> LINQ queries are checked at
            compile-time.
          </li>
          <li>
            <strong>IntelliSense Support:</strong> Visual Studio provides
            IntelliSense for LINQ queries.
          </li>
          <li>
            <strong>Uniform Data Access:</strong> LINQ offers a common query
            interface for different data sources like objects, databases (LINQ
            to SQL), XML (LINQ to XML), and more.
          </li>
          <li>
            <strong>Deferred Execution:</strong> Queries are executed only when
            they are iterated over, optimizing performance.
          </li>
        </ul>
      ),
    },
    {
      title: "Architecture",
      content: (
        <p>
          The LINQ Provider translates the LINQ Query to be native to the data
          source.
        </p>
      ),
    },
    {
      title: "Writing LINQ Queries",
      content: (
        <>
          <p>
            You can write LINQ queries in two ways (both have the same
            performance):
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Lambda Expressions</li>
            <li>SQL-like Query</li>
          </ul>
          <p>
            LINQ works on all <code>IEnumerable&lt;T&gt;</code> interfaces.
          </p>
        </>
      ),
    },
    {
      title: "Operators in LINQ",
      content: (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoBox
              title="Aggregate Functions"
              content={
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono whitespace-pre-wrap break-words">{`int[] array = {1,2,3,4,5,6,7,8,9,10}
result = array.Min();
result = array.Max();
result = array.Where(x => x % 2 == 0).Min();
result = array.Count();
result = array.Sum();
result = array.Aggregate((a, b) => a * b);
result = stringArray.Aggregate((a, b) => a + "," + b);
result = array.Aggregate(10, (a, b) => a * b);`}</code>
                </pre>
              }
            />
            <BentoBox
              title="Restriction Operator"
              content={
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono whitespace-pre-wrap break-words">{`result = array.Where(x => x % 2 == 0);`}</code>
                </pre>
              }
            />
            <BentoBox
              title="Projection Operator"
              content={
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono whitespace-pre-wrap break-words">{`Select()
- Create a new anonymous data type using:
- Select(x => new { a = x.Something, b = x.SomeValue, c = x.SomeOtherValue })

SelectMany()
- Flatten a list property of all objects into a single sequence:
- SelectMany(x => x.SomeList);
- Use Distinct() to get unique values`}</code>
                </pre>
              }
            />
            {/* Add more BentoBox components for other operators */}
          </div>
        </div>
      ),
    },
    {
      title: "Lambda Expressions",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code>=&gt;</code> is called the go-to operator.
          </li>
          <li>Useful in writing LINQ queries.</li>
          <li>Automatically infers parameter data type.</li>
          <li>Supersedes the Anonymous method.</li>
          <li>Anonymous method can replace lambda in some cases.</li>
          <li>
            <code>Item.Click += delegate does some action </code>
          </li>
          <li>
            <code>
              Item.Click += (eventSender, eventArgs) =&gt; {"some action"};
            </code>
          </li>
          <li>
            Actions, Functions, and Predicates are easier to read using lambda
            functions.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">LINQ</h1>
        <p className="text-lg text-gray-700 mb-8">
          LINQ stands for Language Integrated Query. It allows us to run queries
          on any type of data store (SQL Server, XML Docs, Objects in Memory,
          etc).
        </p>
        <div className="space-y-8">
          {sections.map((section, index) => (
            <BentoBox
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <p className="mt-8 text-gray-700">
          To master LINQ, use LINQPad to test and work with LINQ.
        </p>
      </div>
    </div>
  );
};

const BentoBox = ({ title, content }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
    <div className="text-gray-700">{content}</div>
  </div>
);

export default LINQPage;
