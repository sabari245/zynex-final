// components/FAQSection.tsx
'use client'; // Required for useState and event handlers

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

// Interface for individual FAQ items (kept locally)
interface AccordionItemProps {
    id: number | string; // Unique identifier
    question: string;
    answer: string | React.ReactNode;
    defaultOpen?: boolean;
}

// FAQ data defined directly within the component
const faqItemsData: AccordionItemProps[] = [
    {
        id: 1,
        question: "What is Preline Agency?",
        answer: "Preline Agency is a creative hub specializing in transforming conceptual visions into tangible realities through design, artistry, and technological innovation. We focus on web design and development for agencies and studios."
    },
    {
        id: 2,
        question: "How does the theme switching work?",
        answer: "The theme (light/dark/auto) is initially set based on your localStorage preference ('hs_theme') or your operating system's setting. An inline script applies the correct theme class (dark or light) to the HTML tag before the page renders to prevent flickering. You can add UI elements later to manually change the theme preference stored in localStorage.",
        defaultOpen: true
    },
    {
        id: 3,
        question: "What technologies are used?",
        answer: "This template is built with Next.js (App Router), React, Tailwind CSS, and utilizes the Preline UI component library for interactive elements like accordions, dropdowns, and navigation collapse."
    },
    {
        id: 4,
        question: "Is Preline UI required?",
        answer: "Yes, the interactive components like this accordion, the header dropdowns, and the mobile navigation toggle rely on the Preline UI JavaScript library (preline.js) to function correctly."
    }

];


const FAQSection = () => {
    // State to track which items are open. Key is the item's id.
    const initialOpenState = useMemo(() => {
        return faqItemsData.reduce((acc, item) => {
            if (item.defaultOpen) {
                acc[item.id] = true;
            }
            return acc;
        }, {} as Record<string | number, boolean>);
    }, []); // Empty dependency array means this runs only once on mount

    const [openItems, setOpenItems] = useState<Record<string | number, boolean>>(initialOpenState);

    // Function to toggle an item's open state
    const handleToggle = (id: string | number) => {
        setOpenItems(prev => ({
            ...prev, // Keep state of other items
            [id]: !prev[id] // Toggle the clicked item
        }));
    };

    return (
        <div className="bg-neutral-900">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Frequently Asked Questions</h2>
                    <p className="mt-1 text-neutral-400">Find answers to common questions about our services and process.</p>
                </div>
                {/* End Title */}

                {/* Grid Layout */}
                <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-start"> {/* Use items-start */}

                    {/* Accordion Column */}
                    <div>
                        <div className="hs-accordion-group space-y-3"> {/* Use Preline's group class for styling context */}
                            {faqItemsData.map((item) => {
                                const isOpen = !!openItems[item.id]; // Check if the current item is open
                                const collapseId = `faq-collapse-${item.id}`;
                                const headingId = `faq-heading-${item.id}`;

                                return (
                                    <div
                                        key={item.id}
                                        // Conditionally apply 'active' class based on React state
                                        className={`hs-accordion bg-neutral-800 border border-transparent rounded-xl ${isOpen ? 'active' : ''} hs-accordion-active:border-neutral-700`}
                                        id={headingId}
                                    >
                                        <button
                                            type="button" // Good practice for buttons not submitting forms
                                            // Use React's onClick to manage state
                                            onClick={() => handleToggle(item.id)}
                                            className="hs-accordion-toggle hs-accordion-active:text-[#ff0] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-neutral-200 py-4 px-5 hover:text-neutral-400 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-neutral-400"
                                            aria-controls={collapseId}
                                            // Set aria-expanded based on React state
                                            aria-expanded={isOpen}
                                        >
                                            {item.question}
                                            {/* Minus Icon (when active/open) */}
                                            <svg
                                                // Use conditional rendering or classes based on React state
                                                className={`${isOpen ? 'block' : 'hidden'} size-3.5 text-neutral-400`}
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>
                                            {/* Plus Icon (when inactive/closed) */}
                                            <svg
                                                // Use conditional rendering or classes based on React state
                                                className={`${!isOpen ? 'block' : 'hidden'} size-3.5 text-neutral-400`}
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="M12 5v14" />
                                            </svg>
                                        </button>

                                        {/* Collapsible content panel */}
                                        <div
                                            id={collapseId}
                                            // Use conditional rendering or 'hidden' class based on React state for content visibility
                                            // We still use Preline's transition classes for the animation effect
                                            className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${!isOpen ? 'hidden' : ''}`}
                                            // Style attribute for height transition (Preline might handle this, but manual can be safer)
                                            style={{ height: isOpen ? undefined : '0px' }} // Let height be auto when open, 0 when closed for transition
                                            role="region"
                                            aria-labelledby={headingId}
                                        >
                                            <div className="pb-4 px-5">
                                                {typeof item.answer === 'string' ? (
                                                    <p className="text-neutral-300">{item.answer}</p>
                                                ) : (
                                                    <div className="text-neutral-300 prose prose-invert prose-sm max-w-none">{item.answer}</div> // Added prose classes for better node styling
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* End Accordion Column */}

                    {/* Image Column */}
                    <div className="hidden md:block mt-0"> {/* Removed margin top */}
                        {/* Replace with your desired image */}
                        <Image
                            className="rounded-xl w-full h-auto object-cover"
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example relevant image
                            alt="Person asking a question or support concept"
                            width={600} // Adjust aspect ratio as needed
                            height={800} // Adjust aspect ratio as needed
                        // priority // Optional: if high on the page
                        />
                    </div>
                    {/* End Image Column */}

                </div>
                {/* End Grid Layout */}
            </div>
        </div>
    );
};

export default FAQSection;