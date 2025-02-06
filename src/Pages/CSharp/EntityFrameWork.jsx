import React from "react";

const EntityFramework = () => {
  const renderList = (items) => (
    <ul className="list-disc pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const renderSection = (title, content) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {content}
    </div>
  );

  const entityFrameworkContent = (
    <ul className="list-disc pl-6">
      <li>
        To be good at Entity Framework, you need a solid foundation in LINQ and
        Async Programming.
      </li>
      <li>
        What is Entity Framework
        {renderList([
          "Used to handle RDBMS (SQL Server, PostgreSQL, MySQL, in-memory for testing, etc.) built around tables.",
          "Is an ORM Framework (Object Relational Mapping) that allows querying and manipulating data from a database in an object-oriented paradigm.",
          renderList([
            "ORM Framework automatically creates classes for tables and vice versa.",
            "Objective of EF is to supersede ADO.NET.",
          ]),
          "Advantages",
          renderList([
            "It abstracts us from the database.",
            "We can write queries using C# and LINQ.",
            "Clean code.",
            "Quick development.",
          ]),
          "Disadvantages",
          renderList([
            "Performance-wise, querying in SQL is much faster and optimal as you have more control.",
            "Difficult learning curve.",
            "SQL Stored procedures and views are a bit complex to handle.",
          ]),
          "Supports Code First (default convention) and DB First approach (limited support).",
          renderList([
            "We also have Model First approach, closer to DB First approach (we create models and then get auto-generated scripts for creation of tables, views, etc.).",
          ]),
        ])}
      </li>
      <li>
        Dapper is a lightweight ORM with better performance and easier to learn.
      </li>
      <li>
        Latest Version is EF 6 (Built for .NET Framework with support for .NET
        Core).
      </li>
      <li>
        EF Core 7 is the latest and future version (EF Core 8 is in preview
        stage).
      </li>
      <li>Use EF Core 7 for new developments.</li>
      <li>Comparison between EF 6 and EF Core 7 (Ref Link).</li>
    </ul>
  );

  const gettingStartedContent = (
    <ul className="list-disc pl-6">
      <li>Install SQL Server Management Studio 19 (Latest as of now).</li>
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
        Create model classes and fill them with properties (Classes = Tables,
        Properties = Column names).
      </li>
      <li>Create a context class and inherit DbContext class.</li>
      <li>
        For understanding and knowing the background:
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
          "Use data annotations to put attributes on properties (like max length, primary key, etc.).",
          "By default, navigation properties are not loaded; use the include method to load them.",
        ])}
      </li>
    </ul>
  );

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {renderSection(
          "Entity Framework (an ORM Framework)",
          entityFrameworkContent
        )}
        {renderSection(
          "Getting Started with Entity Framework",
          gettingStartedContent
        )}
        {renderSection(
          "Working with Entity Framework with Code First Approach",
          codeFirstApproachContent
        )}
      </div>
    </div>
  );
};

export default EntityFramework;
