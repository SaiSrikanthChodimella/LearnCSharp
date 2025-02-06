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

const codeExamples = {
  conditionalStatements: [
    {
      title: "If-Else Statement",
      description:
        "The if-else statement runs code based on a condition. Use it when you have two possible outcomes.",
      code: `int num = 10;
if (num > 0)
{
    Console.WriteLine("Positive number");
}
else
{
    Console.WriteLine("Negative number");
}`,
    },
    {
      title: "Switch Statement",
      description:
        "The switch statement chooses one of many code blocks to run. Use it for multiple conditions.",
      code: `int day = 3;
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
}`,
    },
    {
      title: "Switch Expression",
      description:
        "The switch expression provides a concise way to assign values based on conditions.",
      code: `int day = 3;
string result = day switch
{
    1 => "Monday",
    2 => "Tuesday",
    _ => "Other day" // _ is the default case
};

Console.WriteLine(result);`,
    },
  ],
  loops: [
    {
      title: "For Loop",
      description:
        "The for loop runs a block of code a specific number of times. Use it to iterate over a range.",
      code: `int counter = 5;
for (int i = 1; i <= counter; i++)
{
    Console.WriteLine(i);
}`,
    },
    {
      title: "Foreach Loop",
      description:
        "The foreach loop iterates over a collection of items. Use it for arrays and lists.",
      code: `string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}`,
    },
    {
      title: "While Loop",
      description:
        "The while loop runs a block of code as long as a condition is true. Use it for indefinite loops.",
      code: `int i = 1;
while (i <= 5)
{
    Console.WriteLine(i);
    i++;
}`,
    },
    {
      title: "Do-While Loop",
      description:
        "The do-while loop runs a block of code at least once, then repeats as long as a condition is true.",
      code: `int j = 1;
do
{
    Console.WriteLine(j);
    j++;
} while (j <= 5);`,
    },
  ],
};

const ConditionsAndFlows = () => (
  <div className="p-8">
    <Section title="Conditional Statements">
      {codeExamples.conditionalStatements.map((example, index) => (
        <CodeBlock
          key={index}
          title={example.title}
          description={example.description}
          code={example.code}
        />
      ))}
    </Section>

    <Section title="Loops">
      {codeExamples.loops.map((example, index) => (
        <CodeBlock
          key={index}
          title={example.title}
          description={example.description}
          code={example.code}
        />
      ))}
    </Section>
  </div>
);

export default ConditionsAndFlows;
