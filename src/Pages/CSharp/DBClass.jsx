import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const CodeBlock = ({ code }) => (
  <pre className="bg-gray-200 p-4 rounded">
    <code>{code}</code>
  </pre>
);

const DBClass = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">
          DbContext, DbContextOptions, and DbSet Classes
        </h1>

        <Section title="DbContext">
          <ul className="list-disc list-inside">
            <li>Interacts with the database</li>
            <li>Manages database connections</li>
            <li>Saves and retrieves data</li>
            <li>Inherit from DbContext class</li>
            <li>Found in Microsoft.EntityFrameworkCore namespace</li>
          </ul>
        </Section>

        <Section title="DbContextOptions">
          <p>DbContext needs DbContextOptions to operate, which includes:</p>
          <ul className="list-disc list-inside">
            <li>Connection string</li>
            <li>Database provider</li>
          </ul>
        </Section>

        <Section title="DbSet">
          <p>Properties declared in DbContext class:</p>
          <ul className="list-disc list-inside">
            <li>
              Create properties for each entity type. LINQ queries against these
              properties are translated to SQL.
            </li>
            <li>Implements IQueryable and IEnumerable</li>
          </ul>
        </Section>

        <Section title="Putting It All Together">
          <p>Example:</p>
          <CodeBlock
            code={`public class DerivedDbContextClass : DbContext {
  public DerivedDbContextClass(DbContextOptions<DerivedDbContextClass> options) : base(options) {}
  public DbSet<ModelClass> ModelClass { get; set; }
}`}
          />
        </Section>

        <Section title="Handling Model Changes in EF">
          <p>Use migrations to handle model changes:</p>
          <ul className="list-disc list-inside">
            <li>
              Auto-generated code maintains the database schema. Converts C#
              code to SQL queries.
            </li>
            <li>
              Add a new migration and run the database update command to reflect
              changes.
            </li>
          </ul>
        </Section>

        <Section title="Using Migrations">
          <ul className="list-disc list-inside">
            <li>Set up models and run these commands in the terminal:</li>
            <li>
              <code>dotnet ef migrations add &lt;MigrationName&gt;</code> -
              Creates a new folder with migration code.
            </li>
            <li>
              <code>dotnet ef migrations script</code> - Generates a SQL script
              for schema creation.
            </li>
            <li>
              <code>dotnet ef database update</code> - Applies the latest
              migration.
            </li>
            <li>
              <code>dotnet ef migrations remove</code> - Removes the last
              migration.
            </li>
          </ul>
        </Section>

        <Section>
          <p>
            If the model changes after the database is generated, an exception
            will be thrown due to mismatch.
          </p>
          <p>
            Check <code>_MigrationHistory</code> table for model changes:
          </p>
          <ul className="list-disc list-inside">
            <li>Contains Migration ID, ContextKey, HashID, and EF Version.</li>
          </ul>
        </Section>

        <Section>
          <p>
            In .NET Framework, use Global.asax to check and recreate the
            database on start. Check how to do this in .NET 7.
          </p>
          <ul className="list-disc list-inside">
            <li>
              On start, check if the database matches the model and choose to
              drop and recreate it if necessary.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default DBClass;
