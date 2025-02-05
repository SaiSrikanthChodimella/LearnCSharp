import React from "react";

const CodeBlock = ({ title, description, code }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <p className="mb-4">{description}</p>
    <pre className="bg-gray-100 p-4 rounded mb-4">
      <code>{code}</code>
    </pre>
  </div>
);

const Section = ({ title, children }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-6">{title}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </div>
);

const ConditionsAndFlows = () => {
  return (
    <div className="p-8">
      <Section title="Conditional Statements">
        <CodeBlock
          title="If-Else Statement"
          description="Use the if-else statement to execute code based on a condition. It's useful when you have two possible outcomes."
          code={`int num = 10;
if (num > 0)
{
    Console.WriteLine("Positive number");
}
else
{
    Console.WriteLine("Negative number");
}`}
        />
        <CodeBlock
          title="Switch Statement"
          description="Use the switch statement to select one of many code blocks to be executed. It's useful for handling multiple conditions."
          code={`int day = 3;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}`}
        />
        <CodeBlock
          title="Switch Expression"
          description="Use the switch expression for a more concise syntax when assigning values based on conditions."
          code={`int day = 3;
string result = day switch
{
    1 => "Monday",
    2 => "Tuesday",
    _ => "Other day" // _ is the default case
};

Console.WriteLine(result);`}
        />
      </Section>

      <Section title="Loops">
        <CodeBlock
          title="For Loop"
          description="Use the for loop to execute a block of code a specific number of times. It's useful for iterating over a range."
          code={`int counter = 5;
for (int i = 1; i <= counter; i++)
{
    Console.WriteLine(i);
}`}
        />
        <CodeBlock
          title="Foreach Loop"
          description="Use the foreach loop to iterate over a collection of items. It's useful for arrays and lists."
          code={`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}`}
        />
        <CodeBlock
          title="While Loop"
          description="Use the while loop to execute a block of code as long as a condition is true. It's useful for indefinite loops."
          code={`int i = 1;
while (i <= 5)
{
    Console.WriteLine(i);
    i++;
}`}
        />
        <CodeBlock
          title="Do-While Loop"
          description="Use the do-while loop to execute a block of code at least once, and then repeat as long as a condition is true."
          code={`int j = 1;
do
{
    Console.WriteLine(j);
    j++;
} while (j <= 5);`}
        />
      </Section>
    </div>
  );
};

export default ConditionsAndFlows;
