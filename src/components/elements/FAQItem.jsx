//chinmayi

"use client";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-600 py-4 transition-colors duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-lg font-semibold flex justify-between items-center text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
      >
        {question}
        <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">{answer}</p>}
    </div>
  );
};

export default FAQItem;

