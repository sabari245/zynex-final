// components/TestimonialsGrid.tsx
import React from 'react';
import Image from 'next/image'; // For potential avatars

// Local data for the testimonials
const testimonialData = [
    {
        id: 1,
        quote: "Working with Preline Agency was a game-changer. Their strategic approach and design expertise elevated our brand presence significantly. Highly recommended!",
        name: "Sarah L.",
        title: "Marketing Director, TechCorp",
        avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example avatar
    },
    {
        id: 2,
        quote: "The team's attention to detail and commitment to our project goals were outstanding. They delivered a fantastic website that exceeded our expectations.",
        name: "Michael B.",
        title: "CEO, Innovate Solutions",
        avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example avatar
    },
    // Add more testimonials here if needed, they will wrap in the grid
];

// Helper component for the quote SVG for cleaner code
const QuoteIcon = () => (
    <svg className="absolute top-6 start-6 size-10 text-neutral-700" width="40" height="40" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7.414 1.414a.5.5 0 0 0-.707 0l-6 6a.5.5 0 0 0 .707.707L7.414 2.121a.5.5 0 0 0 0-.707zm5 0a.5.5 0 0 0-.707 0l-6 6a.5.5 0 0 0 .707.707l6-6a.5.5 0 0 0 0-.707z" />
        <path d="M7.414 7.414a.5.5 0 0 0-.707 0l-6 6a.5.5 0 0 0 .707.707L7.414 8.121a.5.5 0 0 0 0-.707zm5 0a.5.5 0 0 0-.707 0l-6 6a.5.5 0 0 0 .707.707l6-6a.5.5 0 0 0 0-.707z" />
    </svg>
);


const TestimonialsGrid = () => {
    // Configure image hostname in next.config.js if using external URLs like unsplash
    // module.exports = { images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] } };

    return (
        <div className="">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mb-10 lg:mb-14 mx-auto text-center">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Client experiences</h2>
                    <p className="mt-1 text-neutral-400">Hear directly from those who've partnered with us and achieved remarkable results.</p>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonialData.map((testimonial) => (
                        // Testimonial Card
                        <div key={testimonial.id} className="relative flex flex-col bg-neutral-900 border border-neutral-700 shadow-sm rounded-xl p-6 lg:p-8">
                            <QuoteIcon /> {/* Decorative quote icon */}
                            <div className="flex-grow pt-8"> {/* Add padding top to avoid overlap with quote icon */}
                                <p className="text-lg lg:text-xl text-neutral-200 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Footer / Attribution */}
                            <footer className="mt-6 pt-5 border-t border-neutral-700/50 flex items-center gap-x-3">
                                <Image
                                    className="size-10 rounded-full object-cover"
                                    src={testimonial.avatarUrl}
                                    alt={`Avatar of ${testimonial.name}`}
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                                    <div className="text-xs text-neutral-400">{testimonial.title}</div>
                                </div>
                            </footer>
                        </div>
                        // End Testimonial Card
                    ))}
                </div>
                {/* End Grid */}
            </div>
        </div>
    );
};

export default TestimonialsGrid;