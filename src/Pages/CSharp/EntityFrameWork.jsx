import React from "react";

const EntityFramework = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4">
            Entity Framework (an ORM Framework)
          </h2>
          <ul className="list-disc pl-6">
            <li>
              To be Good at Entity framework you need to have solid foundation
              on LINQ and Async Programming
            </li>
            <li>
              What is Entity Framework
              <ul className="list-disc pl-6">
                <li>
                  Used to handle RDBMS (SQL server, PostgreSQL, MYSQL, in Memory
                  for testing etc) which are built around table (Refer SQL
                  server Notes)
                </li>
                <li>
                  Is ORM Framework (object relational Mapping) it is a technique
                  that allows us to query and manipulate data from a Database in
                  Object oriented paradigm
                  <ul className="list-disc pl-6">
                    <li>
                      So ORM Framework automatically creates Classes for Tables
                      and vice versa (just by adding database schema we can get
                      the above features)
                    </li>
                    <li>Objective of EF is to supersede ADO.NET</li>
                  </ul>
                </li>
                <li>
                  Advantages
                  <ul className="list-disc pl-6">
                    <li>It abstracts us from the database</li>
                    <li>We can write queries using C# and LINQ</li>
                    <li>Clean code</li>
                    <li>Quick Development</li>
                  </ul>
                </li>
                <li>
                  Disadvantages
                  <ul className="list-disc pl-6">
                    <li>
                      Performance wise querying in SQL is much faster and
                      optimal as you have more control
                    </li>
                    <li>Difficult learning curve</li>
                    <li>
                      SQL Stored procedures and views are a bit complex to
                      handle
                    </li>
                  </ul>
                </li>
                <li>
                  Supports Code First (Default convention) and DB first approach
                  (has limited support as of now)
                  <ul className="list-disc pl-6">
                    <li>
                      We also have model first approach, but it's closer to DB
                      First approach (we create models and then we get auto
                      generated scripts for creation of tables, views etc)
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Dapper is a light weight ORM (which we might consider using),
              better performance and easier to learn.
            </li>
            <li>
              Latest Version is EF 6 (Built for .NET Framework with Support for
              .NET core, this is still in support but no longer has future
              development)
            </li>
            <li>
              EF Core 7 is latest and is future (as of date EF Core 8 is in
              preview stage).
            </li>
            <li>So, Use EF Core 7 for new developments</li>
            <li>Comparison between EF 6 and EF Core 7 (Ref Link)</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4">
            Getting Started with Entity Framework
          </h2>
          <ul className="list-disc pl-6">
            <li>Install SQL Server Management Studio 19 (Latest as of now)</li>
            <li>
              Run the following commands
              <ul className="list-disc pl-6">
                <li>install --global dotnet-ef</li>
                <li>dotnet tool update --global dotnet-ef</li>
                <li>
                  Install through Nuget Packages (More in case you need them)
                  <ul className="list-disc pl-6">
                    <li>Microsoft.EntityFrameworkCore.SqlServer</li>
                    <li>Microsoft.EntityFrameworkCore.Design</li>
                    <li>Microsoft.Extensions.Configuration.Json</li>
                    <li>
                      Microsoft.Extensions.Logging.Console (useful for seeing
                      background queries in EF)
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4">
            Working with Entity Framework with Code First Approach
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Create classes (called Model Classes) and fill them with
              properties (Classes = Tables and Properties = Column names)
            </li>
            <li>
              Create another class (Context Class / DerivedDBContextClass) and
              inherit DBContext class (refer Dbcontext, context options and
              DBset below)
            </li>
            <li>
              The Below step is for understanding and knowing the background, in
              ASP .NET we do not this part (not sure if it's same with WPF and
              WinForms)
              <ul className="list-disc pl-6">
                <li>
                  Create another Class (The Factory Class) and it will implement
                  the interface
                  IDesignTimeDbContextFactory&lt;DerivedDBContextClass&gt; (or
                  we can directly use DbcontextOptions)
                  <ul className="list-disc pl-6">
                    <li>
                      In this implementation Create an instance of
                      DbContextBuilder&lt;DerivedDbContext&gt;
                    </li>
                    <li>
                      And .UseSqlserver /.UseOracleDB etc and pass the
                      connection strings (Connection string should always be in
                      config files)
                      <ul className="list-disc pl-6">
                        <li>Why store connection string config</li>
                        <li>
                          It is safer as they contain sensitive information.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Create an instance of ConfigurationBuilder that reads
                      setting from config and pass those settings.
                    </li>
                  </ul>
                </li>
                <li>
                  Then we run add migration command, then check the SQL script
                  and update the database, this allows us to create data
                  Database and tables etc automatically.
                </li>
                <li>
                  Decorate the properties using Attributes to customize the
                  schema that is being created (useful when setting names for
                  PK, FK etc)
                  <ul className="list-disc pl-6">
                    <li>
                      Example: Create an additional property and pass this
                      property as string to attribute.
                    </li>
                  </ul>
                </li>
                <li>
                  Data Annotations are used to put Attributes on the properties
                  (like max length, primary key etc). Present in
                  System.ComponentModel.DataAnnotations (similar to that of
                  putting constraints on columns on in SQL server)
                </li>
                <li>
                  By Default, Navigation properties are not loaded, for them to
                  load we need to use include Method and pass the navigation
                  property as string to method (while reading)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntityFramework;
