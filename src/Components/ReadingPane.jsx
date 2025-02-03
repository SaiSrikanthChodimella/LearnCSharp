import React from "react";

const ReadingPane = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to the Dashboard
        </h1>
        <p className="mt-4 text-gray-700">
          This is the main content area. Here you can read paragraphs that are
          optimized for all types of screens.
        </p>
      </article>
    </main>
  );
};
export default ReadingPane;
