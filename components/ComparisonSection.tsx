// components/ComparisonSection.tsx
import React from 'react';
import Link from 'next/link'; // For the CTA button

// Local data for comparison points
const withoutUsPoints = [
    "Stagnant growth & missed opportunities",
    "Inefficient workflows & wasted resources",
    "Generic branding that fails to connect",
    "Outdated digital presence losing customers",
    "Falling behind competitors",
];

const withUsPoints = [
    "Accelerated growth & market expansion",
    "Optimized processes & cost savings",
    "Compelling brand identity that resonates",
    "Modern, engaging website driving conversions",
    "Competitive edge & industry leadership",
];

// SVG Icons (defined locally for clarity)
const XIcon = () => (
    <svg className="shrink-0 mt-0.5 size-5 text-neutral-500" // Dull gray color
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const CheckIcon = () => (
    <svg className="shrink-0 mt-0.5 size-5 text-[#ff0]" // Primary theme color
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"> {/* Note: Stroke width 3 for bolder check */}
        <polyline points="20 6 9 17 4 12" />
    </svg>
);


const ComparisonSection = () => {
    return (
        <div className="">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mb-10 lg:mb-14 mx-auto text-center">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                        Choose Your Path Forward
                    </h2>
                    <p className="mt-1 text-neutral-400">
                        Staying the course might feel safe, but partnering with us unlocks potential you haven't imagined.
                    </p>
                </div>
                {/* End Title */}

                {/* Grid for Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                    {/* Card 1: Without Us (The Old Way) */}
                    <div className="flex flex-col bg-neutral-900 border border-neutral-700 shadow-sm rounded-xl px-6 lg:p-8 h-full"> {/* Added h-full */}
                        <h3 className="text-lg font-semibold text-neutral-300 mb-4">
                            Sticking to the Status Quo...
                        </h3>
                        <ul className="space-y-3 text-neutral-400 text-sm lg:text-base">
                            {withoutUsPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-x-3">
                                    <XIcon />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* End Card 1 */}

                    {/* Card 2: With Us (The Preline Way) */}
                    <div className="flex flex-col bg-neutral-900 border border-[#ff0]/30 shadow-sm rounded-xl p-6 lg:p-8 h-full ring-1 ring-neutral-700 hover:ring-[#ff0]/50 transition-shadow duration-300"> {/* Added highlight border/ring & h-full */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Partnering with Preline Agency...
                        </h3>
                        <ul className="space-y-3 text-neutral-200 text-sm lg:text-base"> {/* Slightly brighter text */}
                            {withUsPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-x-3">
                                    <CheckIcon />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button Area - Pushed to bottom */}
                        <div className="mt-auto pt-6 flex justify-end">
                            <Link
                                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0]/50 focus:ring-offset-neutral-800 hover:bg-yellow-300 transition" // Adjusted offset color
                                href="#contact" // Links to contact section ID
                            >
                                Unlock Your Potential
                                <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    {/* End Card 2 */}

                </div>
                {/* End Grid */}
            </div>
        </div>
    );
};

export default ComparisonSection;