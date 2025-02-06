import React from "react";

const LINQPage = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">LINQ</h1>
      <p className="mb-4">
        LINQ stands for Language Integrated Query. It enables us to run queries
        on any type of data store (SQL Server, XML Docs, Objects in Memory,
        etc).
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why Use LINQ?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Concise and Readable: LINQ expressions are more readable compared to
          traditional loops and conditions.
        </li>
        <li>Type Safety: LINQ queries are checked at compile-time.</li>
        <li>
          IntelliSense Support: Visual Studio provides IntelliSense for LINQ
          queries.
        </li>
        <li>
          Uniform Data Access: LINQ provides a common query interface for
          different data sources like objects, databases (LINQ to SQL), XML
          (LINQ to XML), and more.
        </li>
        <li>
          Deferred Execution: Queries are executed only when they are iterated
          over, optimizing performance.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Architecture</h2>
      <p className="mb-4">
        LINQ Provider translates the LINQ Query with respect to the data source
        (such that it's native to the data source).
      </p>
      <h2 className="text-2xl font-semibold mb-2">Writing LINQ Queries</h2>
      <p className="mb-4">
        We can write LINQ queries in two ways (no difference in performance):
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Lambda Expressions</li>
        <li>SQL-like Query</li>
      </ul>
      <p className="mb-4">
        Should work on all <code>IEnumerable&lt;T&gt;</code> interface.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Operators in LINQ</h2>
      <p className="mb-4">(also known as LINQ Extended Methods)</p>
      <h3 className="text-xl font-semibold mb-2">Aggregate Functions</h3>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        <code>
          {`int[] array = {1,2,3,4,5,6,7,8,9,10}
result = array.Min();
result = array.Max();
result = array.Where(x => x % 2 == 0).Min();
result = array.Count();
result = array.Sum();
result = array.Aggregate((a, b) => a * b);
result = stringArray.Aggregate((a, b) => a + "," + b);
result = array.Aggregate(10, (a, b) => a * b);`}
        </code>
      </pre>
      <h3 className="text-xl font-semibold mb-2">Restriction Operator</h3>
      <p className="mb-4">
        <code>Where</code> (valid Lambda Expression) is an extension method used
        for filtering the data.
      </p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        <code>result = array.Where(x ={">"} x % 2 == 0);</code>
      </pre>
      <h3 className="text-xl font-semibold mb-2">Projection Operator</h3>
      <p className="mb-4">
        <code>Select</code> and <code>SelectMany</code> are extension methods
        for transforming the result data and performing operations on them.
      </p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        <code>
          {`Select()
- We create a new anonymous data type by using the below methods
- Select(x => new { a = x.Something, b = x.SomeValue, c = x.SomeOtherValue })

SelectMany()
- Let us assume we have a list of string property for few objects, using SelectMany we can flatten the list property of all objects into a single sequence.
- SelectMany(x => x.SomeList);
- Use Distinct() to get distinct values`}
        </code>
      </pre>
      <h3 className="text-xl font-semibold mb-2">
        Ordering / Sorting Operators
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>OrderBy, OrderByDesc = For primary sorting</li>
        <li>ThenBy, ThenByDesc = For secondary sorting</li>
        <li>Reverse() = Simple reverse</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Partition Operator</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Take, TakeWhile: Pass a value in parameter and only the specified
          values range is retrieved
        </li>
        <li>
          Skip, SkipWhile: Pass a value in parameter skips those values and get
          remaining
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Conversion Operator</h3>
      <ul className="list-disc list-inside mb-4">
        <li>ToList() - To List</li>
        <li>ToArray() - To an Array</li>
        <li>ToDictionary() - Unique Key Value Pairs</li>
        <li>
          ToLookup() - Similar to that of Dictionary but can have similar values
        </li>
        <li>
          Cast will convert all elements in the list to specified data type, in
          case of inconsistencies will throw a Cast exception
        </li>
        <li>OfType will only get all elements of specified data type</li>
        <li>
          AsEnumerable runs get all data from SQL server and run the remaining
          operations on client side
        </li>
        <li>
          AsQueryable runs on server side with all filters and returns data
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Grouping Operator</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Takes a flat sequence data or flattens the data and organize them into
          groups and returns a dictionary
        </li>
        <li>Result = array.GroupBy(valid lambda function);</li>
        <li>Then console.log the result.Key and result.Count()</li>
        <li>
          And result can be filtered by adding another expression in count
          method or using other aggregate functions
        </li>
        <li>
          If you want to Group by Multiple Keys then create an anonymous type
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Element Operators</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Retrieve a single element from sequence using element index or a
          condition, all these methods have a corresponding overloaded methods
          that accepts a predicate (returns bool takes DS as parameter)
        </li>
        <li>First / FirstOrDefault – Get First Value</li>
        <li>Last / LastOrDefault – Get Last Value</li>
        <li>ElementAt / ElementAtOrDefault – At value at that index</li>
        <li>
          Single / SingleOrDefault – Use only when you expect only 1 element
        </li>
        <li>
          DefaultIfEmpty – Returns a sequence, useful to check if empty or not,
          overloaded method takes a default value
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Join Operators</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Group Join – useful for getting hierarchical data</li>
        <li>
          Inner Join – To obtain common / Matching elements from result and
          exclude unwanted results
        </li>
        <li>Left join and Right Join – attained by GroupJoin and SelectMany</li>
        <li>
          Cross join – Produces cartesian product inner key and outer key using
          SelectMany
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">General Operator</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Range – Enumerable.Range(start, count)</li>
        <li>Repeat – Enumerable.Repeat(value, count)</li>
        <li>
          Empty – Enumerable.Empty&lt;dataType&gt;() – To return an empty
          sequence
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Set Operator</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Distinct – Get Unique value, useful for handling single sequence, has
          overload for complex sequences implement IEquality comparator
          (Equality Method and get Hashcode method)
        </li>
        <li>
          Union – Combine two sequences, excludes duplicates, for complex
          sequences use anonymous type or implement IEquality comparator,
          anonymous type is simpler
        </li>
        <li>Intersect – Return common elements between</li>
        <li>
          Except – Get elements present in first sequence and exclude common
          elements in both sequences
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Concatenation Operator</h3>
      <p className="mb-4">
        <code>Concat</code> used to club multiple sequences to a single
        sequence, similar to that of union but doesn’t exclude common elements.
      </p>
      <h3 className="text-xl font-semibold mb-2">Sequence Operator</h3>
      <p className="mb-4">
        <code>SequenceEqual</code> to check if two sequences are equal by
        pairwise and returns bool, has overload.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Should have same number of elements in both sequences</li>
        <li>Same values are to be present (can use order by to sort them)</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Quantifier Operator</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          All – pass a condition to check if all elements sequence is satisfied
        </li>
        <li>
          Any – pass a condition to check any element in sequence is satisfied,
          has overload
        </li>
        <li>Contains – Returns bool, has overload</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Lambda Expressions</h3>
      <ul className="list-disc list-inside mb-4">
        <li>=&gt; is called as go to operator</li>
        <li>Most useful in writing LINQ query</li>
        <li>Automatically infers parameter data type</li>
        <li>Supersedes the Anonymous method all the time</li>
        <li>A case where Anonymous method can replace lambda is</li>
        <li>
          {" "}
          <code>Item.Click += delegate does some action </code>
        </li>
        <li>Item.Click += (eventSender, eventArgs) =&gt; {"some action"};</li>
        <li>
          Actions, Functions and Predicates are easy to read using lambda
          functions
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">
        Classification of Operators (Query Execution)
      </h3>
      <p className="mb-4">
        Deferred or Lazy Operators – Uses deferred execution
      </p>
      <p className="mb-4">
        Immediate or Greedy Operators – Uses lazy execution
      </p>
      <p className="mb-4">
        Deferred Execution = Not executed at place where it's declared, to make
        it as immediate use immediate operators
      </p>
      <p className="mb-4">
        Lazy Execution = Executed at the place where it's declared
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Select, Where, Skip</li>
        <li>Count, Average, Min, Max, ToList</li>
      </ul>
      <p className="mb-4">
        To master LINQ, use LINQPad to test and work with LINQ.
      </p>
    </div>
  );
};

export default LINQPage;
