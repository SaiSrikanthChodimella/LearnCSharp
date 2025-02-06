import React from "react";

const CRUDInEF = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">
            Basic CRUD operations on DB using EF
          </h1>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Create</h2>
              <ul className="list-disc list-inside">
                <li>
                  After the schema is created in DB, we simply create new
                  instances of our model classes and populate them with relevant
                  information
                </li>
                <li>
                  Then create an instance of DerivedDbContext, use the relevant
                  DBset Property and then save the changes (always use async
                  methods = SaveChangesAsync)
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Update</h2>
              <p>
                Just Modify the object values as intended and call
                SaveChangesAsync
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Delete</h2>
              <p>
                Use Remove Method and pass the object which we want to remove
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Read</h2>
              <p>Use Where Clause to fetch Data</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Change Tracker in EF</h2>
              <ul className="list-disc list-inside">
                <li>
                  Is on by default, can be disabled to improve performance
                </li>
                <li>
                  Mechanism which tracks changes to objects which it already
                  knows.
                </li>
                <li>
                  dbContext.Entry(model class object), to get entries of change
                  tracker and each entry has a state
                </li>
                <li>
                  Detached State: EF has no idea about the object / The object
                  is not being tracked.
                </li>
                <li>Added State: EF knows a new object is added</li>
                <li>Unchanged State: There are no changes</li>
                <li>
                  Modified State: Some changes have been made, but not yet
                  written to database
                </li>
                <li>Deleted State: Object has been removed</li>
                <li>
                  We can not only read states but also manually assign states
                  based on requirement
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">
                OriginalValue Property in Change Tracker
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Entry.OriginalValue[nameof(modelClass.Property)], to know what
                  the original value
                </li>
                <li>
                  The value that is saved to Db is treated as original value
                </li>
                <li>
                  And then compares the current value of that objects are
                  identifies the changes and marks the states in Change tracker
                </li>
                <li>
                  These change trackers are specific for each specific data
                  context
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">
                Attaching Entities Update() in Change Tracker
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Takes an object which is not part of change tracker and adds
                  it to the change tracker
                </li>
                <li>Overwrites the entire object when we use Update()</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">
                Disabling Change Tracking
              </h2>
              <p>
                Use the .AsNoTracking() method to improve performance when it is
                read-only
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">
                Executing Raw SQL statements in EF
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  When LINQ is not sufficient, we can use this method to write
                  SQL statements
                </li>
                <li>Downside is it opens gate for SQL injection</li>
                <li>FromSqlRaw (your SQL statement)</li>
                <li>Consider using FromSqlInterpolated</li>
                <li>FromSqlInterpolated (your SQL statement)</li>
                <li>If you have parameters use FromSqlInterpolated</li>
                <li>ExecuteSqlRawAsync (your SQL statement)</li>
                <li>If you do not return any data</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Transactions in SQL</h2>
              <p>
                Transaction is either everything is committed else everything is
                rolled back.
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
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Expression Trees</h2>
              <p>Complex topic but need to understand its applications</p>
              <p>
                C# code translated by compiler into IL-{">"} IL is compiled by
                JIT -{">"} to assembly language and executed in memory is the
                general case.
              </p>
              <p>
                But magically, EF prevents the statement from being compiled to
                ML because it makes more sense for our code to be compiled
                /translated to SQL language rather than ML.
              </p>
              <p>
                This is done at Runtime (cannot interpret the ML generated
                method, done by LINQ.Expression)
              </p>
              <pre className="bg-gray-200 p-2 rounded">
                <code>{`Func<Dish,bool> func = x => x.Title.StartsWith("B");`}</code>
              </pre>
              <p>With a concept called Expression Trees</p>
              <pre className="bg-gray-200 p-2 rounded">
                <code>{`Expression<Func<Dish, bool>> exfunc = x => x.Title.StartsWith("B");`}</code>
              </pre>
              <p>
                Generates Object Tree, EF Read this at runtime and translates
                this to SQL
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">
                Relationships and Inheritance
              </h2>
              <p>
                By Default, Base class and Derived class are put into single
                table this is called table per hierarchy.
              </p>
              <p>
                Discriminator is a special column of type text, contains the
                name of the class that is object is of, the other columns are
                null based on the value in discriminator
              </p>
              <p>
                To force EF to Store derived Tables we need do the following
              </p>
              <pre className="bg-gray-200 p-2 rounded">
                <code>{`protected override void OnModelCreating(ModelBuilder modelBuilder) {
    // Can be used to Set Data Annotations
    modelBuilder.Entity<DerivedClass>().HasBaseType<ParentClass>();
}`}</code>
              </pre>
              <p>
                We can use this to set DataAnnotations for our properties
                (another option)
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Include Method</h2>
              <p>
                Enforcing inner join in simplest way (also takes column names)
              </p>
              <p>
                Entry().Collection().LoadAsync() – This line with explicitly
                load the instances
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRUDInEF;
