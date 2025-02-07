import React from "react";

const codingStandards = [
  { title: "Variable Naming", content: "Use camelCase (e.g., userName)." },
  {
    title: "Class Naming",
    content: "Use PascalCase and a noun (e.g., UserManager).",
  },
  {
    title: "Constant Variables",
    content: "Use PascalCase (e.g., MaxRetries).",
  },
  {
    title: "Private Variables",
    content:
      "Prefix with an underscore and use camelCase (e.g., _internalData).",
  },
  {
    title: "Interface Naming",
    content: "Prefix with 'I' (e.g., IUserService).",
  },
  {
    title: "Method Naming",
    content: "Use PascalCase and start with a verb (e.g., GetUserData).",
  },
  { title: "Property Naming", content: "Use PascalCase (e.g., UserName)." },
  {
    title: "Namespace Naming",
    content: "Use meaningful and structured names.",
  },
  {
    title: "Braces Alignment",
    content: "Keep braces vertically aligned for readability.",
  },
  {
    title: "Code Formatting Shortcut",
    content: "Use Ctrl + K, Ctrl + D (Visual Studio).",
  },
];

const principles = [
  {
    title: "SOLID Principles",
    items: [
      "Single Responsibility - Each class should have one purpose.",
      "Open/Closed - Extend functionality without modifying existing code.",
      "Liskov Substitution - Subtypes should be interchangeable with their base types.",
      "Interface Segregation - Keep interfaces small and focused.",
      "Dependency Inversion - Depend on abstractions, not concrete implementations.",
    ],
  },
  {
    title: "Best Practices",
    items: [
      "KISS (Keep It Simple, Stupid) - Write clean, straightforward code.",
      "DRY (Don't Repeat Yourself) - Reuse code to avoid duplication.",
      "YAGNI (You Ain’t Gonna Need It) - Don't add features you don’t need yet.",
    ],
  },
];

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

function CodingStandards() {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Coding Standards & Best Practices
        </h2>
        <p className="mb-8">
          Following consistent coding standards improves readability,
          maintainability, and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codingStandards.map(({ title, content }, index) => (
            <Section key={index} title={title}>
              <p className="mb-8">{content}</p>
            </Section>
          ))}
        </div>

        {principles.map(({ title, items }, index) => (
          <Section key={index} title={title}>
            <ul className="list-disc list-inside space-y-2">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>
        ))}

        <Section title="Unit Testing (More Details Coming Soon)">
          <p className="mb-8">Recommended tools: Moq and NUnit.</p>
        </Section>
      </div>
    </div>
  );
}

export default CodingStandards;
