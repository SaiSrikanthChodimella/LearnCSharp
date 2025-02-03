import React from "react";

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Why C#?</h1>
        <p className="text-gray-700 mb-2">
          Flexible for many application types with the help of .NET (Current
          version 8), especially business applications:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Web (Asp.net)</li>
          <li>Windows (WinForms, WPF and UPF)</li>
          <li>Console Apps</li>
          <li>Mobile Apps (Android, iOS and MacOS by Mono/Xamarin)</li>
          <li>Graphics / Games by (Unity)</li>
          <li>Cross Platform by .NET Core framework</li>
          <li>Cloud (Azure)</li>
          <li>IOT and AI applications</li>
          <li>Opensource (Lots of support on Stack Overflow etc)</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Current Version C# 12 (Refer wiki for Iterations details)
        </p>
        <p className="text-gray-700 mt-2">OOPS (Object Oriented Programming)</p>
      </div>
    </div>
  );
};

export default HomePage;
