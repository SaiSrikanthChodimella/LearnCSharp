import React from "react";

const DBClass = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">
          DbContext, DbContextOption and DbSet Class
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">DbContext</h2>
          <ul className="list-disc list-inside">
            <li>
              Class that is responsible for interacting with underlying Database
            </li>
            <li>Manages the Database connections</li>
            <li>Used for Saving and retrieval of data from database</li>
            <li>We create a class and inherit DbContext class</li>
            <li>Dbcontext exists in Microsoft.EntityFrameworkCore Namespace</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">DbContextOptions</h2>
          <p>
            For DbContext to perform operations we need an instance of
            DbContextOptions carries information such as:
          </p>
          <ul className="list-disc list-inside">
            <li>Connection String</li>
            <li>Database Provider etc.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">DbSet</h2>
          <p>Properties (are declared in DbContext Class):</p>
          <ul className="list-disc list-inside">
            <li>
              Create Properties for each available Entity type / Required Entity
              Type and we write LINQ queries against this property and these
              queries are translated to SQL Queries
            </li>
            <li>Implements IQueryable and IEnumerable</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">All Put Together</h2>
          <p>Should look something like this in the end:</p>
          <pre className="bg-gray-200 p-4 rounded">
            <code>
              {`public class DerivedDbConextClass : DBContext {
    public DerivedDBContextClass(DbcontextOptions<DerivedDbConextClass> abc) : base(abc) {}
    public DbSet<ModelClass> ModelClass { get; set; }
}`}
            </code>
          </pre>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Handling model changes in EF
          </h2>
          <p>
            We handle changes using Migrations. So, what is this Migration
            anyway?
          </p>
          <ul className="list-disc list-inside">
            <li>
              The auto generated code responsible for maintaining our database
              schema (Tables, columns in tables, keys etc.). Taking the C Sharp
              code and converting it into the SQL like queries in the
              background.
            </li>
            <li>
              Whenever we make modifications to our model, we need to add new
              migration (creates a modified migration code) and then run
              database update command (for the changes to be reflected)
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            So how do we use the migrations
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Once all your models are set up appropriately, through the
              terminal we can run the below commands:
            </li>
            <li>
              <code>dotnet ef migrations add &lt;MigrationName&gt;</code> -
              Creates a new folder (named Migrations) in our Solution where we
              can see a class with LINQ Style auto generated code which is
              conversion of our Model to DB
            </li>
            <li>
              <code>dotnet ef migrations script</code> - Auto generated Script
              of Schema creation in SQL, used for inspecting if the
              inconsistencies or mistakes in query before we run the update
              operations
            </li>
            <li>
              <code>dotnet ef database update</code> - Updates / Runs the
              migration command in SQL domain (latest Migration is picked by
              default)
            </li>
            <li>
              <code>dotnet ef migrations remove</code> - Removes the migration
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p>
            After a Db is generated and later model is changed and exception
            will be thrown as Model and DB are not in sync anymore.
          </p>
          <p>
            To check if the model has changed or not, check{" "}
            <code>_MigrationHistory</code> (auto generated table):
          </p>
          <ul className="list-disc list-inside">
            <li>
              Contains GUID (Migration ID), ContextKey (Our context Class),
              HashID of the Context Class and EF Version
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p>
            Global asax (Global Application Class) (this is how we do it in .NET
            Framework, need check how we do this in .NET 7):
          </p>
          <ul className="list-disc list-inside">
            <li>
              On Start check if there is a DB to our model and then choose to
              Drop, recreate the DB
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DBClass;
