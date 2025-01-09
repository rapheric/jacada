import React, { useState } from "react";
import { faqData } from "./faqData";

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gradient-to-r from-black via-gray-900 to-black dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 text-center font-bold text-3xl text-gray-700 dark:text-slate-200" >
            <h1>
                Frequently asked questions
            </h1>
        </div>
        <div className="flex flex-col gap-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg text-gray-800 font-semibold dark:text-gray-100">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform  text-gray-500 dark:text-white${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="p-6 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
