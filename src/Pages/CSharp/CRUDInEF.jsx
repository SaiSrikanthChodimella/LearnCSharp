import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </div>
);

const CRUDInEF = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">
            Basic CRUD operations on DB using EF
          </h1>
          <div className="space-y-4">
            <Section title="Create">
              <ul className="list-disc list-inside">
                <li>
                  After the schema is created in DB, create new instances of
                  model classes and populate them with relevant information.
                </li>
                <li>
                  Create an instance of DerivedDbContext, use the relevant DBset
                  Property, and save the changes using async methods like
                  SaveChangesAsync.
                </li>
              </ul>
            </Section>
            <Section title="Update">
              <p>
                Modify the object values as intended and call SaveChangesAsync.
              </p>
            </Section>
            <Section title="Delete">
              <p>
                Use the Remove method and pass the object you want to remove.
              </p>
            </Section>
            <Section title="Read">
              <p>Use the Where clause to fetch data.</p>
            </Section>
            <Section title="Change Tracker in EF">
              <ul className="list-disc list-inside">
                <li>
                  Is on by default, can be disabled to improve performance.
                </li>
                <li>Tracks changes to objects it already knows.</li>
                <li>
                  Use dbContext.Entry(modelClassObject) to get entries of the
                  change tracker, each entry has a state.
                </li>
                <li>
                  Detached State: EF has no idea about the object / The object
                  is not being tracked.
                </li>
                <li>Added State: EF knows a new object is added.</li>
                <li>Unchanged State: There are no changes.</li>
                <li>
                  Modified State: Some changes have been made, but not yet
                  written to the database.
                </li>
                <li>Deleted State: Object has been removed.</li>
                <li>
                  We can read states and manually assign states based on
                  requirements.
                </li>
              </ul>
            </Section>
            <Section title="OriginalValue Property in Change Tracker">
              <ul className="list-disc list-inside">
                <li>
                  Use Entry.OriginalValue[nameof(modelClass.Property)] to know
                  the original value.
                </li>
                <li>
                  The value saved to the DB is treated as the original value.
                </li>
                <li>
                  Compares the current value of objects, identifies changes, and
                  marks states in the change tracker.
                </li>
                <li>Change trackers are specific to each data context.</li>
              </ul>
            </Section>
            <Section title="Attaching Entities Update() in Change Tracker">
              <ul className="list-disc list-inside">
                <li>
                  Takes an object not part of the change tracker and adds it to
                  the change tracker.
                </li>
                <li>Overwrites the entire object when using Update().</li>
              </ul>
            </Section>
            <Section title="Disabling Change Tracking">
              <p>
                Use the .AsNoTracking() method to improve performance when it is
                read-only.
              </p>
            </Section>
            <Section title="Executing Raw SQL statements in EF">
              <ul className="list-disc list-inside">
                <li>
                  When LINQ is not sufficient, use this method to write SQL
                  statements.
                </li>
                <li>Downside: it opens the gate for SQL injection.</li>
                <li>
                  Use FromSqlRaw(your SQL statement) or FromSqlInterpolated(your
                  SQL statement) if you have parameters.
                </li>
                <li>
                  Use ExecuteSqlRawAsync(your SQL statement) if you do not
                  return any data.
                </li>
              </ul>
            </Section>
            <Section title="Transactions in SQL">
              <p>
                Transaction ensures either everything is committed or everything
                is rolled back.
              </p>
              <p>
                Using var transaction = await
                Context.Database.BeginTransactionAsync()
              </p>
              <pre className="bg-gray-200 p-2 rounded">
                <code>
                  {`try {
    // Do something
    await transaction.CommitAsync();
} catch {
    // Do something
}`}
                </code>
              </pre>
            </Section>
            <Section title="Expression Trees">
              <p>Complex topic but important to understand its applications.</p>
              <p>
                C# code is translated by the compiler into IL, which is compiled
                by JIT into assembly language and executed in memory.
              </p>
              <p>
                EF prevents the statement from being compiled to ML because it
                makes more sense for our code to be translated to SQL rather
                than ML.
              </p>
              <p>This is done at runtime using LINQ.Expression.</p>
              <pre className="bg-gray-200 p-2 rounded">
                <code>{`Func<Dish,bool> func = x => x.Title.StartsWith("B");`}</code>
              </pre>
              <p>With a concept called Expression Trees:</p>
              <pre className="bg-gray-200 p-2 rounded">
                <code>{`Expression<Func<Dish, bool>> exfunc = x => x.Title.StartsWith("B");`}</code>
              </pre>
              <p>
                Generates an object tree, EF reads this at runtime and
                translates it to SQL.
              </p>
            </Section>
            <Section title="Relationships and Inheritance">
              <p>
                By default, base and derived classes are put into a single
                table, called table per hierarchy.
              </p>
              <p>
                Discriminator is a special column of type text, containing the
                name of the class the object is of. Other columns are null based
                on the value in the discriminator.
              </p>
              <p>To force EF to store derived tables:</p>
              <pre className="bg-gray-200 p-2 rounded">
                <code>{`protected override void OnModelCreating(ModelBuilder modelBuilder) {
    modelBuilder.Entity<DerivedClass>().HasBaseType<ParentClass>();
}`}</code>
              </pre>
              <p>We can use this to set DataAnnotations for our properties.</p>
            </Section>
            <Section title="Include Method">
              <p>
                Enforces inner join in the simplest way (also takes column
                names).
              </p>
              <p>
                Use Entry().Collection().LoadAsync() to explicitly load the
                instances.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRUDInEF;
