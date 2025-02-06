import React from "react";

const EntityFramework = () => {
  const renderList = (items) => (
    <ul className="list-disc pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const Section = (title, content) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {content}
    </div>
  );

  const entityFrameworkContent = (
    <ul className="list-disc pl-6">
      <li>
        To excel in Entity Framework, you need a good understanding of LINQ and
        Async Programming.
      </li>
      <li>
        What is Entity Framework?
        {renderList([
          "It is used to manage RDBMS (SQL Server, PostgreSQL, MySQL, etc.) which are based on tables.",
          "It is an ORM Framework (Object Relational Mapping) that allows querying and manipulating data from a database in an object-oriented way.",
          renderList([
            "The ORM Framework automatically creates classes for tables and vice versa.",
            "The goal of EF is to replace ADO.NET.",
          ]),
          "Advantages",
          renderList([
            "It abstracts the database details.",
            "You can write queries using C# and LINQ.",
            "Produces clean code.",
            "Enables quick development.",
          ]),
          "Disadvantages",
          renderList([
            "SQL queries are faster and more optimal as they offer more control.",
            "It has a steep learning curve.",
            "Handling SQL Stored procedures and views can be complex.",
          ]),
          "Supports Code First (default convention) and DB First approach (limited support).",
          renderList([
            "There is also a Model First approach, similar to DB First (create models and get auto-generated scripts for tables, views, etc.).",
          ]),
        ])}
      </li>
      <li>
        Dapper is a lightweight ORM with better performance and easier to learn.
      </li>
      <li>
        The latest version is EF 6 (built for .NET Framework with support for
        .NET Core).
      </li>
      <li>
        EF Core 7 is the latest and future version (EF Core 8 is in preview).
      </li>
      <li>Use EF Core 7 for new developments.</li>
      <li>Comparison between EF 6 and EF Core 7 (Ref Link).</li>
    </ul>
  );

  const gettingStartedContent = (
    <ul className="list-disc pl-6">
      <li>Install SQL Server Management Studio 19 (latest version).</li>
      <li>
        Run the following commands:
        {renderList([
          "install --global dotnet-ef",
          "dotnet tool update --global dotnet-ef",
          "Install through NuGet Packages:",
          renderList([
            "Microsoft.EntityFrameworkCore.SqlServer",
            "Microsoft.EntityFrameworkCore.Design",
            "Microsoft.Extensions.Configuration.Json",
            "Microsoft.Extensions.Logging.Console (useful for seeing background queries in EF)",
          ]),
        ])}
      </li>
    </ul>
  );

  const codeFirstApproachContent = (
    <ul className="list-disc pl-6">
      <li>
        Create model classes and add properties (Classes = Tables, Properties =
        Column names).
      </li>
      <li>Create a context class and inherit from DbContext class.</li>
      <li>
        For better understanding:
        {renderList([
          "Create a factory class implementing IDesignTimeDbContextFactory<DerivedDBContextClass>.",
          renderList([
            "Create an instance of DbContextBuilder<DerivedDbContext>.",
            "Use .UseSqlServer/.UseOracleDB, etc., and pass the connection strings (stored in config files).",
            "Create an instance of ConfigurationBuilder that reads settings from config and pass those settings.",
          ]),
          "Run add migration command, check the SQL script, and update the database.",
          "Decorate properties using attributes to customize the schema.",
          renderList([
            "Example: Create an additional property and pass this property as a string to the attribute.",
          ]),
          "Use data annotations to add attributes to properties (like max length, primary key, etc.).",
          "By default, navigation properties are not loaded; use the include method to load them.",
        ])}
      </li>
    </ul>
  );

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {Section("Entity Framework (an ORM Framework)", entityFrameworkContent)}
        {Section(
          "Getting Started with Entity Framework",
          gettingStartedContent
        )}
        {Section(
          "Working with Entity Framework with Code First Approach",
          codeFirstApproachContent
        )}
      </div>
    </div>
  );
};

export default EntityFramework;
