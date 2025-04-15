// components/FAQSection.tsx
"use client"; // Required for useState and event handlers

import React, { useState, useMemo } from "react";
// Removed Image import as it's not used in the provided UI structure
// import Image from "next/image";

// Interface for individual FAQ items (kept locally)
interface AccordionItemProps {
  id: number | string; // Unique identifier
  question: string;
  answer: string;
  defaultOpen?: boolean; // We'll use this only for INITIAL state
}

// FAQ data defined directly within the component
const faqItemsData: AccordionItemProps[] = [
  {
    id: 1,
    question: "What is Preline Agency?",
    answer:
      "Preline Agency is a creative hub specializing in transforming conceptual visions into tangible realities through design, artistry, and technological innovation. We focus on web design and development for agencies and studios.",
  },
  {
    id: 2,
    question: "How does the theme switching work?",
    answer: "The theme (light/dark/auto) is initially set based on your localStorage preference ('hs_theme') or your OS setting. An inline script applies the correct theme class (dark or light) to the <html> tag before page render to prevent flickering.",
    defaultOpen: true, // This one will be open initially
  },
  {
    id: 3,
    question: "What technologies are used?",
    answer:
      "This template is built with Next.js (App Router), React, Tailwind CSS, and utilizes the Preline UI component library for styling and base attributes.",
  },
  {
    id: 4,
    question: "Is Preline UI's JS required?",
    answer:
      "While Preline UI's CSS/classes are used for styling, the open/close logic in this component is now managed by React's useState for reliable interactivity within the Next.js app.",
  },
  {
    id: 5,
    question: "Is Preline UI's JS required?",
    answer:
      "While Preline UI's CSS/classes are used for styling, the open/close logic in this component is now managed by React's useState for reliable interactivity within the Next.js app.",
  },
];

const FAQSection = () => {
  // State: Store the ID of the currently open item, or null if none are open.
  const [openItemId, setOpenItemId] = useState<string | number | null>(() => {
    // Calculate initial state based on defaultOpen
    const defaultOpenItem = faqItemsData.find(item => item.defaultOpen);
    return defaultOpenItem ? defaultOpenItem.id : null;
  });

  // Function to toggle an item's open state
  // If the clicked item is already open, close it (set state to null).
  // If a different item is clicked, open it (set state to its id).
  const handleToggle = (id: string | number) => {
    setOpenItemId(prevOpenId => (prevOpenId === id ? null : id));
  };

  return (
    // Keep the outer structure and styling as you provided
    <div className="bg-neutral-900">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Using the exact layout structure from your update */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Left Column: Title */}
            <div className="md:col-span-2">
              <div className="max-w-xs">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                  Frequently
                  <br />
                  asked questions
                </h2>
                <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                  Answers to the most frequently asked questions.
                </p>
              </div>
            </div>
            {/* End Left Column */}

            {/* Right Column: Accordion */}
            <div className="md:col-span-3">
              {/* Keep Preline's group class and dividers */}
              <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                {faqItemsData.map((item, idx) => {
                  // Determine if the CURRENT item is the one stored in state
                  const isOpen = openItemId === item.id;

                  return (
                    // Keep the item container structure and conditional padding
                    <div
                      key={item.id}
                      // Apply 'active' class based on React state for Preline CSS targeting
                      className={`hs-accordion${idx === 0 ? " pt-0 pb-3" : " pt-6 pb-3"}${isOpen ? " active" : ""}`}
                      id={`hs-basic-with-title-and-arrow-stretched-heading-${item.id}`}
                    >
                      <button
                        type="button" // Set type explicitly
                        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        // aria-expanded reflects the React state
                        aria-expanded={isOpen}
                        aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${item.id}`}
                        // onClick now calls our React state handler
                        onClick={() => handleToggle(item.id)}
                      >
                        {item.question}
                        {/* Icon: Rotation based on React state */}
                        <svg
                          className={`transition-transform duration-300 shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${isOpen ? "rotate-180" : ""}`} // Rotate class based on isOpen
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div
                        id={`hs-basic-with-title-and-arrow-stretched-collapse-${item.id}`}
                        // Content visibility based on React state
                        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300${isOpen ? "" : " hidden"}`} // Hidden class based on !isOpen
                        role="region"
                        aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${item.id}`}
                      // Optional: Explicit height for transition (might not be needed if Preline handles it via classes)
                      // style={{ height: isOpen ? undefined : '0px' }}
                      >
                        {/* Answer content */}
                        <div className="text-gray-600 dark:text-neutral-400 pb-3"> {/* Added pb-3 to match original likely intent */}
                          {/* Render string or ReactNode */}
                          {typeof item.answer === 'string' ? (
                            <p>{item.answer}</p>
                          ) : (
                            <div>{item.answer}</div> // Simple div wrapper for ReactNode
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;