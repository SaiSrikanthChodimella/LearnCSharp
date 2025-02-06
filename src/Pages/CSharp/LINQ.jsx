import React from "react";

const LINQPage = () => {
  const sections = [
    {
      title: "Why Use LINQ?",
      content: (
        <ul className="list-disc list-inside mb-4">
          <li>
            Concise and Readable: LINQ expressions are easier to read than
            traditional loops and conditions.
          </li>
          <li>Type Safety: LINQ queries are checked at compile-time.</li>
          <li>
            IntelliSense Support: Visual Studio provides IntelliSense for LINQ
            queries.
          </li>
          <li>
            Uniform Data Access: LINQ offers a common query interface for
            different data sources like objects, databases (LINQ to SQL), XML
            (LINQ to XML), and more.
          </li>
          <li>
            Deferred Execution: Queries are executed only when they are iterated
            over, optimizing performance.
          </li>
        </ul>
      ),
    },
    {
      title: "Architecture",
      content: (
        <p className="mb-4">
          The LINQ Provider translates the LINQ Query to be native to the data
          source.
        </p>
      ),
    },
    {
      title: "Writing LINQ Queries",
      content: (
        <>
          <p className="mb-4">
            You can write LINQ queries in two ways (both have the same
            performance):
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lambda Expressions</li>
            <li>SQL-like Query</li>
          </ul>
          <p className="mb-4">
            LINQ works on all <code>IEnumerable&lt;T&gt;</code> interfaces.
          </p>
        </>
      ),
    },
    {
      title: "Operators in LINQ",
      content: (
        <>
          <p className="mb-4">(also known as LINQ Extended Methods)</p>
          <OperatorSection
            title="Aggregate Functions"
            code={`int[] array = {1,2,3,4,5,6,7,8,9,10}
result = array.Min();
result = array.Max();
result = array.Where(x => x % 2 == 0).Min();
result = array.Count();
result = array.Sum();
result = array.Aggregate((a, b) => a * b);
result = stringArray.Aggregate((a, b) => a + "," + b);
result = array.Aggregate(10, (a, b) => a * b);`}
          />
          <OperatorSection
            title="Restriction Operator"
            code={`result = array.Where(x => x % 2 == 0);`}
          />
          <OperatorSection
            title="Projection Operator"
            code={`Select()
- Create a new anonymous data type using:
- Select(x => new { a = x.Something, b = x.SomeValue, c = x.SomeOtherValue })

SelectMany()
- Flatten a list property of all objects into a single sequence:
- SelectMany(x => x.SomeList);
- Use Distinct() to get unique values`}
          />
          <OperatorSection
            title="Ordering / Sorting Operators"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>OrderBy, OrderByDesc = For primary sorting</li>
                <li>ThenBy, ThenByDesc = For secondary sorting</li>
                <li>Reverse() = Simple reverse</li>
              </ul>
            }
          />
          <OperatorSection
            title="Partition Operator"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>Take, TakeWhile: Retrieve a specified range of values</li>
                <li>
                  Skip, SkipWhile: Skip a specified range of values and retrieve
                  the rest
                </li>
              </ul>
            }
          />
          <OperatorSection
            title="Conversion Operator"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>ToList() - Convert to a List</li>
                <li>ToArray() - Convert to an Array</li>
                <li>
                  ToDictionary() - Convert to a Dictionary with unique key-value
                  pairs
                </li>
                <li>
                  ToLookup() - Similar to Dictionary but allows duplicate keys
                </li>
                <li>
                  Cast - Convert all elements to a specified data type, throws
                  exception on inconsistency
                </li>
                <li>OfType - Retrieve elements of a specified data type</li>
                <li>
                  AsEnumerable - Retrieve all data from SQL server and run
                  remaining operations on client side
                </li>
                <li>
                  AsQueryable - Run operations on server side with filters and
                  return data
                </li>
              </ul>
            }
          />
          <OperatorSection
            title="Grouping Operator"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>
                  Organize flat sequence data into groups and return a
                  dictionary
                </li>
                <li>Result = array.GroupBy(valid lambda function);</li>
                <li>Console.log the result.Key and result.Count()</li>
                <li>
                  Filter results using another expression in count method or
                  other aggregate functions
                </li>
                <li>Group by Multiple Keys by creating an anonymous type</li>
              </ul>
            }
          />
          <OperatorSection
            title="Element Operators"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>
                  Retrieve a single element from a sequence using element index
                  or condition
                </li>
                <li>First / FirstOrDefault – Get the first value</li>
                <li>Last / LastOrDefault – Get the last value</li>
                <li>
                  ElementAt / ElementAtOrDefault – Get value at a specific index
                </li>
                <li>
                  Single / SingleOrDefault – Use when expecting only one element
                </li>
                <li>
                  DefaultIfEmpty – Returns a sequence, useful to check if empty,
                  can take a default value
                </li>
              </ul>
            }
          />
          <OperatorSection
            title="Join Operators"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>Group Join – Useful for hierarchical data</li>
                <li>
                  Inner Join – Obtain common/matching elements and exclude
                  unwanted results
                </li>
                <li>
                  Left Join and Right Join – Achieved by GroupJoin and
                  SelectMany
                </li>
                <li>
                  Cross Join – Produces cartesian product using SelectMany
                </li>
              </ul>
            }
          />
          <OperatorSection
            title="General Operator"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>Range – Enumerable.Range(start, count)</li>
                <li>Repeat – Enumerable.Repeat(value, count)</li>
                <li>
                  Empty – Enumerable.Empty&lt;dataType&gt;() – Returns an empty
                  sequence
                </li>
              </ul>
            }
          />
          <OperatorSection
            title="Set Operator"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>
                  Distinct – Get unique values, useful for single sequences, has
                  overload for complex sequences
                </li>
                <li>
                  Union – Combine two sequences, excludes duplicates, for
                  complex sequences use anonymous type or implement IEquality
                  comparator
                </li>
                <li>Intersect – Return common elements between sequences</li>
                <li>
                  Except – Get elements present in the first sequence and
                  exclude common elements in both sequences
                </li>
              </ul>
            }
          />
          <OperatorSection
            title="Concatenation Operator"
            content={
              <p className="mb-4">
                <code>Concat</code> combines multiple sequences into a single
                sequence, unlike union, it doesn’t exclude common elements.
              </p>
            }
          />
          <OperatorSection
            title="Sequence Operator"
            content={
              <>
                <p className="mb-4">
                  <code>SequenceEqual</code> checks if two sequences are equal
                  pairwise and returns a boolean, has overload.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Both sequences should have the same number of elements
                  </li>
                  <li>
                    Both sequences should have the same values (can use order by
                    to sort them)
                  </li>
                </ul>
              </>
            }
          />
          <OperatorSection
            title="Quantifier Operator"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>
                  All – Check if all elements in the sequence satisfy a
                  condition
                </li>
                <li>
                  Any – Check if any element in the sequence satisfies a
                  condition, has overload
                </li>
                <li>Contains – Returns a boolean, has overload</li>
              </ul>
            }
          />
          <OperatorSection
            title="Lambda Expressions"
            content={
              <ul className="list-disc list-inside mb-4">
                <li>=&gt; is called the go-to operator</li>
                <li>Useful in writing LINQ queries</li>
                <li>Automatically infers parameter data type</li>
                <li>Supersedes the Anonymous method</li>
                <li>Anonymous method can replace lambda in some cases</li>
                <li>
                  <code>Item.Click += delegate does some action </code>
                </li>
                <li>
                  Item.Click += (eventSender, eventArgs) =&gt; {"some action"};
                </li>
                <li>
                  Actions, Functions, and Predicates are easier to read using
                  lambda functions
                </li>
              </ul>
            }
          />
          <OperatorSection
            title="Classification of Operators (Query Execution)"
            content={
              <>
                <p className="mb-4">
                  Deferred or Lazy Operators – Use deferred execution
                </p>
                <p className="mb-4">
                  Immediate or Greedy Operators – Use lazy execution
                </p>
                <p className="mb-4">
                  Deferred Execution = Not executed where declared, use
                  immediate operators to make it immediate
                </p>
                <p className="mb-4">Lazy Execution = Executed where declared</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Select, Where, Skip</li>
                  <li>Count, Average, Min, Max, ToList</li>
                </ul>
              </>
            }
          />
        </>
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">LINQ</h1>
      <p className="mb-4">
        LINQ stands for Language Integrated Query. It allows us to run queries
        on any type of data store (SQL Server, XML Docs, Objects in Memory,
        etc).
      </p>
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
      <p className="mb-4">
        To master LINQ, use LINQPad to test and work with LINQ.
      </p>
    </div>
  );
};

const Section = ({ title, content }) => (
  <>
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    {content}
  </>
);

const OperatorSection = ({ title, code, content }) => (
  <>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {code && (
      <pre className="bg-gray-200 p-4 rounded mb-4">
        <code>{code}</code>
      </pre>
    )}
    {content}
  </>
);

export default LINQPage;
