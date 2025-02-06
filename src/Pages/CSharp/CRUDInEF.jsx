import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const CRUDInEF = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Basic CRUD operations on DB using EF
      </h1>
      <div className="space-y-4">
        <Section title="Create">
          <ul className="list-disc list-inside">
            <li>
              Create new instances of model classes and fill them with data.
            </li>
            <li>Use DerivedDbContext to save changes with SaveChangesAsync.</li>
          </ul>
        </Section>
        <Section title="Update">
          <p>Change object values and call SaveChangesAsync.</p>
        </Section>
        <Section title="Delete">
          <p>Use the Remove method to delete an object.</p>
        </Section>
        <Section title="Read">
          <p>Use the Where clause to get data.</p>
        </Section>
        <Section title="Change Tracker in EF">
          <ul className="list-disc list-inside">
            <li>
              Tracks changes to objects by default, can be disabled for better
              performance.
            </li>
            <li>
              Use dbContext.Entry(modelClassObject) to get change tracker
              entries.
            </li>
            <li>States: Detached, Added, Unchanged, Modified, Deleted.</li>
            <li>Manually assign states if needed.</li>
          </ul>
        </Section>
        <Section title="OriginalValue Property in Change Tracker">
          <ul className="list-disc list-inside">
            <li>
              Use Entry.OriginalValue[nameof(modelClass.Property)] to get the
              original value.
            </li>
            <li>Original value is the value saved to the DB.</li>
            <li>
              Compares current values to identify changes and update states.
            </li>
            <li>Change trackers are specific to each data context.</li>
          </ul>
        </Section>
        <Section title="Attaching Entities Update() in Change Tracker">
          <ul className="list-disc list-inside">
            <li>Adds an object to the change tracker.</li>
            <li>Update() overwrites the entire object.</li>
          </ul>
        </Section>
        <Section title="Disabling Change Tracking">
          <p>
            Use .AsNoTracking() for read-only operations to improve performance.
          </p>
        </Section>
        <Section title="Executing Raw SQL statements in EF">
          <ul className="list-disc list-inside">
            <li>Use raw SQL when LINQ is not enough.</li>
            <li>Be cautious of SQL injection.</li>
            <li>
              Use FromSqlRaw or FromSqlInterpolated for queries with parameters.
            </li>
            <li>Use ExecuteSqlRawAsync for non-query SQL statements.</li>
          </ul>
        </Section>
        <Section title="Transactions in SQL">
          <p>
            Transactions ensure all operations are committed or rolled back.
          </p>
          <p>Example:</p>
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
          <p>
            Expression trees allow EF to translate C# code to SQL at runtime.
          </p>
          <p>Example:</p>
          <pre className="bg-gray-200 p-2 rounded">
            <code>{`Expression<Func<Dish, bool>> exfunc = x => x.Title.StartsWith("B");`}</code>
          </pre>
        </Section>
        <Section title="Relationships and Inheritance">
          <p>
            Base and derived classes are stored in a single table by default.
          </p>
          <p>Use a discriminator column to identify the class type.</p>
          <p>To store derived classes in separate tables:</p>
          <pre className="bg-gray-200 p-2 rounded">
            <code>{`protected override void OnModelCreating(ModelBuilder modelBuilder) {
    modelBuilder.Entity<DerivedClass>().HasBaseType<ParentClass>();
}`}</code>
          </pre>
        </Section>
        <Section title="Include Method">
          <p>Use Include to enforce inner joins.</p>
          <p>Use Entry().Collection().LoadAsync() to load related data.</p>
        </Section>
      </div>
    </div>
  );
};

export default CRUDInEF;
